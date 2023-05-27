"use client";
import Image from 'next/image'
import Navigation from './components/Navbar'
import { useState,useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Visions from './components/Visions';
import Timeline from './components/Timeline';
export default function Home() {

  const [theme,setTheme]=useState('light');

  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      setTheme("dark");
    }
    else{
      setTheme("light");
    }
  },[])

  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark")
    }
    else
    {
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const themeSwitch=()=>{
    setTheme(theme==="dark"?"light":"dark");
  }

  return (
    <main className='dark:bg-black dark:text-white '>
    <Navigation theme={themeSwitch}></Navigation>
    <HeroSection></HeroSection>
    <Timeline/>
    <Visions></Visions>
    </main>
  )
}
