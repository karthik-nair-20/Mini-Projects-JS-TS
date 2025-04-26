import { TESTIMONIALS_CONTENT } from "../constants";

export function Testimonial() {
  return (
    <section id="testimonial">
      <div className="max-w-7xl mx-auto px-4 mt-17">
        <div className="border-t border-neutral-700 mb-12 text-center">
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-900 text-transparent bg-clip-text py-3">
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>
          <p className="inline-block max-w-xl text-neutral-400">
            {TESTIMONIALS_CONTENT.sectionDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_CONTENT.reviews.map((item, index) => (
            <div key={index} className="mt-10 flex flex-col justify-center items-center overflow-auto rounded-2xl bg-neutral-900/50 border border-neutral-900 p-10">
              <p className="mb-4 text-neutral-200">{item.review}</p>
              <div className="w-full flex items-start mt-4">
                {/* <img
                  src={item.image}
                  alt="Image"
                  className="h-12 w-12 rounded-full mr-4"
                /> */}
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
