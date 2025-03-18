import { FaCalendarDay } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function PhoneBook() {
    const details = [
        {icon: <FaCalendarDay />, value: (new Date()).toLocaleDateString(), label: "Date"},
        {icon: <FaLocationDot />, value: "Bapatla 522101", label: "Location"},
        {icon: <FaPhone/>, value: "+91 7013644926", label: "phone"},
        {icon: <MdEmail/>, value: "srivenkateswaraenterprises0625@gmail.com", label:"email"}
    ];

    return (
        <section className="py-6 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between text-white  space-y-4 md:space-y-0 md:space-x-6">
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