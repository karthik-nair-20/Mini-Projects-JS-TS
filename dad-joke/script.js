const jokeDiv = document.querySelector('.joke');
const jokeBtn = document.getElementById('newJoke');

getDadJoke(); //initial joke on page load
jokeBtn.addEventListener('click', getDadJoke);
// ASYNC-AWAIT
async function getDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    });
    const data = await res.json();
    jokeDiv.innerHTML = data.joke;
}