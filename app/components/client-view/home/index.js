"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGithub
} from "react-icons/fa";
import Image from "next/image";
import heroImage from "../../../../assets/image/mypics/me3.jpg";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const socialIcons = [
  {
    id: "facebook",
    url: "https://www.facebook.com/profile.php?id=100028283058401",
    icon: (
      <FaFacebookF
        color="rgba(183, 13, 13, 1)"
        className="w-[40px] h-[40px]"
      />
    ),
  },
  {
    id: "twitter",
    url: "https://x.com/Anujver04515928",
    icon: (
      <FaTwitter
        color="rgba(183, 13, 13, 1)"
        className="w-[40px] h-[40px]"
      />
    ),
  },
  {
    id: "linkedin",
    url: "https://linkedin.com/in/anuj-verma-67493125a",
    icon: (
      <FaLinkedinIn
        color="rgba(183, 13, 13, 1)"
        className="w-[40px] h-[40px]"
      />
    ),
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/anuj.verma_official",
    icon: (
      <FaInstagram
        color="rgba(183, 13, 13, 1)"
        className="w-[40px] h-[40px]"
      />
    ),
  },
  {
    id: "github",
    url: "https://github.com/Anuj3553",
    icon: (
      <FaGithub
        color="rgba(183, 13, 13, 1)"
        className="w-[40px] h-[40px]"
      />
    ),
  },
];


export default function ClientHomeView({ data }) {
  console.log(data, "ClientHomeView");

  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className={
            "grid md:flex-row sm:flex sm:flex-col sm:justify-center sm:items-center gap-[5rem] md:grid-flow-row sm:grid-flow-col md:grid-rows-1 md:gap-8 md:py-10"
          }
          variants={setVariants}
        >
          <div className="md:flex md:flex-col md:justify-start sm:flex sm:justify-center sm:items-center md:items-start lg:row-start-2 sm:row-start-1">
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
              {data && data.length
                ? data[0]?.heading
                  .split(" ")
                  .map((item, index) => (
                    <span
                      className={`${index === 2 || index === 3
                        ? "text-red-main"
                        : "text-[#000]"
                        }`}
                    >
                      {item}{" "}
                    </span>
                  ))
                : null}
            </h1>
            <p className="text-[#000] mt-4 mb-8 font-bold">
              {data && data.length ? data[0]?.summary : null}
            </p>
            <motion.div className="flex gap-3 cursor-pointer">
              {socialIcons.map((item, index) => (
                <motion.a
                  key={`${index}-${item.id}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                  className="flex items-center justify-center"
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>

          </div>
          <motion.div ref={containerRef} className="flex w-full justify-end sm:justify-center sm:items-center">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="w-[400px] h-[400px] relative"
            >
              <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#000000] absolute"></div>
              <Image
                src={heroImage}
                alt="Profile Picture"
                layout="responsive"
                quality={100}
                height={300}
                width={300}
                className="absolute top-[-15px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}