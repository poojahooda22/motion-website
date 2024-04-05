import { LuArrowUpRight } from "react-icons/lu";
import styles from './Button.module.css';


function Button({bgColor, text}) {


  return (
    <div className={`${bgColor} section w-fit px-6 py-4 border-[1px] border-[--black]`}>
        <div className= {`${styles.masker} flex items-center gap-2 overflow-hidden relative cursor-pointer`}>
            <span className={`${styles.spanMask} font-[Sansita] text-medium capitalize tracking-tight 
            font-semibold `}>{text}</span>
            <LuArrowUpRight style={{fontSize: "24px", color: "black", }} className={`${styles.iconMask}`} /> 
        </div>         
    </div>
  )
}

export default Button
