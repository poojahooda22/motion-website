import img1 from '../../assets/images/review2.jpg'

function Para2() {
  return (
    <div className="para section w-full flex items-center justify-center -translate-y-1/5 ">
        <div className="text w-[80%] flex flex-col items-end justify-center ">
            <div className='w-[40%] flex items-center justify-center mb-12'>
                <hr className='bg-zinc-400 w-[20%] h-[1.5px]' />
            </div>    
            <h3 className='w-[40%] font-[Sansita] text-2xl font-medium text-center leading-[2.4rem] mb-10'>
                Working with Significo and their
                recommendation service has been a
                game-changer for our occupational
                prevention efforts. Our customers are
                extremely satisfied with the tool&apos;s impressive
                technical capabilities and data-driven
                approach. But what truly sets it apart is the
                intuitive and modern user experience it offers,
                making it a breeze for our clients to navigate.
                By leveraging this service, our customers have
                successfully tackled presenteeism and
                absenteeism, making a significant impact on
                their workforce&apos;s well-being. We highly
                recommend Significo to any organization
                looking to optimize their occupational health
                and drive positive change.
            </h3>
            <div className="pers w-[40%] flex flex-col items-center justify-center gap-4">
                <div className="image w-24 h-24 overflow-hidden rounded-full ">
                    <img src={img1} />
                </div>
                <h1 className='text-2xl font-medium'>Emek Altun</h1>
                <h3 className='text-zinc-500 text-xl'>CEO @ Vitaservices</h3>
            </div>
        </div>  
    </div>
  )
}

export default Para2
