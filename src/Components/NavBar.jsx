import CustomNavLink from "./CustomNavLink";
import "../index.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logos from "../assets/finallogolord.png"

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close mobile menu when resizing to md screen or larger
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // 768px is typically where 'md' starts in Tailwind CSS
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="py-2">
            <div className="container mx-auto px-4">
                <nav className="flex flex-row items-center justify-between font-bold">
                    <img className="h-20 w-64 bg-white" src={logos} alt="logo" />
                    {/* Menu */}
                    <div className="hidden h-10 font-alata md:flex md:space-x-8">
                        <div className="group">
                            <CustomNavLink to="/"> Home </CustomNavLink>
                            <CustomNavLink to="/about"> About </CustomNavLink>
                            <CustomNavLink to="/products"> Products </CustomNavLink>
                            <CustomNavLink to="/gallery"> Gallery </CustomNavLink>
                            <CustomNavLink to="/contact"> Contact </CustomNavLink>
                        </div>
                    </div>
                    {/* Hamburger Button */}
                    <div className="md:hidden">
                        <button
                            id="menu-btn"
                            type="button"
                            className={`z-20 block hamburger md:hidden focus:outline-none menu-btn ${isMenuOpen ? 'open' : ''}`}
                            onClick={navToggle}
                        >
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div
                    id="menu"
                    className={`menu ${isMenuOpen ? 'flex' : 'hidden'} top-0 bottom-4 left-0 flex-col self-center w-full pt-24 pb-6 pl-12 absolute space-y-3 text-lg text-black uppercase font-bold bg-white`}
                >
                    <NavLink className="" onClick={navToggle} to="/"> Home </NavLink>
                    <NavLink onClick={navToggle} to="/about"> About </NavLink>
                    <NavLink onClick={navToggle} to="/products"> Products </NavLink>
                    <NavLink onClick={navToggle} to="/gallery"> Gallery </NavLink>
                    <NavLink onClick={navToggle} to="/contact"> Contact </NavLink>
                </div>
            </div>
        </section>
    );
}
// min-h-screen
