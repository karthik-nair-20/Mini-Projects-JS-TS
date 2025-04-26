import { KEY_FEATURES_CONTENT } from "../constants"

export function Features() {
  return (
    <section id="features">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="border-t border-neutral-700 mb-12 text-center">
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-900 text-transparent bg-clip-text py-3">{KEY_FEATURES_CONTENT.sectionTitle}</h2>
          <p className="inline-block max-w-xl mt-3 text-neutral-400">{KEY_FEATURES_CONTENT.sectionDescription}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          {
            KEY_FEATURES_CONTENT.features.map((feature) => (
              <div key={feature.id} className="flex flex-col justify-center p-6 w-full md:w-1/2 lg:w-1/3 text-center">
                <div className="flex justify-center items-center mb-4">{feature.icon}</div>
                <h3 className="text-xl">{feature.title}</h3>
                <p className="text-neutral-400 mt-2">{feature.description}</p>
              </div>
            ))
          }
          </div>
      </div>
    </section>
  )
}