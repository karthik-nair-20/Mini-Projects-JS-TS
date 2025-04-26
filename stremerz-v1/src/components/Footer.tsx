import { FOOTER_CONTENT } from "../constants";

export function Footer() {
  return (
    <footer id="footer">
      <div className="mt-20 text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 border-t border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {FOOTER_CONTENT.sections.map((item, index) => (
              <div key={index}>
                <h2 className=" text-white font-medium mb-4">{item.title}</h2>
                <ul className="space-y-2">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <a className="hover:text-white " href={link.url}>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="my-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
            <div className="flex justify-between">
              <p className="text-sm hover:text-white ">
                {FOOTER_CONTENT.platformsText}
              </p>
              <p className="text-sm hover:text-white ">
                {FOOTER_CONTENT.copyrightText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
