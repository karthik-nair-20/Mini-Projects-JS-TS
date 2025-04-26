import { PLANS_CONTENT } from "../constants";

export function Price() {
  return (
    <section id="price">
      <div className="max-w-7xl mx-auto px-4 mt-17">
        <div className="border-t border-neutral-700 mb-12 text-center">
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-900 text-transparent bg-clip-text py-3">
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="inline-block max-w-xl text-neutral-400">
            {PLANS_CONTENT.sectionDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS_CONTENT.plans.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg bg-neutral-950 flex flex-col justify-between ${
								item.popular
									? "border border-blue-900/80"
									: "border border-neutral-800"
							}`}
            >
              <h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase">
                {item.name}
              </h3>
              <p className="text-neutral-400 mb-6">{item.description}</p>
              <div className="text-2xl lg:text-3xl font-medium mb-6">
                {item.price}
              </div>
              <ul className="mb-6 space-y-2 text-neutral-400">
                {item.features.map((fea, index) => (
                  <li key={index} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-neutral-600 rounded-full mr-2"></span>
                    {fea}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white">
                {PLANS_CONTENT.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
