'use client'
import Navbar from "./Component/navbar";
import Introduction from "./Component/interduce";
import Experience from "./Component/experience";
import MyExperience from  "./Component/myexperience";
import Footer from "./Component/Footer";

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Experience></Experience>
      <MyExperience></MyExperience>
      <Footer></Footer>
    </div>
  );
}
