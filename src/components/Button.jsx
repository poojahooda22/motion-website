import { LuArrowUpRight } from "react-icons/lu";

function Button({bgColor, text}) {
  return (
    <div className={`${bgColor} w-fit px-6 py-4 border-[1px] border-[--black]`}>
        <div className="masker flex items-center gap-2 overflow-hidden ">
            <span className="font-[Sansita] text-medium capitalize tracking-tight font-semibold">{text}</span>
            <LuArrowUpRight style={{fontSize: "24px", }} /> 
        </div>         
    </div>
  )
}

export default Button
