// lift state have the data on individual lift
const MAX_DISTANCE = 100000000;
const SPEED_PER_FLOOR = 2;
const DOOR_OPEN_TIME = 2000;

// Class
class LiftSystem {
  constructor(floors, lifts) {
    this.totalFloors = floors;
    this.totalLifts = lifts;

    this.liftState = new Array(lifts).fill().map(() => ({
      currentFloor: 0,
      requestQueue: [],
    }));
    this.pendingRequests = []; //global array
  }
  requestLift(floor, direction) {
    // don't assign the request if it's already in the queue
    if (
      this.liftState.some((lift) => {
        lift.requestQueue.some(
          (req) => req.floor === floor && req.direction === direction
        ) ||
          this.pendingRequests.some(
            (req) => req.floor === floor && req.direction === direction
          );
      })
    ) {
      return;
    }
    this.switchButtons(floor, direction, true);
    const liftToAssign = this.findClosestLift(floor);
    if (liftToAssign == -1) {
      if (
        !this.pendingRequests.some(
          (req) => req.floor === floor && req.direction === direction
        )
      ) {
        this.pendingRequests.push({ floor, direction });
      }
    } else {
      this.liftState[liftToAssign].requestQueue.push({ floor, direction });
      this.moveLift(liftToAssign);
    }
  }

  async moveLift(liftIndex) {
    const liftState = this.liftState[liftIndex];
    const liftElement = document.querySelector(`.lift[data-id="${liftIndex}"]`);
    while (liftState.requestQueue.length > 0) {
      const targetFloor = liftState.requestQueue[0].floor;
      const currentFloor = liftState.currentFloor;
      const floorsToMove = Math.abs(targetFloor - currentFloor);
      await new Promise((resolve) => {
        liftElement.style.transition = `bottom ${
          floorsToMove * SPEED_PER_FLOOR
        }s linear`;
        console.log("Moving Lift", liftIndex + 1, "to Floor", targetFloor);
        liftElement.style.bottom = `${targetFloor * (100 / this.totalFloors)}%`;

        setTimeout(() => {
          liftState.currentFloor = targetFloor;
          resolve();
        }, floorsToMove * SPEED_PER_FLOOR * 1000);
      });
      liftElement.style.transition = "";
      await this.operateDoors(liftElement, "open");
      await new Promise((resolve) => setTimeout(resolve, DOOR_OPEN_TIME));
      await this.operateDoors(liftElement, "close");

      this.switchButtons(
        targetFloor,
        liftState.requestQueue[0].direction,
        false
      );
      liftState.requestQueue.shift();
    }
    this.checkPendingRequests();
  }

  switchButtons(floor, direction, isRequested) {
		const el = document.querySelectorAll(`.lift-button[data-floor="${floor}"]`);
		if (el.length === 2) {
			if (isRequested) {
				if (direction === 'up') {
					el[0].classList.add('requested');
				} else {
					el[1].classList.add('requested');
				}
			} else {
				if (direction === 'up') {
					el[0].classList.remove('requested');
				} else {
					el[1].classList.remove('requested');
				}
			}
		} else {
			if (isRequested) {
				el[0].classList.add('requested');
			} else {
				el[0].classList.remove('requested');
			}
		}
	}

  async operateDoors(liftElement, todo) {
    const leftDoor = liftElement.querySelector('.left');
    const rightDoor = liftElement.querySelector('.right');
  
    if (todo === 'open') {
      leftDoor.classList.add('open');
      rightDoor.classList.add('open');
    } else {
      leftDoor.classList.remove('open');
      rightDoor.classList.remove('open');
  
      await new Promise((resolve) => setTimeout(resolve, DOOR_OPEN_TIME));
    }
  }

  checkPendingRequests() {
		if (this.pendingRequests.length > 0) {
			const requestedRequest = this.pendingRequests.shift();
			const availableLift = this.findClosestLift(requestedRequest.floor);
			if (availableLift !== -1) {
				this.liftState[availableLift].requestQueue.push(requestedRequest);
				this.moveLift(availableLift);
			} else {
				this.pendingRequests.unshift(requestedRequest);
			}
		}
	}

  findClosestLift(floor) {
		let closestLift = -1;
		let minDistance = MAX_DISTANCE;

		for (let i = 0; i < this.totalLifts; i++) {
			const distance = Math.abs(this.liftState[i].currentFloor - floor);
			if (
				distance < minDistance &&
				this.liftState[i].requestQueue.length === 0
			) {
				minDistance = distance;
				closestLift = i;
			}
		}
		return closestLift; //returns index of lift closest of floor
	}
}



// Starting the UI
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit");
  const liftInput = document.getElementById("lifts");
  const floorInput = document.getElementById("floors");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault(); //stoping the reload
    const lifts = parseInt(liftInput.value);
    const floors = parseInt(floorInput.value);
    if (isNaN(lifts) || isNaN(floors)) {
    const p = document.createElement("p");
    p.classList.add("error")
    p.classList.add("warning-message");
    p.innerText = 'Please enter the number of lifts and floors to proceed with the simulation';
    document.getElementById("screen-one").append(p);
    return;
		}

    const liftSystem = new LiftSystem(floors, lifts);
    console.log("Lift System Created", liftSystem);

    document.getElementById("screen-one").remove();
    document.getElementById("screen-two").style.display = "flex";
    // document.getElementById('header-container').classList.add('moved');

    generateFloors(liftSystem, floors);
    generateLifts(lifts, floors);
  });

  function generateFloors(liftSystem, floors) {
    const floorContainer = document.getElementById("floor-container");
    for (let i = 0; i < floors; i++) {
      const floorElement = document.createElement("div");
      floorElement.classList.add("floor");
      floorElement.style.height = `${100 / floors}%`;

      const floorLabel = document.createElement("div");
      floorLabel.classList.add("floor-label");
      floorLabel.innerText = "Floor " + (floors - i);

      floorElement.append(floorLabel);
      floorContainer.append(floorElement);

      generateButtons(liftSystem, floorElement, i, floors);
    }
  }

  function generateLifts(lifts, floors) {
    const liftContainer = document.getElementById("lift-container");
    for (let i = 0; i < lifts; i++) {
      const liftElement = document.createElement("div");
      liftElement.classList.add("lift");
      liftElement.dataset.id = i;
      liftElement.style.height = `${100 / (floors + 1)}%`;
      liftElement.style.width = `${100 / (lifts + 5)}%`;
      liftElement.style.left = `${((i + 0.2) * 100) / lifts}%`;
      liftContainer.append(liftElement);
      generateDoors(liftElement);
    }
  }

  function generateButtons(liftSystem, floorElement, i, floors) {
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("button-container");

    const upButton = document.createElement("button");
    upButton.classList.add("up", "lift-button");
    upButton.innerText = "▲";
    upButton.dataset.floor = floors - i - 1; //sets a value in button which can be used as floor
    const actualFloor = floors - i - 1;
    upButton.dataset.floor = actualFloor;
    upButton.addEventListener("click", () => {
      liftSystem.requestLift(actualFloor, 'up');
    });

    const downButton = document.createElement("button");
    downButton.classList.add("down", "lift-button");
    downButton.innerText = "▼";
    downButton.dataset.floor = actualFloor;
    downButton.dataset.floor = floors - i - 1;
    downButton.addEventListener("click", () => {
      liftSystem.requestLift(actualFloor, 'down');
    });
    floorElement.append(btnContainer);
    if (i === 0) btnContainer.append(downButton);
    else if (i === floors - 1) btnContainer.append(upButton);
    else btnContainer.append(upButton, downButton);
  }

  function generateDoors(liftElement) {
    const leftDoor = document.createElement("div");
    leftDoor.classList.add("door", "left");

    const rightDoor = document.createElement("div");
    rightDoor.classList.add("door", "right");

    liftElement.append(leftDoor, rightDoor);
  }
});
