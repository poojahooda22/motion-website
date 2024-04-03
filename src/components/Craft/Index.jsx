
import Card from "../Card";
import Button from "../Button";

function Craft() {

   
  return (
    <div data-color="cyan"
        className="craft section w-full flex gap-10 justify-between items-start px-10 py-40 relative">
        <div className="ltext w-[40%] sticky top-[10%] left-0  ">
            <p className="font-[Sansita] text-[1.2rem] font-medium leading-[2rem]">
                Significo is a leading health software creator founded on the belief
                that technology can transform healthcare to put people first.
                Whether they are employees, members, customers, or clients, we
                never forget the real people we’re designing for.
            </p>
            <h1 className="font-[SansitaReg] text-[4.4rem] mt-10 mb-10 leading-[5.5rem]">We Craft <br/>
                Human-Centric
                Health Software
            </h1>
            {/* button */}
            <Button  bgColor="bg-none" text="OUR SOLUTIONS" />
        </div>
        <div
        className="cards w-1/2 ">                
            <Card />
        </div>
    </div>
  )
}

export default Craft
