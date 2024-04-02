

function Team() {
  return (
    <div className='team section font-[SansitaReg] py-20'>
      <h1 className=" text-6xl text-center tracking-tight">
        Our Team
      </h1>
      <div className="list mt-10 w-full px-10">
        {/* //single list */}
        <div className="listelem w-full py-5 px-5  flex items-center justify-between border-b-2 border-black ">
            <div className="flex items-center gap-10 text-5xl">
                <h3 className="opacity-25">01</h3>
                <h1 className="">Dr. Rick McCartney</h1>
            </div>
            <h3 className="text-xl font-semibold">CEO</h3>

        </div>
      </div>
    </div>
  )
}

export default Team
