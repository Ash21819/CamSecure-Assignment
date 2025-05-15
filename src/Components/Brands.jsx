import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const brands = [
  "SONY",
  "Axis",
  "Panasonic",
  "Honeywell",
  "Dahua",
  "Bosch",
  "Hikvision",
  "Godrej",
  "Zicom",
  "CP Plus",
  "Samsung",
];

const InfiniteScroll = ({ items, direction = "left" }) => {
  const scrollRef = useRef(null);

  useAnimationFrame(() => {
    if (scrollRef.current) {
      const speed = direction === "left" ? 1 : -1;
      scrollRef.current.scrollLeft += speed;

      // Reset when scrolled halfway through
      const maxScroll = scrollRef.current.scrollWidth / 2;
      if (direction === "left" && scrollRef.current.scrollLeft >= maxScroll) {
        scrollRef.current.scrollLeft = 0;
      } else if (direction === "right" && scrollRef.current.scrollLeft <= 0) {
        scrollRef.current.scrollLeft = maxScroll;
      }
    }
  });

  return (
    <div
      ref={scrollRef}
      className="overflow-hidden whitespace-nowrap w-full py-6 bg-gray-100"
    >
      {[...items, ...items].map((item, index) => (
        <motion.div
          key={index}
          className="font-mono inline-block px-6 py-3 m-2 text-3xl font-bold text-gray-800 rounded-lg shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

const Brands = () => {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-3xl font-bold mb-8">Brands We Work With</h2>
      <InfiniteScroll items={brands} direction="left" />
      <InfiniteScroll items={brands} direction="right" />
    </section>
  );
};

export default Brands;
