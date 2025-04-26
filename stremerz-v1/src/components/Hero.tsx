import { HERO_CONTENT, BRAND_LOGOS } from "../constants";
import heroImage from "../assets/hero.jpg";

export function Hero() {
  return (
    <section id="hero">
      <div className="pt-28 lg:pt-36">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center text-center">
          <div className="mb-8 border-neutral-800 px-3 py-2  rounded-full text-sm border">
            {HERO_CONTENT.badgeText}
          </div>
          <h1 className="text-5xl lg:text-8xl my-4 py-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
            {HERO_CONTENT.mainHeading.split("\n").map((ele, index) => (
              <span key={index}>
                {ele} <br />
              </span>
            ))}
          </h1>
          <p className="max-w-xl mt-6 text-neutral-400">
            {HERO_CONTENT.subHeading}
          </p>
          <div className="mt-6 space-x-2">
            <button className="text-white font-medium bg-blue-500 cursor-pointer transition py-3 px-6 rounded-xl hover:bg-blue-400 mb-4">
              {HERO_CONTENT.callToAction.primary}
            </button>
            <button className="text-white border border-neutral-700 font-medium  cursor-pointer transition py-3 px-6 rounded-xl mb-4">
              {HERO_CONTENT.callToAction.secondary}
            </button>
          </div>
          <div className="py-10">
            <p className="mb-8 text-gray-400">{HERO_CONTENT.trustedByText}</p>
            <div className="flex flex-wrap justify-center gap-8">
              {BRAND_LOGOS.map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  className="h-8"
                />
              ))}
            </div>
          </div>
          <div className="mt-12 mb-20">
            <img
              src={heroImage}
              alt="hero image"
              className="w-full h-auto rounded-2xl border border-neutral-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
