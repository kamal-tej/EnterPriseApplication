import {NavLink} from 'react-router-dom';
export default function CustomNavLink({to, children}){
    return(
        <NavLink to={to} className={({isActive}) => `text-black px-4 py-2 rounded-lg  duration-300 ease-in-out hover:bg-gray-700 hover:animate-pulse hover:text-white ${isActive ? "text-slate-600 underline": ""}`}>
                {children}
        </NavLink>
    )
}