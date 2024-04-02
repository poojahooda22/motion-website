

function Team() {
  return (
    <div className='team section font-[SansitaReg] py-20'>
      <h1 className=" text-6xl text-center tracking-tight">
        Our Team
      </h1>
      <div className="list mt-10 w-full px-10">
        {/* //single list */}
        <div className="listelem w-full py-5 bg-red-600 flex ">
            <div className="flex">
                <h3>01</h3>
                <h1>Dr. Ric McCartney</h1>
            </div>
            <h3>CEO</h3>

        </div>
      </div>
    </div>
  )
}

export default Team
