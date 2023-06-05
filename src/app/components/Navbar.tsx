
"use client";
import React, { ReactElement } from "react";
import { menuList } from "../utils/menu-list";
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
import { FaAffiliatetheme } from "react-icons/fa";
import Image from "next/image";
const Navigation =(props:any)=>{

    

     const [Expanded,setExpanded]=useState<'' | 'hidden'>('hidden');
     const [isOpened,setIsOpened]=useState(false);
     const [Dropdown,setDropdown]=useState(false);

     const ViewDropdown=(isDropdown:any)=>{
        if(isDropdown)
        {
            setDropdown(true);
        }
     }
     const HideDropdown=(isDropdown:any)=>{
        if(isDropdown)
        {
            setDropdown(false);
        }
     }

    const hamburgerToggle=()=>{
        (Expanded=='hidden')?setExpanded(''):setExpanded('hidden');
        !isOpened?setIsOpened(true):setIsOpened(false);
        !isOpened?props.isExpanded(true):props.isExpanded(false);
    }

    return(
        <header className="bg-White md:flex md:items-center justify-between ">
            <div className="p-1 flex justify-between items-center">
                <Image
                    src={'/Logo.svg'}
                    alt="TbDotz Logo"
                    width={100}
                    height={80}
                />
                {!isOpened&&<FaBars onClick={hamburgerToggle} className="md:hidden text-2xl"></FaBars>}
                {isOpened&&<AiOutlineClose onClick={hamburgerToggle} className="md:hidden text-2xl"></AiOutlineClose>}

            </div>
       

            <nav className={`nav md:bg-White md:w-3/4 md:font-normal md:flex md:static md:top-0 md:text-md  top-19 right-0   bg-Gray  absolute w-full left-0 font-bold font-sans  text-lg p-1 ${Expanded}  transition-all ease-in duration-500`}>
                {menuList.map((item,index)=>{
                return(
                    <li key={index} className="md:mx-4 list-none p-1 my-6 ">
                        <Link onClick={()=>ViewDropdown(item.isDropdown)} onMouseOver={()=>ViewDropdown(item.isDropdown)} className=" hover:text-Red duration-500" href={item.link}>
                            {item.name}
                        </Link>
    
                        {item.isDropdown&&Dropdown&&<div onMouseLeave={()=>HideDropdown(item.isDropdown)} className="left-0 top-20 flex md:flex-row w-full flex-col md:absolute bg-Gray z-10 p-6">
                            {
                            item.dropdownData?.map((child,i)=>{
                                    return(
                                    <Link className="p-2  hover:text-Red duration-500" href={child.url}>
                                        {child.heading}
                                    </Link>
                                    )
                                })
                            }
                            </div>
                        }
                       
                    </li>
                    
                )})}
            </nav>

            <FaAffiliatetheme onClick={props.theme} className="center text-2xl"></FaAffiliatetheme>

        </header>
    )

 

}

export default Navigation;


