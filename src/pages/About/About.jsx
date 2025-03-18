import AboutImagCSS from "../../Components/AboutImagCSS";
import GroundNutsImage from "../../assets/groundnuts.png";
import RiceImage from "../../assets/ricepotrait.png";
import BlackGramImage from "../../assets/blackgram.png";
import ChickpeasImage from "../../assets/chikpeas.png";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function About() {
  const details = [
    {
      icon: <FaLocationDot />,
      value: "Bapatla 522101",
      label: "Location",
    },
    { icon: <FaPhone />, value: "+91 7013644926", label: "phone" },
    {
      icon: <MdEmail />,
      value: "srivenkateswaraenterprises0625@gmail.com",
      label: "email",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-6 min-h-screen space-y-12 md:space-x-12">
  {/* Styled section1 */}
  <div className="flex flex-col max-w-xl bg-gray-100 p-8 shadow-lg rounded-lg">
    <div>
      <h1 className="font-bold text-4xl tracking-wide py-8 text-black">
        About Us
      </h1>
      <p className="py-4 text-black text-lg font-bold">Sri Venkateswara Enterprises</p>
    </div>
    <div className="flex flex-col space-y-4 text-center">
      <p className="text-left break-words py-8 font-semibold italic">
      " Welcome to Sri Venkateshwara Enterprises, your trusted partner in
        high-quality agricultural products. Founded and led by Ms. Nandhini,
        our enterprise specializes in sourcing and supplying premium
        groundnut, rice, black gram, and chickpeas—staple crops that are
        widely cultivated in our region.<br/><br/>With a deep-rooted commitment to
        quality and sustainability, we work closely with local farmers to
        ensure that every product we offer meets the highest standards. Our
        expertise in these essential crops allows us to serve wholesalers,
        retailers, and businesses with the freshest and most nutritious
        agricultural produce.<br/><br/> At Sri Venkateshwara Enterprises, we take
        pride in promoting locally grown crops while supporting farmers and
        strengthening the agricultural economy. Whether you're looking for
        bulk supply or customized solutions, we are dedicated to delivering
        excellence with every grain and pulse. Contact us today to learn
        more about our offerings and how we can cater to your needs. "
      </p>
    </div>
    <div className="flex space-x-4 text-lg text-black"></div>
  </div>

  {/* section2 */}
  <div className="flex flex-col space-y-6 p-4">
    <div className="grid grid-cols-2 gap-6 m-4">
      <AboutImagCSS ImageUrl={GroundNutsImage} ImageName={"Ground Nuts"} />
      <AboutImagCSS ImageUrl={RiceImage} ImageName={"Rice"} />
    </div>
    <div className="grid grid-cols-2 gap-6 m-4">
      <AboutImagCSS ImageUrl={BlackGramImage} ImageName={"Black Gram"} />
      <AboutImagCSS ImageUrl={ChickpeasImage} ImageName={"ChickPeas"} />
    </div>
  </div>
</div>
  );
}
