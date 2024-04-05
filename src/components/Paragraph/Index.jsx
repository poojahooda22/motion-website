import img1 from '../../assets/images/review1.jpeg';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Para() {
    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".textpara")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
            if(e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;   
        gsap.set(".textpara span", {opacity: .1})
        gsap.to(".textpara span", {
            scrollTrigger: {
                trigger: ".para",
                start: "top 70%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1, 
            stagger: .03,
            
        })
    },[]);

    

  return (
    <div data-color="white" className="para section w-full flex items-center justify-center  ">
        <div className="text w-[80%] flex flex-col items-start justify-center ">
            <div className='w-[50%] flex items-center justify-center mb-12'>
                <hr className='bg-zinc-400 w-[20%] h-[.3vh]' />
            </div>    
            <h3 className='textpara w-[50%] text-blue-600 font-[Sansita] text-[3.5vh] font-medium text-center leading-[5vh] mb-10'>Working with the Significo team has been such a pleasure! We took on a significant project to rebuild our entire platform and the team approached the project with our best interests in mind. They continue to prioritize the end user experience and offer amazing expertise in all of the areas we lack internally. I would personally be lost without this team, their ability to problem solve, their openness to feedback and desire to build the product like it is their own.</h3>
            <div className="pers w-[50%] flex flex-col items-center justify-center gap-4">
                <div className="image w-24 h-24 overflow-hidden rounded-full ">
                    <img src={img1} />
                </div>
                <h1 className='text-[3.8vh] font-medium'>Miranda Ernst</h1>
                <h3 className='text-zinc-500 text-[2.4vh]'>Product Manager @ HealthCheck360</h3>
            </div>
        </div>  
    </div>
  )
}

export default Para
