import img1 from '../../assets/images/review2.jpg'
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function Para2() {
    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".textpara2")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
            if(e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;   
        gsap.set(".textpara2 span", {opacity: .1})
        gsap.to(".textpara2 span", {
            scrollTrigger: {
                trigger: ".para2",
                start: "top 60%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1, 
            stagger: .03,   
        })
    },[]);
  return (
    <div className="para2 section w-full flex items-center justify-center -translate-y-1/5 ">
        <div className="text w-[80%] flex flex-col items-end justify-center ">
            <div className='w-[40%] flex items-center justify-center mb-12'>
                <hr className='bg-zinc-400 w-[20%] h-[1.5px]' />
            </div>    
            <h3 className='textpara2 w-[40%] text-blue-600 font-[Sansita] text-2xl font-medium text-center leading-[2.4rem] mb-10'> Working with Significo and their recommendation service has been a game-changer for our occupational prevention efforts. Our customers are extremely satisfied with the tool&apos;s impressive technical capabilities and data-driven approach. But what truly sets it apart is the intuitive and modern user experience it offers, making it a breeze for our clients to navigate. By leveraging this service, our customers have successfully tackled presenteeism and absenteeism, making a significant impact on their workforce&apos;s well-being. We highly recommend Significo to any organization looking to optimize their occupational health and drive positive change.</h3>
            <div className="pers w-[40%] flex flex-col items-center justify-center gap-4">
                <div className="image w-24 h-24 overflow-hidden rounded-full ">
                    <img src={img1} />
                </div>
                <h1 className='text-2xl font-medium'>Emek Altun</h1>
                <h3 className='text-zinc-500 text-xl'>CEO @ Vitaservices</h3>
            </div>
        </div>  
    </div>
  )
}

export default Para2
