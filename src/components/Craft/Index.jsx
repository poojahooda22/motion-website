
import Card from "../Card";
import Button from "../Button";
import { useRef} from 'react';
import { gsap } from "gsap";
import { Power2} from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useScroll, useTransform} from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

function Craft() {
    const container = useRef(null);

    const { scrollYProgress} = useScroll ({
        target: container,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
  return (
    <div ref={container} 
        style={{
            scale: scaleProgress,
        }}
        className="craft section w-full flex gap-10 justify-between items-start px-10 py-40 relative">
        <div className="ltext w-[40%] sticky top-[10%] left-0  ">
            <p className="font-[Sansita] text-[1.2rem] font-medium leading-[2rem]">
                Significo is a leading health software creator founded on the belief
                that technology can transform healthcare to put people first.
                Whether they are employees, members, customers, or clients, we
                never forget the real people we’re designing for.
            </p>
            <h1 className="font-[SansitaReg] text-[4.4rem] mt-10 mb-10 leading-[5.5rem]">We Craft <br/>
                Human-Centric
                Health Software
            </h1>
            {/* button */}
            <Button  bgColor="bg-none" text="OUR SOLUTIONS" />
        </div>
        <div className="cards w-1/2 ">                
            <Card />
        </div>
    </div>
  )
}

export default Craft
