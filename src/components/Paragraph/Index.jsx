import img1 from "../../assets/images/review1.jpeg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Para() {
  const paraRef = useRef(null);

  useEffect(() => {
    if (!paraRef.current) return;

    const para = paraRef.current;
    const words = para.textContent.split(" ");

    para.innerHTML = words
      .map(
        (word) =>
          `<span style="opacity: 0.1; display: inline-block;">${word}</span>`
      )
      .join(" ");

    gsap.to(para.children, {
      scrollTrigger: {
        trigger: para,
        start: "top 100%",
        end: "bottom 20%",
        scrub: 1,
      },
      opacity: 1,
      duration: .5,
      stagger: {
        each: .1,
        from: "start",
      },
      ease: "power1.out",
    });
  }, []);

  return (
    <div
      data-color="white"
      className="para section w-full flex items-center justify-center px-8  "
    >
      <div className="text sm:w-[80%] flex flex-col items-center sm:items-start justify-between ">
        <div className="hidden w-[50%] sm:flex items-center justify-center mb-12">
          <hr className="bg-zinc-400 w-[20%] h-[.3vh]" />
        </div>
        <h3
          ref={paraRef}
          className="textpara sm:w-[50%] text-blue-600 font-[Sansita] tracking-wide text-[2.4vh] sm:text-[3.5vh] font-medium text-center leading-[5vh] mb-10"
        >
          Working with the Significo team has been such a pleasure! We took on a
          significant project to rebuild our entire platform and the team
          approached the project with our best interests in mind. They continue
          to prioritize the end user experience and offer amazing expertise in
          all of the areas we lack internally. I would personally be lost
          without this team, their ability to problem solve, their openness to
          feedback and desire to build the product like it is their own.
        </h3>
        <div className="pers w-[50%] flex flex-col items-center justify-center gap-2 ">
          <div className="image w-24 h-24 overflow-hidden rounded-full ">
            <img src={img1} />
          </div>
          <h1 className=" text-[2.8vh] sm:text-[3.8vh] font-medium">
            Miranda Ernst
          </h1>
          <h3 className="text-zinc-500 text-[2.4vh] whitespace-nowrap">
            Product Manager @ HealthCheck360
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Para;
