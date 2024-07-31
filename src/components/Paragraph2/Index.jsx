import img1 from "../../assets/images/review2.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Para2() {
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
      className="para2 section w-full flex items-center mt-32 px-8
    justify-center -translate-y-1/5 "
    >
      <div className="text sm:w-[80%] flex flex-col items-center sm:items-end justify-center ">
        <div className="hidden w-[40%] sm:flex items-center justify-center mb-12">
          <hr className="bg-zinc-400 w-[20%] h-[.3vh]" />
        </div>
        <h3
          ref={paraRef}
          className="textpara2 sm:w-[40%] text-purple-600 font-[Sansita] text-[2.4vh] sm:text-[3.5vh] font-medium text-center tracking-wide leading-[5vh] mb-10"
        >
          {" "}
          Working with Significo and their recommendation service has been a
          game-changer for our occupational prevention efforts. Our customers
          are extremely satisfied with the tool&apos;s impressive technical
          capabilities and data-driven approach. But what truly sets it apart is
          the intuitive and modern user experience it offers, making it a breeze
          for our clients to navigate. By leveraging this service, our customers
          have successfully tackled presenteeism and absenteeism, making a
          significant impact on their workforce&apos;s well-being.
        </h3>
        <div className="pers w-[40%] flex flex-col items-center justify-center gap-2">
          <div className="image w-24 h-24 overflow-hidden rounded-full ">
            <img src={img1} />
          </div>
          <h1 className="text-[2.8vh] sm:text-[3.8vh] font-medium">
            Emek Altun
          </h1>
          <h3 className="text-zinc-500 text-[2.4vh] whitespace-nowrap">
            CEO @ Vitaservices
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Para2;
