"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
import Image from 'next/image';

// Import Icons
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {

  return (
    <section
    id="home"
    className="px-20"
    >
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-red-100 to-indigo-200">
                        I&apos;m{" "}
                    </span>
                    
                    <TypeAnimation
                        sequence={[
                            "Ricardo I. Hernandez",
                            1000,
                            "a Software Engineer",
                            1000,
                            "a Web Developer",
                            1000,
                            "a Mobile Developer",
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-base sm:text-lg mb-6 lg:text-xl">
                    Hello, I am a software engineer with a passion for web and mobile
                    development. I specialize in building responsive, user-friendly
                    websites and applications.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-2 px-4 text-lg font-medium">
                    <Link
                        href="/#contact"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    >
                        Contact Me
                    </Link>
                    <a
                        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    >
                        Download CV
                    </a>
                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://linkedin.com"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>

                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://github.com"
                        target="_blank"
                    >
                        <FaGithubSquare />
                    </a>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative">
                    <Image
                    src="/images/pfp.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>
            </motion.div>
      </div> 
    </section>
  )
}
