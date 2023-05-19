import { ProductContent } from "../content/ProductContent";
import Socials from "../Socials";
import Sitebtn from "../Sitebtn";


const ProductCard = () => {
    const productArray = ProductContent.map(product => (
        <div className="myh" key={product.id}>
            <div className="flex justify-center">
                <img src={product.img} className="w-1/2" alt="" />
            </div>
            <div className="px-6 space-y-3 text-slate-300">
                <p className="text-sm">
                    {product.body}
                </p>
                <ul className="pl-4 text-sm font-light list-disc">
                    {
                        product.tags.map(tag => 
                            <li>{tag}</li>
                        )
                    }
                </ul>

                <div className="flex items-center justify-between">
                    
                    <Socials instagram={product.instagram} whatsapp={product.whatsapp} facebook={product.facebook} linkedin={product.linkedin} />
                    
                    <Sitebtn site={product.site} />

                </div>

            </div>
        </div>
    ));

    return productArray;
}
 
export default ProductCard;