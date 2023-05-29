"use client";
import Image from 'next/image'
import Navigation from './components/Navbar'
import { useState,useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Visions from './components/Visions';
import Testimonials from './components/Testimonials';
import Timeline from './components/Timeline';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Offerings from './components/Offerings/Offerings';
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
    <Offerings></Offerings>
    <Timeline/>
    <Visions></Visions>
    <Services></Services>
    <ContactForm></ContactForm>
    </main>
  )
}
