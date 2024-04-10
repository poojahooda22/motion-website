

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
            image: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M49.0005 54C52.8665 54 56.0005 50.866 56.0005 47C56.0005 43.134 52.8665 40 49.0005 40C45.1345 40 42.0005 43.134 42.0005 47C42.0005 50.866 45.1345 54 49.0005 54Z" fill="currentColor"></path>
            <path opacity="0.2" d="M15 24C18.866 24 22 20.866 22 17C22 13.134 18.866 10 15 10C11.134 10 8 13.134 8 17C8 20.866 11.134 24 15 24Z" fill="currentColor"></path>
            <path d="M49.0005 54C52.8665 54 56.0005 50.866 56.0005 47C56.0005 43.134 52.8665 40 49.0005 40C45.1345 40 42.0005 43.134 42.0005 47C42.0005 50.866 45.1345 54 49.0005 54Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M49.0006 40L49.0002 29.9703C49.0001 26.7878 47.7358 23.7358 45.4855 21.4855L36 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M36 22V12H46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M15 24C18.866 24 22 20.866 22 17C22 13.134 18.866 10 15 10C11.134 10 8 13.134 8 17C8 20.866 11.134 24 15 24Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M15 24L15.0004 34.0297C15.0005 37.2122 16.2648 40.2642 18.5151 42.5145L28.0006 52" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M28.0003 42V52H18.0003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`
        },
        { 
            title: "Partnerships", 
            description: "We partner with like-minded benefits providers, insurance, and health companies to create custom solutions and technology.",
            image: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M50 38.2155L40.8007 47.4147C40.5565 47.659 40.2532 47.8358 39.9204 47.928C39.5875 48.0201 39.2365 48.0246 38.9014 47.9408L24.4122 44.3185C24.1404 44.2506 23.886 44.1263 23.6653 43.9537L10 33.268L18.1436 17.9475L30.9736 14.2071C31.4319 14.0735 31.9229 14.1082 32.3578 14.3051L41 18.2155H35.8284C35.5658 18.2155 35.3057 18.2672 35.0631 18.3677C34.8204 18.4682 34.5999 18.6155 34.4142 18.8012L24.6306 28.5848C24.428 28.7875 24.2713 29.0313 24.1711 29.2997C24.0709 29.5682 24.0295 29.855 24.0498 30.1408C24.0702 30.4267 24.1517 30.7048 24.2888 30.9564C24.426 31.208 24.6156 31.4271 24.8448 31.5991L26.2 32.6155C27.5848 33.654 29.269 34.2155 31 34.2155C32.731 34.2155 34.4152 33.654 35.8 32.6155L39 30.2155L50 38.2155Z" fill="currentColor"></path>
            <path d="M60.1794 30.4462L54 33.5359L46 18.2154L52.2423 15.0942C52.7113 14.8597 53.2536 14.8188 53.7525 14.9802C54.2514 15.1416 54.6669 15.4925 54.9096 15.9573L61.0578 27.7316C61.1808 27.967 61.2556 28.2246 61.2779 28.4892C61.3002 28.7539 61.2696 29.0204 61.1878 29.2731C61.1061 29.5258 60.9748 29.7596 60.8016 29.9611C60.6285 30.1625 60.417 30.3274 60.1794 30.4462V30.4462Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M10.0011 33.2681L3.8217 30.1784C3.58414 30.0596 3.37261 29.8947 3.19947 29.6932C3.02633 29.4918 2.89504 29.258 2.81327 29.0052C2.7315 28.7525 2.70088 28.4861 2.7232 28.2214C2.74552 27.9568 2.82033 27.6992 2.94327 27.4638L9.09151 15.6895C9.33421 15.2247 9.74973 14.8738 10.2486 14.7124C10.7475 14.551 11.2898 14.5919 11.7588 14.8264L18.0011 17.9475L10.0011 33.2681Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M54 33.5359L50 38.2154L40.8007 47.4147C40.5565 47.6589 40.2532 47.8357 39.9204 47.9279C39.5875 48.0201 39.2365 48.0245 38.9014 47.9407L24.4122 44.3184C24.1404 44.2505 23.886 44.1262 23.6653 43.9537L10 33.2679" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M50 38.2155L39 30.2155L35.8 32.6155C34.4152 33.654 32.7309 34.2155 31 34.2155C29.269 34.2155 27.5848 33.654 26.2 32.6155L24.8448 31.5991C24.6156 31.4271 24.4259 31.208 24.2888 30.9564C24.1516 30.7048 24.0701 30.4267 24.0498 30.1408C24.0295 29.855 24.0709 29.5682 24.1711 29.2997C24.2713 29.0313 24.428 28.7875 24.6306 28.5849L34.4142 18.8012C34.5999 18.6155 34.8204 18.4682 35.063 18.3677C35.3057 18.2672 35.5658 18.2155 35.8284 18.2155H46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M18.1433 17.9475L30.9733 14.2071C31.4316 14.0735 31.9226 14.1082 32.3576 14.3051L40.9997 18.2155" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M28 53.2154L20.4651 51.3317C20.1594 51.2552 19.876 51.1076 19.6381 50.9008L14 46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`
        },
        { 
            title: "Security & Compliance", 
            description: "Not just technology experts. Health experts. We are able to navigate both stringent regulatory environments and the complexities of technology and data.",
            image: `<svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M10 26.6667V12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10H52C52.5304 10 53.0391 10.2107 53.4142 10.5858C53.7893 10.9609 54 11.4696 54 12V26.6667C54 47.6705 36.1735 54.6292 32.6141 55.8093C32.2161 55.9463 31.7839 55.9463 31.386 55.8093C27.8265 54.6292 10 47.6705 10 26.6667Z" fill="currentColor"></path>
            <path d="M10 26.6667V12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10H52C52.5304 10 53.0391 10.2107 53.4142 10.5858C53.7893 10.9609 54 11.4696 54 12V26.6667C54 47.6705 36.1735 54.6292 32.6141 55.8093C32.2161 55.9463 31.7839 55.9463 31.386 55.8093C27.8265 54.6292 10 47.6705 10 26.6667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M43 24L28.3333 38L21 31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`
        },
    ]

  return (
        <div className="card-container flex sm:flex-col gap-10 mt-20">
            {items.map((item, index) => {
                return (
                    <div key={index} className="card min-w-[40vh] sm:w-[30vw] sm:flex items-center gap-6
                    border-[1px] border-[--black]  py-8 px-8 ">
                        <div className="rightdata w-[10vh] h-[10vh] sm:w-[28vh]  sm:h-[10vh] "
                            dangerouslySetInnerHTML={{ __html: item.image }}/>
                        <div className=" font-[Sansita]  leftdata">
                            <h1 key={index} className="text-[3vh] font-bold whitespace-nowrap sm:text-[2.8vh] sm:font-bold mb-2">{item.title}</h1>
                            <p className="text-[2.2vh]  sm:text-[2vh] font-medium">{item.description}</p>
                        </div>                       
                    </div>
                )
            })} 
        </div>
    )
}

export default Card


