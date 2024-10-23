import React from "react";
import Hero from "./components/Hero/Hero.js";
import About from "./components/About/About.js";
import Events from "./components/EventSection/Events.js";
import Pricing from "./components/Pricing/Pricing.js";
import SpeakerSlide from "./components/Speakers/SpeakerSlide.js";
// import Team from "./Our Team Page/components/Team.js";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  let tl = gsap.timeline();
  useGSAP(() => {
    gsap.from("#hero", {
      z: "-140%",
      duration: 6,
      ease: "sine.in",
      opacity: "0",
    });
    gsap.from(".navlinks .li-effect", {
      opacity: 0,
      y: -20,
      duration: 1.2,
      stagger: 0.5,
      delay: 1,
    });
    gsap.from(".hero-txt", {
      y: "140%",
      duration: 2,
      ease: "power1.inOut",
      opacity: "0",
      delay: 1,
    });
    tl.from("#Principle", {
      y: "-100px",
      ease: "sine.inOut",
      opacity: 0,
      scrollTrigger: {
        trigger: "#Principle",
        scroller: "body",
        start: "top 0%",
        end: "top 100%",
        scrub: 2,
        pin: true,
      },
    });
    tl.from("#About", {
      x: "-100%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#About",
        scroller: "body",
        start: "top 30%",
        end: "top 100%",
        scrub: 1,
        pin: true,
      },
    });
    tl.from(".event-txt", {
      y: 20,
      duration: 2,
      ease: "power1.inOut",
      opacity: "0",
      scrollTrigger: {
        trigger: "#Event",
        scroller: "body",
        start: "top 20%",
        end: "top 100%",
        scrub: 1.5,
        pin: true,
      },
    });
    tl.from(".event-card-box", {
      z: -100,
      scale: 0.4,
      duration: 4,
      ease: "slow(0.1,0.4,false)",
      delay: 1.5,
      opacity: "0",
      scrollTrigger: {
        trigger: "#Event",
        scroller: "body",
        start: "top 20%",
        end: "top 100%",
        scrub: 1.2,
        pin: true,
      },
    });
    tl.from(".pricing-txt ", {
      y: 20,
      ease: "power1.inOut",
      opacity: "0",
      scrollTrigger: {
        trigger: "#Pricing",
        scroller: "body",
        start: "top 30%",
        end: "top 100%",
        scrub: 2,
        pin: true,
      },
    });

    tl.from(".price-card-container", {
      y: 150,
      ease: "slow(0.1,0.4,false)",
      opacity: "0",
      scrollTrigger: {
        trigger: "#Pricing",
        scroller: "body",
        start: "top 10",
        end: "top 100%",
        scrub: 1.4,
        pin: true,
      },
    });
  });
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Events></Events>
      <SpeakerSlide></SpeakerSlide>
      <Pricing></Pricing>
    </>
  );
};

export default Home;
