import DesktopImage from "../../src/assets/desktop.webp";
import MobileImage from "../../src/assets/mobile.webp";
import Designer from "../../src/assets/Designer.jpeg";

export default function Content() {
  return (
    <>
      <img src={DesktopImage} className="hidden bg-cover w-full h-200 md:block overflow-hidden"/>
      <img src={MobileImage} className="bg-cover h-160 w-full md:hidden"/>
    <section id="feature">
      {/* <!-- Feature Container --> */}
      <div
        class="relative container flex flex-col max-w-6xl my-8 mx-auto px-6 text-gray-900 md:flex-row md:px-0"
      > 
        {/* <!-- Image --> */}
        <img src={Designer} alt="" />

        {/* <!-- Text Container --> */}
        <div
          class="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20"
        >
          <h2
            class="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left"
          >
            The leader in Trading
          </h2>

          <p class="max-w-md text-center md:text-left">
          We take pride in promoting locally grown crops while supporting farmers and
        strengthening the agricultural economy. Whether you're looking for
        bulk supply or customized solutions, we are dedicated to delivering
        excellence with every grain and pulse. Contact us today to learn
        more about our offerings and how we can cater to your needs.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}