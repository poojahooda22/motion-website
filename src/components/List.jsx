
import img1 from '../assets/images/team1.png';
import img2 from '../assets/images/team2.png';
import img3 from '../assets/images/team3.png';
import img4 from '../assets/images/team4.png';
import img5 from '../assets/images/team5.png';
import img6 from '../assets/images/team6.png';
import img7 from '../assets/images/team7.png';
import img8 from '../assets/images/team8.png';
import img9 from '../assets/images/team9.png';


const data = [
    {key: 1, title: "Dr. Rick McCartney", role: "CEO", img: img1},
    {key: 2, title: "Chris Koha", role: "COO", img: img2},
    {key: 3, title: "Caroline Nieto", role: "Chief Product Officer", img: img3},
    {key: 4, title: "Victor Albertos", role: "CTO", img: img4},
    {key: 5, title: "Dr. Jana Hapfelmeier", role: "Chief Innovation Officer", img: img5},
    {key: 6, title: "Michael Robin", role: "VP of Marketing", img: img6},
    {key: 7, title: "Adrian Rubio", role: "VP of Engineering", img: img7},
    {key: 8, title: "Cy Serrano", role: "VP of Product", img: img8},
    {key: 9, title: "Lenya McGrath", role: "VP of Partnerships", img: img9},
]


function List() {
  return (
    <div className="list-container">
      {data.map((item, index) => {
        return (
            <div key={index} className="listelem w-full py-[2.5rem] px-[2rem] border-b-2 border-black relative">
                <div className="relative flex items-center justify-between z-[3] ">
                    <div className="left flex gap-14 text-5xl">
                        <h3 className="opacity-25">0{item.key}</h3>
                        <h1 className="">{item.title}</h1>
                    </div>
                    <h3 className="font-[Sansita] text-xl font-medium tracking-tight">{item.role}</h3>   
                </div>
                <div className='picture w-[15rem] h-[15rem] overflow-hidden bg-red-600 rounded-full'>
                    <img src={item.img}/>
                </div>
                <div className="bluelayer absolute bottom-0 left-0 z-[2] w-full h-0 bg-[--salmon]"></div>
            </div>
        )
      })}
    </div>
  )
}

export default List
