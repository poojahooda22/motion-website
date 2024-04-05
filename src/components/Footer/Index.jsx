import Button from "../Button";
import styles from './Style.module.css';

function Footer() {
  return (
    <div className="section w-full mt-30 ">
      <div className="topfoot w-full bg-[#f5f19c] pt-32 pb-32 flex items-center justify-between">
        <div className="left w-1/2 px-10  ">
          <div className=" font-[SansitaReg] text-[4rem] w-1/3 leading-[5rem] mb-10 ">
            <h1>Discover Significo.</h1>
          </div>
          <Button text="Let's Go" bgColor="bg-[#f5f19c]" />
        </div>

        <div className="right flex w-1/2 items-center justify-between px-10">
          <div className="rght1 w-2/3 flex flex-col items-end ">
            <h3 className="text-[1.4rem]">
              Find out how Significo’s people-centered<br/>
              designs can make health technology more<br/>
              empowering.
            </h3>
          </div>
          <div className="rght2 relative w-[150px] h-[150px]  overflow: hidden;">
            <div className={`${styles.loopFoot} `}></div>
            <div className="icon w-[120px] h-[120px] rounded-full border-black border-[1px] px-10 py-10 absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 overflow-hidden">
              <div className="w-10 h-10 absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2">
                <svg width="100%" height="100%" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031" stroke="black" strokeWidth="2"></path>
                  <path d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031" stroke="black" strokeWidth="2"></path>
                  <path d="M16 0.703125L16 37.2746" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="downfoot w-full h-[50vh] bg-[--black]">

      </div>
    </div>
  )
}

export default Footer
