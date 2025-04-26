import { HOW_IT_WORKS_CONTENT } from "../constants";
export function Works() {
  return (
    <section id="works">
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-t border-neutral-700 mb-15 text-center">
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter">
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </h2>
          <p className="inline-block max-w-xl mt-3 text-neutral-400">
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS_CONTENT.steps.map((step) => (
            <div className="flex flex-col justify-between p-6 rounded-xl bg-neutral-900 shadow-xl">
              <div>
                <h3 className="text-xl mb-4 font-semibold">
                  {step.title}
                </h3>
                <p className="text-neutral-400 mb-4">
                  {step.description}
                </p>
              </div>
              <div>
                <img
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  className="rounded-lg"
                />
              </div>
              {/* {step.users && (
								<div className="flex justify-between items-center mt-4">
									<div className="flex -space-x-2">
										{step.users.map((item1, index) => (
											<img
												key={index}
												src={item1}
												alt={`Person ${index + 1}`}
												className="h-8 w-8 rounded-full border-2 border-black"
											/>
										))}
									</div>
									<button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white rounded-lg">
										Connect
									</button>
								</div>
							)} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
