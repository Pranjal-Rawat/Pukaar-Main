import React from "react";
import "./styles.css"; // Assuming you added the above CSS here
import data from "./data";
export function FeaturedImageGallery() {
  const [active, setActive] = React.useState(data[0].imgelink);

  const scrollContainerRef = React.useRef(null);

  const handleMouseDown = (e) => {
    scrollContainerRef.current.isDown = true;
    scrollContainerRef.current.startX = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    scrollContainerRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    scrollContainerRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!scrollContainerRef.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - scrollContainerRef.current.startX) * 2; //scroll-fast
    scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollLeft - walk;
  };

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div
        className="scroll-container grid grid-cols-5 gap-4"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {data.map(({ imgelink }, index) => (
          <div key={index} className="scroll-item">
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
