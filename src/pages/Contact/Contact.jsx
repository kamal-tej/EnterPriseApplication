import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
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
    <div className="flex flex-col md:flex-row justify-center items-center w-full min-h-screen bg-cyan-100">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 bg-black w-full max-w-4xl p-16 rounded-xl shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide text-white">Contact Us</h1>
            <p className="pt-2 text-white text-sm">Chandu Enterprises</p>
          </div>
          <div className="flex flex-col space-y-4">
            {details.map((detail) => {
              return (
                <div
                  key={detail.label}
                  className="inline-flex space-x-2 items-center text-white"
                >
                  {detail.icon}
                  <span className="text-white">{detail.value}</span>
                </div>
              );
            })}
          </div>
          <div className="flex space-x-4 text-lg text-white">
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <form className="flex flex-col space-y-4">
            <div>
                <label htmlFor="" className="text-sm">
                    Your name
                </label>
                <input type="text" placeholder="Your name" className="ring-1 ring-gray-200 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
            </div>
            <div>
                <label htmlFor="" className="text-sm">
                   Email
                </label>
                <input type="email" placeholder="Your Email" className="ring-1 ring-gray-200 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
            </div>
            <div>
                <label htmlFor="" className="text-sm">
                    Message
                </label>
                <textarea rows="4" type="text" placeholder="Your Message" className="ring-1 ring-gray-200 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"/>
            </div>
            <button className="inline-block self-end bg-cyan-300 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
            </button>
        </form>
      </div>
      </div>
    </div>
  );
}
