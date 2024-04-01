

function Card() {

    const items = [
        { 
            title: "Driven by Purpose", 
            description: "We believe technology can dramatically improve the experience of managing health, and when crafted with empathy, intention, and expertise, impact lives at scale.",
            image: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M45.9998 10H31.9998L19.7271 26L31.9998 56L59.9998 26L45.9998 10Z" fill="currentColor"></path>
            <path d="M18 10H46L60 26L32 56L4 26L18 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M44.2726 26L31.9998 56L19.7271 26L31.9998 10L44.2726 26Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M4 26H60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>`
        },
        { 
            title: "Custom Products", 
            description: "We see a need and we develop a solution. Our proprietary technology is available to integrate with your systems, to license, or to customize to meet your needs.",
            image: ``
        },
        { 
            title: "Partnerships", 
            description: "We partner with like-minded benefits providers, insurance, and health companies to create custom solutions and technology.",
            image: ``
        },
        { 
            title: "Security & Compliance", 
            description: "Not just technology experts. Health experts. We are able to navigate both stringent regulatory environments and the complexities of technology and data.",
            image: ``
        },
    ]

  return (
    <div className="card w-[80%] flex items-center justify-between bg-[--black] rounded-3xl py-10 px-16 text-[--dcyan] gap-4">
        {items.map((item, index) => {
            return (
                <>
                    <div className="w-3/4 text-[--dcyan]  font-[Sansita]  leftdata">
                        <h1 key={index} className="text-[1.5vw] font-semibold mb-4">{item.title}</h1>
                        <p className=" text-[.9rem] font-medium">{item.description}</p>
                    </div>
                    <div className="rightdata w-[64px] h-[64px]"
                        dangerouslySetInnerHTML={{ __html: item.image }}
                    />
                </>
            )
        })} 
    </div>
  )
}

export default Card
