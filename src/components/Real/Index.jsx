
import img1 from '../../assets/images/real4.jpg'
import img2 from '../../assets/images/real2.jpg'
import img3 from '../../assets/images/real3.jpg'
import img4 from '../../assets/images/real1.jpg'
import img5 from '../../assets/images/real5.jpg'

function Real() {
  return (
    <div className="real section w-full">
      <div className="cont h-[400vh]  relative">
        <div className="slides w-full h-[100vh] sticky top-0 left-0 flex ">
            {/* 1st slide */}
            <div className="slide w-full flex items-center justify-center h-screen flex-shrink-0 ">
                <div className="text font-[SansitaReg] text-[15vh] leading-[18vh]">
                    <h1 className="">
                        Real Talk,    
                    </h1>
                    <h1 className="">
                        Real Impact
                    </h1>
                </div>
                <div 
                    className="image absolute w-[20rem] h-[20rem] top-1/2 -translate-y-1/2 translate-x-1/2
                    right-0 "
                >
                    <img 
                        src={img1}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            {/* 2nd slide */}
            <div className="slide w-full h-screen flex items-center justify-center flex-shrink-0 relative ">
                <div 
                    className="image absolute w-[15rem] h-[15rem] top-10 -translate-y-1/2 right-1/6
                    "
                >
                    <img 
                        src={img2}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>
                    <h3 className='font-[Sansita] w-1/3 text-left font-semibold tracking-tight text-xl absolute top-0 left-0 z-[3] -translate-y-1/2 -translate-x-1/3'>We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our progress.</h3>
                    <h1 className=' font-semibold text-[10rem] leading-none '>20.4M</h1>
                    <h3 className='text-[2.4rem] font-semibold leading-[3.4rem]'>Real people — real lives — we have built products and solutions for.</h3>    
                </div>
                <div 
                        className="image absolute w-[10rem] h-[10rem] 
                        top-2/3 left-1/4 -translate-x-1/2
                        "
                    >
                    <img 
                        src={img4}
                        className="w-full h-full object-contain rounded-full"
                    />
                    </div>
                <div 
                    className="image absolute w-[20rem] h-[20rem] bottom-0 right-1/6 
                    translate-y-[20vh]"
                >
                    <img 
                        src={img3}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[20rem] h-[20rem] top-1/2 -translate-y-1/2 translate-x-1/2
                    right-0 "
                >
                    <img 
                        src={img5}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            
            {/* 3rd slide */}
            <div className="slide w-full h-screen flex items-center justify-center flex-shrink-0  relative">
                <div className='w-[60%] text-center font-[SansitaReg] relative'>
                    <h3 
                    className='font-[Sansita] w-1/3 text-left font-semibold tracking-tight 
                        text-xl absolute top-0 left-0 z-[3] -translate-y-1/2 -translate-x-1/3'
                    >
                        Our team is global and diverse, because our individual experiences make us stronger.
                    </h3>
                    <h1 className=' font-semibold text-[10rem] leading-none '>49%</h1>
                    <h3 className='text-[2.4rem] font-semibold leading-[3.4rem]'>
                        Expert Women in Tech.
                    </h3>    
                </div>
            </div>

            {/* 4th slide */}
            <div className="slide w-full h-screen flex-shrink-0 bg-blue-500"></div>
        </div>
      </div>
    </div>
  )
}

export default Real
