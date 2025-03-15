import { FaCalendarDay } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function PhoneBook() {
    const details = [
        {icon: <FaCalendarDay />, value: (new Date()).toLocaleDateString(), label: "Date"},
        {icon: <FaLocationDot />, value: "Arihant Colony 458001 M.P", label: "Location"},
        {icon: <FaPhone/>, value: "+91 83492 44742", label: "phone"},
        {icon: <MdEmail/>, value: "shreeganeshent2025@gmail.com", label:"email"}
    ];

    return (
        <section className="py-6 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between text-white  space-y-4 md:space-y-0 md:space-x-4">
                    {details.map((detail)=>{
                        return(
                            <div key={detail.label} className="group flex flex-row items-center space-x-2">
                                {detail.icon}
                                <span>{detail.value}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}