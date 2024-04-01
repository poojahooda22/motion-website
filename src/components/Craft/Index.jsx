import { LuArrowUpRight } from "react-icons/lu";
import Card from "../Card";

function Cart() {
  return (
    <div className="craft section w-full flex gap-10 justify-between items-start px-10 py-10 relative">
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
            <div className="w-fit px-6 py-4 border-[1px] border-[--black]  rounded-3xl">
                <div className="masker flex items-center gap-2 overflow-hidden ">
                    <span className="text-medium tracking-tight font-medium"> OUR SOLUTIONS</span>
                    <LuArrowUpRight style={{fontSize: "24px", }} /> 
                </div>         
            </div>
        </div>


        <div className="cards w-1/2 ">
            {/* <div className="card w-[80%] flex items-center justify-between bg-[--black] rounded-3xl py-10 px-16 text-[--dcyan] gap-4">
                <div className="w-3/4 text-[--dcyan]  font-[Sansita]  leftdata">
                    <h1 className="text-[1.5vw] font-semibold mb-4">Driven by Purpose</h1>
                    <p className=" text-[.9rem] font-medium">We believe technology can dramatically
                        improve the experience of managing health,
                        and when crafted with empathy, intention,
                        and expertise, impact lives at scale.
                    </p>
                </div>
                <div className="rightdata w-[64px] h-[64px]">
                    <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z" fill="currentColor"></path>
                    <path d="M18 10H46L60 26L32 56L4 26L18 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M4 26H60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
            </div> */}

            <Card />
        </div>
    </div>
  )
}

export default Cart
