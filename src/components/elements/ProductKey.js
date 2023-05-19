import Socials from "../Socials";
import Sitebtn from "../Sitebtn";

const ProductKey = ( {isActive, img, heading, body, instagram, facebook, whatsapp, linkedin, site} ) => {
    return ( 
        <div className={`text-left h-[20.1rem] [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.9))] hover:rounded-none rounded-3xl transition-all ease-in-out delay-300 duration-500 lg:hover:bg-zinc-300 lg:hover:text-black px-4 pt-5 pb-10 space-y-6 ${ isActive ? 'bg-zinc-300 text-black' : 'bg-[#2b2b2b8a] text-white lg:hover:-translate-y-5'} `}>

            <img src={img} className="w-[40%] lg:w-[50%]" alt="" />

            <div>
                <h3 className="pb-2 text-lg font-bold">{heading}</h3>
                <p className="block text-sm font-light">
                    {body}
                </p>
            </div>

            <div className="flex items-center justify-between lg:hidden">
                {/* social buttons component */}
                <Socials instagram={instagram} whatsapp={whatsapp} facebook={facebook} linkedin={linkedin} />

                {/* visit site btn */}
                <Sitebtn site={site}/>
            </div>
        
        </div>
    );
}
 
export default ProductKey;