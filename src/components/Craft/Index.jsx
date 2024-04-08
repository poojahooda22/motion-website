
import Card from "../Card";
import Button from "../Button";
import {useRef} from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4, } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Craft() {
    const container = useRef(null);

    // useEffect(() => {
    //     var clutter = "";
    //     const para = document.querySelector(".texthead")
    //     const characters = para.textContent.split("")
    //     characters.forEach(function(e) {
    //         if(e === " ") clutter += `<span>&nbsp;</span>`
    //         clutter += `<span>${e}</span>`
    //     })
    //     para.innerHTML = clutter;

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //         trigger: ".ltext",
    //         start: "top 100%",
    //         end: "bottom 50%",
    //         scrub: .5,
    //         }
    //     });

    //     tl.fromTo(
    //         ".texthead", 
    //         {                
    //             y: 50, 
    //             opacity: 0,           
    //         },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             ease: Power4,
    //             delay: 0.5,
    //             transformOrigin: "40% 50% -50",
    //             stagger: {
    //                 each: 0.1,
    //                 delay: 0.5
    //             }
    //         }
    //     );
    // },[]);

    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".cards",
            start: "top 10%",
            end: "bottom 10%",
            scrub: 1,
            stagger: 0.5
            }
        });
        tl.fromTo(
            ".card", 
            {                
                y: 800,

                scale: .9,       
            },
            {
                opacity: 1,
                scale: 1.1,
                gap: 10,
                y: 0,
   
                ease: Power4,
                transformOrigin: "bottom",
            }
        );                
    }, container );

   
  return (
    <div 
        data-color="cyan"  
        ref={container} 
        className="craft section w-full flex flex-col sm:flex-row gap-10  
        justify-between items-center px-6 py-8 sm:px-10 relative "
    >
        <div className="ltext sticky top-[10%] left-0   ">
            <p 
                className="ptag font-[Sansita] text-[2.9vh] 
                font-medium leading-[4.2vh] "
            >
                Significo is a custom health software developer founded on the belief<br/>
                that technology can transform healthcare to put people first. We put<br/>
                humanity back at the center of healthcare by simplifying complexity,<br/>
                accelerating capacity, and improving outcomes.
            </p>
                <h1 className="texthead font-[SansitaReg] text-[10vh] leading-[12vh] 
                mt-10 mb-10">We Craft<br/> Human-Centric <br/> Health Software</h1>
            {/* button */}
            <Button  bgColor="bg-none" text="OUR SOLUTIONS" />
        </div>
        <div
            className="right cards w-full flex sm:w-1/2 items-center">                
            <Card />
        </div>
    </div>
  )
}

export default Craft
