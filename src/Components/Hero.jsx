import React from "react";
import heroimg from "../assets/img/heroimg.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className=" px-4 py-20 flex flex-col-reverse md:items-stretch md:flex-row  items-center md:justify-between gap-10 max-w-7xl mx-auto ">
        <section className="w-full md:w-1/2  flex flex-col justify-evenly  text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight ">
            Secure Your Property <br />
            with <br />
            <span className="text-blue-500">CamSecure Solutions</span>
          </h1>
          <p className="text-base  sm:text-lg md:text-2xl text-gray-700 ">
            Protect your home or business with our state-of-the-art CCTV camera
            systems. We offer 24/7 monitoring, professional installation, and
            reliable support to ensure your peace of mind. Sign up today and
            experience the CamSecure difference.
          </p>
        </section>
        <section className="w-full md:w-1/2 flex justify-center items-stretch">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover rounded-3xl shadow-xl"
              src={heroimg}
              alt=""
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
}
export default Hero;
