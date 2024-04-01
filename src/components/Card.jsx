

function Card() {
  return (
    <div className="card w-[80%] flex items-center justify-between bg-[--black] rounded-3xl py-10 px-16 text-[--dcyan] gap-4">
        <div className="w-3/4 text-[--dcyan]  font-[Sansita]  leftdata">
            <h1 className="text-[1.5vw] font-semibold mb-4">Driven by Purpose</h1>
            <p className=" text-[.9rem] font-medium">We believe technology can dramatically
                improve the experience of managing health,
                and when crafted with empathy, intention,
                and expertise, impact lives at scale.
            </p>
        </div>
        <div className="rightdata w-[64px] h-[64px]">
            <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z" fill="currentColor"></path>
            <path d="M18 10H46L60 26L32 56L4 26L18 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M4 26H60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
    </div>
  )
}

export default Card
