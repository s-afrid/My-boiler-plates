import React, { useRef } from "react";

export default function HorizontalSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-4/5 max-w-5xl overflow-hidden mx-auto">
      {/* Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-linear-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-linear-to-l from-white to-transparent pointer-events-none z-10"></div>

      {/* Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 text-black text-2xl p-3 rounded-full hover:bg-gray-200 shadow-md transition z-20"
      >
        &#8249;
      </button>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth hide-scrollbar px-20"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="min-w-[250px] h-[150px] m-2 flex justify-center items-center text-2xl font-bold text-white bg-[#444] rounded-xl flex-shrink-0"
          >
            {i + 1}
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 text-black text-2xl p-3 rounded-full hover:bg-gray-200 shadow-md transition z-20"
      >
        &#8250;
      </button>
    </div>
  );
}
