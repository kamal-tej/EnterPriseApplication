import DesktopImage from "../../assets/desktop.webp";
export default function Products() {
  const Products = [{
    name: "Ground nut",
    quantity: "5kg",
    imageURL: {DesktopImage},
    quality: "Good"
  },{
    name: "Ground nut",
    quantity: "5kg",
    imageURL: {DesktopImage},
    quality: "Good"
  },{
    name: "Ground nut",
    quantity: "5kg",
    imageURL: {DesktopImage},
    quality: "Good"
  }]
  return (
    <>
    <section className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-6 md: space-x-6">
            {
                Products.map((product) => (
                    <div className="flex flex-col items-start m-6">
                        <img className="rounded hover:scale-110 transition duration-1000" src={DesktopImage}/>
                        <div className="p-6">
                            <ul key={product.name} className="list-disc font-bold">
                                <li >{product.name}</li>
                                <li>{product.quality}</li>
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
