import video from '../../assets/video/1ENIoa5sjq.mp4'
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';



function Home() {
    const items = [
        { text: "useful", image: img1 },
        { text: "intuitive", image: img2 },     
        { text: "empathetic", image: img3 },     
        { text: "useful", image: img4 },     
        { text: "empathetic", image: img5 },             
    ]
    
  return (
    <div className="w-full h-screen relative ">
        {/* video div */}
      <div className="hidden vdodiv w-full h-screen absolute top-0 left-0 bg-black overflow-hidden">  
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

        <div className="marqueecontainer w-full h-screen relative">
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]'>
                {/* 1st row */}
                <div className='row w-full py-3 flex items-center gap-8 whitespace-nowrap'>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='elem flex items-center gap-8'>
                                <h1  className='font-[SansitaBold] text-6xl'>{item.text}</h1>
                                <div className='imgdiv w-[3rem] h-[3rem]'>
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
                <div className='row w-full py-3 flex items-center gap-8 whitespace-nowrap'>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='elem flex items-center gap-8'>
                                <h1  className='font-[SansitaBold] text-6xl'>{item.text}</h1>
                                <div className='imgdiv w-[3rem] h-[3rem]'>
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
                <div className='row w-full py-3 flex items-center gap-8 whitespace-nowrap'>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='elem flex items-center gap-8'>
                                <h1  className='font-[SansitaBold] text-6xl'>{item.text}</h1>
                                <div className='imgdiv w-[3rem] h-[3rem]'>
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
                <div className='row w-full py-3 flex items-center gap-8 whitespace-nowrap
                '>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='elem flex items-center gap-8'>
                                <h1  className='font-[SansitaBold] text-6xl'>{item.text}</h1>
                                <div className='imgdiv w-[3rem] h-[3rem]'>
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
