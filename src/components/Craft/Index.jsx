import { LuArrowUpRight } from "react-icons/lu";

function Cart() {
  return (
    <div className="craft section w-full flex gap-10 justify-between px-10 py-20">
        <div className="ltext w-[40%] py-10 ">
            <p className="font-[Sansita] text-[1.4rem] font-light leading-[2rem]">
                Significo is a leading health software creator founded on the belief
                that technology can transform healthcare to put people first.
                Whether they are employees, members, customers, or clients, we
                never forget the real people we’re designing for.
            </p>
            <h1 className="font-[SansitaReg] text-[4.4rem] mt-10 leading-[6.5rem]">We Craft <br/>
                Human-Centric
                Health Software
            </h1>
            <div className="w-fit px-10 py-5 border-[1px] border-white">
                <div className="masker flex items-center">
                    <span className="text-xl">Solutions</span>
                    <LuArrowUpRight style={{fontSize: "24px"}} /> 
                </div>         
            </div>
        </div>
        <div className="cards w-1/2 h-32 bg-red-700 ">

        </div>
    </div>
  )
}

export default Cart
