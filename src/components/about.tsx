"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 1);
  return (
    <motion.section
        ref={ ref }
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial = {{ opacity: 0, y: 100 }}
        animate = {{ opacity: 1, y: 0 }}
        transition = {{ delay: 0.175 }}
    >
        <SectionHeading> About me </SectionHeading>
        <p className="mb-3">
            After graduating with a degree in{" "}
            <span className="font-medium">Computer Science</span>, I decided to pursue my
            passion for Software Engineering. I started my journey in{" "}
            <span className="font-medium">full-stack web and mobile development</span> during 
            my senior year in highschool. Thanks to that experience I will now soon be 
            able to release my first application to the Android and iOS app store. {" "} 
            <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. My core stack
            is{" "}
            <span className="font-medium">
            React, Next.js, Node.js, Flutter, and Firebase
            </span>
            . I am always looking to learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a software
            developer.
        </p>

        <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            soccer, cycling, and working on my truck. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am currently
            learning about{" "}
            <span className="font-medium">auto repair and restoration</span>. I'm also
            learning how to play the guitar.
        </p>
    </motion.section>
  )
}
