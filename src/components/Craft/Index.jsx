import { LuArrowUpRight } from "react-icons/lu";

function Cart() {
  return (
    <div className="craft section w-full flex gap-10 justify-between px-10 py-10">
        <div className="ltext w-[40%]  ">
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
            <div className="w-fit px-6 py-4 border-[1px] border-[--black]">
                <div className="masker flex items-center gap-2 overflow-hidden">
                    <span className="text-medium tracking-tight font-medium"> OUR SOLUTIONS</span>
                    <LuArrowUpRight style={{fontSize: "24px", }} /> 
                </div>         
            </div>
        </div>
        <div className="cards w-1/2 h-32 bg-red-700 ">

        </div>
    </div>
  )
}

export default Cart
