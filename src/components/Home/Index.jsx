import video from '../../assets/video/1ENIoa5sjq.mp4'
import Row from '../Row'


function Home() {
   
    
  return (
    <div className="home section w-full h-screen relative ">

        <div className='btmtext absolute z-[4] bottom-[7%] left-[3%] w-48 '>
           <h1>
                We build big ideas.
                Software. Apps. Tools.
                For real people. Real lives.
            </h1>
        </div>
        {/* video div */}
        <div 
            className="hidden vdodiv w-full h-screen absolute z-[3] 
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
                <Row translateClass="-translate-x-1/2"/>
                <Row translateClass="-translate-x-2/3"/>
                <Row translateClass="-translate-x-1/4" />
                <Row translateClass="-translate-x-1/3"/>
            </div>
        </div>
    </div>
  )
}

export default Home
