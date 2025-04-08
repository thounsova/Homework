import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  alt: string;
  link?: string;
}

function ProductCard({
  name,
  price,
  description,
  image,
  alt,
  link,
}: ProductCardProps) {
  return (
    <Link
      to={link || "#"}
      className="w-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 ease-in-out"
    >
      <div className="relative overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={alt}
          className="w-full h-60 object-fit transition-transform duration-500 ease-in-out hover:scale-110 rounded-t-3xl"
        />
        <button className="absolute top-3 right-3 p-2 bg-white text-pink-400 rounded-full shadow-lg hover:bg-pink-100 hover:text-pink-500 transition">
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-md font-semibold text-pink-700 truncate">{name}</h2>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-pink-600 font-bold text-sm">${price}</span>
          <button className="text-xs px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function Card() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item: any) => ({
          name: item.title,
          price: item.price.toFixed(2),
          description: item.description,
          image: item.image,
          alt: item.title,
          link: `/product/${item.id}`,
        }));
        setProducts(formatted);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 md:px-12 pt-8 pb-10 bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
        <h1 className="text-3xl font-bold text-pink-700">Cute Shop 🛍️</h1>
        <input
          type="text"
          placeholder="Search something sweet..."
          className="w-full sm:w-72 px-4 py-2 border border-pink-200 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            alt={product.alt}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
}
