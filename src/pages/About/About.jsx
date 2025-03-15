import AboutImagCSS from "../../Components/AboutImagCSS";
import GroundNutsImage from "../../assets/groundnuts.png";
import RiceImage from "../../assets/rice.png";
import DalImage from "../../assets/dal.png";
import AllMixImage from "../../assets/allmix.png";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function About() {
  const details = [
    {
      icon: <FaLocationDot />,
      value:
        "Arihant Colony Opp : Krishi Upaj Mandi Samiti Mandsaur 458001 M.P",
      label: "Location",
    },
    { icon: <FaPhone />, value: "+91 83492 44742", label: "phone" },
    {
      icon: <MdEmail />,
      value: "shreeganeshent2025@gmail.com",
      label: "email",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-6 min-h-screen space-y-12 md:space-x-12">
      {/* section1 */}
      <div className="flex flex-col max-w-xl">
        <div>
          <h1 className="font-bold text-4xl tracking-wide py-8 text-black">
            About Us
          </h1>
          <p className="py-4 text-black text-md">Chandu Enterprises</p>
        </div>
        <div className="flex flex-col space-y-4 text-center">
          <p className="text-left break-words py-8">
            Ground nuts Ground nuts Ground nuts  Ground nuts Ground nuts Ground nuts rice rice
            rice rice rice rice rice rice rice rice Dal Dal Dal Dal Dal Dal Dal Dal Dal Dal
          </p>
        </div>
        <div className="flex space-x-4 text-lg text-black">
          
        </div>
      </div>
      {/* section2 */}
      <div className="flex flex-col space-y-6 p-4">
        <div className="grid grid-cols-2 gap-6 m-4">
          <AboutImagCSS ImageUrl={GroundNutsImage} ImageName={"Ground Nuts"} />
          <AboutImagCSS ImageUrl={RiceImage} ImageName={"Rice"} />
        </div>
        <div className="grid grid-cols-2 gap-6 m-4">
          <AboutImagCSS ImageUrl={DalImage} ImageName={"Dal"} />
          <AboutImagCSS ImageUrl={AllMixImage} ImageName={"Others"} />
        </div>
      </div>
    </div>
  );
}
