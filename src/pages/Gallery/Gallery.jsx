import BlackGramImage from "../../assets/blackgram.png";
import RiceImage from "../../assets/rice.png";
import GroundNutsImage from "../../assets/groundnuts.png";
import ChikPeasImage from "../../assets/chikpeas.png";
import AllMixImage1 from "../../assets/allmix.png";
import AllMixImage2 from "../../assets/allproductsmix.png";

export default function Gallery() {
  const Products = [
    {
      name: "Balck gram",
      imageURL: BlackGramImage,
    },
    {
      name: "Rice",
      imageURL: RiceImage,
    },
    {
      name: "Ground Nuts",
      imageURL: GroundNutsImage,
    },
    {
      name: "ChikPeas",
      imageURL: ChikPeasImage,
    },
    {
      name: "Allmix1",
      imageURL: AllMixImage1,
    },
    {
      name: "Allmix2",
      imageURL: AllMixImage2,
    },
  ];
  return (
    <>
      <section className="container mx-auto">
        <div className="grid grid-cols-3 gap-6 mb-16 mx-4">
          {Products.map((product) => (
            <div key={product.id} className="flex flex-col justify-between items-center">
              <img
                className="md:w-64 md:h-64 w-32 h-32 rounded hover:scale-110 transition duration-1000"
                src={product.imageURL}
                alt={product.name}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
