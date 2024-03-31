import video from '../../assets/video/1ENIoa5sjq.mp4'
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';




function Home() {
    const items = [
        { text: "useful", image: img7 },
        { text: "intuitive", image: img2 },     
        { text: "empathetic", image: img3 },     
        { text: "useful", image: img4 },     
        { text: "empathetic", image: img5 },
        { text: "intuitive", image: img2 },     
        { text: "empathetic", image: img6 },
        { text: "useful", image: img1 },               
    ]
    
  return (
    <div className="w-full h-screen relative ">
        {/* video div */}
        <div 
            className="hidden vdodiv w-full h-screen absolute z-[9] 
            top-0 left-0 bg-black overflow-hidden"
        >  
            <video
                className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                autoPlay
                loop
                muted
                src={video}
            >     
            </video> 
        </div>

        {/* marquee div */}
        <div 
            className="marqueecontainer w-full h-screen 
            relative overflow-hidden"
        >
            {/* /* top Heading div */ }
            <div className=' heading absolute top-[7%] left-1/2 -translate-x-1/2 w-72'>
                <h2 className='text-xl font-[Sansita] font-medium text-center'>Crafting a new paradigm of healthcare, one that is</h2>
            </div>

            <div 
                className='absolute scale-[1.3] top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 w-[90%]'
            >
                {/* 1st row */}
                <div className='row -translate-x-1/2 w-full flex items-center gap-8 whitespace-nowrap'>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='elem flex items-center gap-8'>
                                <h1  className='font-[SansitaBold] text-6xl'>{item.text}</h1>
                                <div className='imgdiv w-[2rem] h-[2rem]'>
                                    <img 
                                        className=''
                                        src={item.image} 
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* 2nd row */}
                <div className='row -translate-x-1/3 w-full flex items-center gap-8 whitespace-nowrap'>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='elem flex items-center gap-8'>
                                <h1  className='font-[SansitaBold] text-6xl'>{item.text}</h1>
                                <div className='imgdiv w-[2rem] h-[2rem]'>
                                    <img 
                                        className=''
                                        src={item.image} 
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* 3nd row */}
                <div className='row -translate-x-2/3 w-full  flex items-center gap-8 whitespace-nowrap'>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='elem flex items-center gap-8'>
                                <h1  className='font-[SansitaBold] text-6xl'>{item.text}</h1>
                                <div className='imgdiv w-[2rem] h-[2rem]'>
                                    <img 
                                        className=''
                                        src={item.image} 
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* 4nd row */}
                <div className='row -translate-x-1/4 w-full  flex items-center gap-8 whitespace-nowrap
                '>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='elem flex items-center gap-8'>
                                <h1  className='font-[SansitaBold] text-6xl'>{item.text}</h1>
                                <div className='imgdiv w-[2rem] h-[2rem]'>
                                    <img 
                                        className=''
                                        src={item.image} 
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>             
            </div>
        </div>
    </div>
  )
}

export default Home
