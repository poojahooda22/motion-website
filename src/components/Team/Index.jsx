import List from "../List"


function Team() {
  return (
    <div className='team section font-[SansitaReg] py-20'>
      <h1 className=" text-6xl text-center tracking-tight">
        Our Team
      </h1>
      <div className="list mt-10 w-full px-10">
        {/* //single list */}
        <List />
      </div>
    </div>
  )
}

export default Team
