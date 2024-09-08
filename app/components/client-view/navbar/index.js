"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "Projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item, index) => (
    <LinkScroll
      key={index}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
    ${activeLink === item.id
          ? "text-red-main animation-active shadow-red-main"
          : "text-[#000] font-bold hover:text-red-main"
        }
    `}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${scrollActive ? "shadow-md pt-0" : "pt-4"
          }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div onClick={() =>
              scroller.scrollTo("home", {
                duration: 1500,
                delay: 100,
                smooth: true,
              })
            }
              className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-red-main">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-red-main bg-red-main">
                <span className="text-[#fff] text-[25px] font-bold">P</span>
              </div>
              ortfolio
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000] items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button
              onClick={() => router.push("/admin")}
              className="py-3 px-6 border-[2px] bg-[#fff] border-red-main text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-red-md transition-all outline-none"
            >
              Login
            </button>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
