import { NavLink } from "react-router-dom";

export default function Footer() {
  const pageComponents = [
    {label: "Home", route: "/"},
    { label: "About", route: "/about" },
    { label: "Products", route: "/products" },
    { label: "Gallery", route: "/gallery" },
    { label: "Contact", route: "/contact" },
  ];
  return (
    <footer className="bg-black mt-auto">
      <div className="container max-w-6xl py-4 mx-auto">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <img
                src="images/logo.svg"
                alt="Chandu Enterprises"
                className="w-44 md:ml-3 text-white"
              />
            </div>
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {pageComponents.map((component) => (
                <div key={component.label} className="h-10 group">
                  <NavLink className={({isActive})=> isActive? "text-slate-400": ""} to={component.route}>{component.label}</NavLink>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
