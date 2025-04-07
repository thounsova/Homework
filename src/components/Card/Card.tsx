import "@fortawesome/fontawesome-free/css/all.min.css";
import image1 from "../../assets/images1.webp";
import image2 from "../../assets/images2.webp";
import image3 from "../../assets/images3.webp";
import image4 from "../../assets/images4.webp";
import image5 from "../../assets/images5.webp";
import image6 from "../../assets/images6.webp";
import image7 from "../../assets/images7.webp";
import image8 from "../../assets/images8.webp";
import image9 from "../../assets/images9.webp";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  link?: string;
}

function CardComponent({ title, description, image, alt, link }: CardProps) {
  return (
    <Link
      to={link || "#"}
      className="max-w-[260px] bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl gap-4 block"
    >
      <div className="relative">
        <img
          src={image}
          alt={alt}
          className="w-full hover:border-blue-300 h-[210px] object-cover rounded-t-lg border-4 border-transparent transition-all hover:border-white"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded-t-lg"></div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <button className="flex items-center justify-center p-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg hover:scale-105 transition-all hover:bg-blue-600">
            <div className="px-2 py-2 rounded-full flex items-center justify-center transition-all">
              <svg
                className="w-5 h-5 text-white drop-shadow-sm hover:text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
              </svg>
            </div>
          </button>
        </div>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </Link>
  );
}

export default function Card() {
  const cardData = [
    {
      title: "Card 1 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image1,
      alt: "Card 1 Image",
      link: "/",
    },
    {
      title: "Card 2 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image2,
      alt: "Card 2 Image",
      link: "/story/2",
    },
    {
      title: "Card 3 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image3,
      alt: "Card 3 Image",
      link: "/story/3",
    },
    {
      title: "Card 4 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image4,
      alt: "Card 4 Image",
      link: "/story/4",
    },
    {
      title: "Card 5 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image5,
      alt: "Card 5 Image",
      link: "/story/5",
    },
    {
      title: "Card 6 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image6,
      alt: "Card 6 Image",
      link: "/story/6",
    },
    {
      title: "Card 7 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image7,
      alt: "Card 7 Image",
      link: "/story/7",
    },
    {
      title: "Card 8 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image8,
      alt: "Card 8 Image",
      link: "/story/8",
    },
    {
      title: "Card 9 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image9,
      alt: "Card 9 Image",
      link: "/story/9",
    },
    {
      title: "Card 10 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image2,
      alt: "Card 10 Image",
      link: "/story/10",
    },
    {
      title: "Card 11 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image3,
      alt: "Card 11 Image",
      link: "/story/11",
    },
    {
      title: "Card 12 Title",
      description:
        "Parents, join your little ones in exploring this beautiful world of folklore and adventure. With interactive elements and shared reading modes, create lasting memories as you guide their journey through enchanting tales.",
      image: image1,
      alt: "Card 12 Image",
      link: "/story/12",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-7 pt-6 pb-6">
      {cardData.map((card, index) => (
        <CardComponent
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          alt={card.alt}
          link={card.link}
        />
      ))}
    </div>
  );
}
