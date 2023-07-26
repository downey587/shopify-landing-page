import React from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";

function NavBar() {
    return (
        <div className="w-full h-18 px-4 border-b-2 sm:px-8 min-[1210px]:px-20 flex justify-between items-center bg-white sticky top-0">
            <div className="flex items-center">
                <img src={ logo } alt="logo." className="w-24 h-7 min-[1210px]:mr-12 min-[1210px]:h-9 min-[1210px]:w-auto"></img>

                <ul className="space-x-10 text-base hidden min-[1210px]:flex">
                    <a href="#"> Solutions </a> 
                    <a href="#"> Pricing </a> 
                    <a href="#"> Resources </a> 
                </ul>
            </div>

            <div className="w-auto h-auto flex justify-between items-center space-x-8">
                <a href="#" className="text-base text-slate-950 underline min-[1210px]:text-white min-[1210px]:bg-black min-[1210px]:no-underline min-[1210px]:px-5 min-[1210px]:rounded-full min-[1210px]:py-3 min-[1210px]:hover:bg-slate-800"> Start free trial </a>
                <img src={ menu } alt="menu img." className="w-5 h-5 min-[1210px]:hidden"></img>
            </div>
        </div>
    );
}

export default NavBar;