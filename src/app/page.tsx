'use client'
import Navbar from "./Component/navbar";
import Introduction from "./Component/interduce";
import MyExperience from  "./Component/myexperience";
import Footer from "./Component/Footer";
import Work from "./Component/work";
import Skill from "./Component/skill";
import Project from "./Component/project";

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
      <MyExperience></MyExperience>
      <Work></Work>
      <Skill></Skill>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}
