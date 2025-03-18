import BlackGramImage from "../../assets/blackgram.png";
import RiceImage from "../../assets/rice.png";
import GroundNutsImage from "../../assets/groundnuts.png";
import ChikPeasImage from "../../assets/chikpeas.png";
export default function Products() {
  const Products = [{
    name: "Black gram",
    quantity: "1kg and 5kgs available",
    imageURL: BlackGramImage,
  },{
    name: "Rice",
    quantity: "1kg and 5kgs available",
    imageURL: RiceImage,
  },{
    name: "Ground Nuts",
    quantity: "1kg and 5kgs available ",
    imageURL: GroundNutsImage,
  },
  {
    name: "ChikPeas",
    quantity: "1kg and 5kgs available ",
    imageURL: ChikPeasImage,
  }]
  return (
    <>
    <section className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-6 md: space-x-6">
            {
                Products.map((product) => (
                    <div className="flex flex-col items-start m-6">
                        <img className="rounded hover:scale-110 transition duration-1000" src={product.imageURL}/>
                        <div className="p-6">
                            <ul key={product.name} className="list-disc font-bold">
                                <li >{product.name}</li>
                                <li>{product.quantity}</li>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
    </>
  )
}
