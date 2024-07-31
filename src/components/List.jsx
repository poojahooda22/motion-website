
import img1 from '../assets/images/team1.png';
import img2 from '../assets/images/team2.png';
import img3 from '../assets/images/team3.png';
import img4 from '../assets/images/team4.png';
import img5 from '../assets/images/team5.png';
import img6 from '../assets/images/team6.png';
import img7 from '../assets/images/team7.png';
import img8 from '../assets/images/team8.png';
import img9 from '../assets/images/team9.png';

import {useEffect, useRef, useCallback} from 'react';
import { gsap } from "gsap";
import { Power4} from 'gsap/gsap-core';

const data = [
  {key: 1, title: "Dr. Rick McCartney", role: "CEO", img: img1},
  {key: 2, title: "Chris Koha", role: "COO", img: img2},
  {key: 3, title: "Caroline Nieto", role: "Chief Product Officer", img: img3},
  {key: 4, title: "Victor Albertos", role: "CTO", img: img4},
  {key: 5, title: "Dr. Jana Hapfelmeier", role: "Chief Innovation Officer", img: img5},
  {key: 6, title: "Michael Robin", role: "VP of Marketing", img: img6},
  {key: 7, title: "Adrian Rubio", role: "VP of Engineering", img: img7},
  {key: 8, title: "Cy Serrano", role: "VP of Product", img: img8},
  {key: 9, title: "Lenya McGrath", role: "VP of Partnerships", img: img9},
]

function List() {
  const listRef = useRef([]);
  const rotateRef = useRef(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  const animateElement = useCallback((el, x, y) => {
    if (!el) return;

    const picture = el.querySelector(".picture");
    const blueLayer = el.querySelector(".bluelayer");
    const rect = el.getBoundingClientRect();

    if (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    ) {
      const diffrot = x - rotateRef.current;
      rotateRef.current = x;

      gsap.to(picture, {
        opacity: 1,
        ease: Power4,
        top: y - rect.top,
        left: x - rect.left,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
        duration: 0.3
      });

      gsap.to(blueLayer, {
        height: '100%',
        ease: Power4,
        duration: 0.1
      });
    } else {
      gsap.to(picture, { opacity: 0, ease: Power4, duration: 0.5 });
      gsap.to(blueLayer, { height: '0%', ease: Power4, duration: 0.1 });
    }
  }, []);

  const handleMouseMove = useCallback((event) => {
    mousePositionRef.current = { x: event.clientX, y: event.clientY };
    listRef.current.forEach(el => animateElement(el, event.clientX, event.clientY));
  }, [animateElement]);

  const handleScroll = useCallback(() => {
    const { x, y } = mousePositionRef.current;
    listRef.current.forEach(el => animateElement(el, x, y));
  }, [animateElement]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  return (
    <div className="list-container">
      {data.map((item, index) => (
        <div
          key={item.key}
          ref={(el) => (listRef.current[index] = el)}
          className="listelem w-full py-[3vh] sm:px-[4vh] sm:py-[6vh]
          flex justify-between items-center
          border-b-2 border-black sm:relative"
        >
          <div className="relative w-full sm:flex sm:items-center justify-between z-[3]">
            <div className="left sm:flex items-center gap-14 sm:text-5xl">
              <h3 className="hidden sm:inline-block opacity-25">0{item.key}</h3>
              <h1 className="text-blue-600 text-3xl sm:text-black sm:text-[6vh]">{item.title}</h1>
            </div>
            <h3 className="font-[Sansita] text-[3vh] sm:text-[2.4vh] font-medium tracking-tight">
              {item.role}
            </h3>
          </div>
          <div className='picture w-[14vh] h-[14vh] opacity-0 right-0
            sm:absolute z-[4] sm:top-1/2
            sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[15rem] sm:h-[15rem]
            overflow-hidden rounded-full'>
            <img src={item.img} className='w-[100%] h-[100%] object-contain' alt={item.title} />
          </div>
          <div className="hidden sm:inline-block bluelayer sm:absolute top-0 left-0 z-[2] w-full h-0 bg-[#f5f19c]"></div>
        </div>
      ))}
    </div>
  );
}

export default List;