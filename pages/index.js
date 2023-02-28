import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import myimg from "../public/myimg.jpg";
import avatar from "../public/avatar.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Pasang Temba Sherpa Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="  min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between ">
            <h1 className=" text-xl font-burtons dark:text-white">
              Pasangtsherpa 
            </h1>
            <ul className=" flex items-center">
              {!darkMode ? (
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
              ) : (
                <li>
                  <BsFillSunFill
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                    className=" cursor-pointer text-2xl text-white"
                  />
                </li>
              )}
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10">
            <h2 className=" text-5xl text-teal-600 font-medium md:text-6xl ">
              Pasang Temba Sherpa
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-white">
              Computer Engineering Student and Developer.
            </h3>
            <p className=" text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              I ❤️ coffee and love to travel.
            </p>
            {/* <p>
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p> */}
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://twitter.com/palhimalaya">
              <AiFillTwitterCircle />
            </a>
            <a href="https://www.linkedin.com/in/pasang-temba-sherpa-079313216/">
              <AiFillLinkedin />
            </a>
            {/* <a href="https://www.youtube.com/c/CosineGaming0">
              <AiFillYoutube />
            </a> */}
            <a href="https://www.instagram.com/pasangtemba.sherpa5/">
              <AiFillInstagram />
            </a>
          </div>
          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={myimg} alt="me" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>

            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              quae quaerat nesciunt, neque, vitae laborum eos molestiae
              doloribus facilis reprehenderit nobis non culpa alias excepturi
              quo exercitationem, eum dolores id!
              <span className="text-teal-500"> agencies</span> Lorem ipsum dolor
              sit amet <span className=" text-teal-500">consectetur,</span>black
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, quasi ad. Sapiente consequatur officia dolore
              temporibus quia minima accusamus cum vero at quisquam facere,
              inventore magni tenetur quam dolor ea!
            </p>

            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              minima omnis deserunt sed ipsum incidunt in, fugit quibusdam
              praesentium deleniti quos fugiat, error quidem impedit? Amet a
              quaerat molestiae ratione!
            </p>
          </div>
          <div className=" lg:flex gap-10">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} alt="me" width={100} height={100} />
              <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-black">
                Beautiful Designs
              </h3>
              <p className=" py-2 dark:text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam.
              </p>
              <h4 className=" py-4 text-teal-600 dark:text-black">
                Design tools I use
              </h4>
              <p className=" text-gray-800 py-1 dark:text-black">Photoshop</p>
              <p className=" text-gray-800 py-1 dark:text-black">Illustrator</p>
              <p className=" text-gray-800 py-1 dark:text-black">Figma</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} alt="code" width={100} height={100} />
              <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-black">
                Beautiful Designs
              </h3>
              <p className=" py-2 dark:text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam.
              </p>
              <h4 className=" py-4 text-teal-600 dark:text-black">
                Design tools I use
              </h4>
              <p className=" text-gray-800 py-1 dark:text-black">Photoshop</p>
              <p className=" text-gray-800 py-1 dark:text-black">Illustrator</p>
              <p className=" text-gray-800 py-1 dark:text-black">Figma</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={consulting} alt="me" width={100} height={100} />
              <h3 className=" text-lg font-medium pt-8 pb-2 dark:text-black">
                Beautiful Designs
              </h3>
              <p className=" py-2 dark:text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam.
              </p>
              <h4 className=" py-4 text-teal-600 dark:text-white">
                Design tools I use
              </h4>
              <p className=" text-gray-800 py-1 dark:text-black">Photoshop</p>
              <p className=" text-gray-800 py-1 dark:text-black">Illustrator</p>
              <p className=" text-gray-800 py-1 dark:text-black">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white ">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white ">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <Image
                alt="me"
                src={web1}
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web2}
                alt="me"
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web3}
                alt="me"
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web4}
                alt="me"
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web5}
                alt="me"
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web6}
                alt="me"
                className=" rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
