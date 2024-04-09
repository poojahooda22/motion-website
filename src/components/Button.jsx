import { LuArrowUpRight } from "react-icons/lu";
import styles from './Button.module.css';


import PropTypes from 'prop-types';

function Button({bgColor, text}) {
  return (
    <div 
      className={`${bgColor} section w-fit sm:w-fit px-4 
      py-[1.6vh] border-[1px] border-[--black]`}
    >
      <div 
        className= {`${styles.masker} flex items-center gap-2 overflow-hidden 
        relative cursor-pointer`}
      >
        <span 
          className={`${styles.spanMask} font-[Sansita] text-[1.8vh] 
          capitalize tracking-normal
          font-semibold`}
        >
          {text}
        </span>
        <LuArrowUpRight 
          style={{
            fontSize: "24px", 
            color: "black", 
          }} 
          className={`${styles.iconMask}`} 
        /> 
        </div>         
    </div>
  )
}

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Button
