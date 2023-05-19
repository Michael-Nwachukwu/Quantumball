import { ServicesContent } from "../content/ServicesContent";

const ServiceCard = () => {

    const servicesArray = ServicesContent.map(service => (
        <div key={service.id} className="flex flex-col-reverse sm:flex-row justify-around items-center sm:min-h-[30em] bg-[#584e4e42] rounded-3xl">

            <div className="px-8 pb-5 space-y-3 text-left sm:pl-10 sm:w-1/2">
                <div>
                    <p className="block text-sm text-yellow-900 uppercase font-light">{service.tag}</p>
                    <h1 className="block text-2xl font-bold md:text-4xl md:font-extrabold">{service.heading}</h1>
                </div>
                <p className="block text-sm sm:text-base">
                    {service.body}
                </p>
                <div className="pt-5 pb-5 sm:pb-0">
                    <a href={service.href} className="bg-[#2b2b2b] hover:text-white [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.9))] text-white px-6 py-3 text-xs">Read more</a>
                </div>
            </div>
            <div className="pb-8 text-center sm:w-1/2">
                <img src={service.img} alt="" />
            </div>

        </div>
    ));

    return servicesArray;
}
 
export default ServiceCard;