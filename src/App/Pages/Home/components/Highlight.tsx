import React from "react";
// Importing images correctly
import image1 from "../../../../assets/photo_2025-01-11_13-02-24.jpg";
import image2 from "../../../../assets/two.jpg";
import image3 from "../../../../assets/three.jpg";

interface ContentCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div
      className="w-64 sm:w-72 md:w-80 border-2 border-teal-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-2 hover:border-teal-400 
      relative group bg-white"
    >
      {/* Glowing effect */}
      <div
        className="absolute inset-0 -z-10 
        bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-teal-500/0 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 
        blur-xl"
      ></div>

      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40 
          group-hover:to-black/60 transition-all duration-300"
        ></div>
      </div>
      <div className="p-5 relative">
        <h3
          className="text-pink-500 text-lg font-medium mb-3 transition-colors duration-300 
          group-hover:text-pink-400"
        >
          {title}
        </h3>
        <p
          className="text-gray-800 text-sm transition-colors duration-300 
          group-hover:text-gray-700"
        >
          {description}
        </p>
        {/* Subtle bottom glow */}
        <div
          className="absolute bottom-0 left-0 w-full h-1 
          bg-teal-500/0 group-hover:bg-teal-500/50 transition-all duration-300"
        ></div>
      </div>
    </div>
  );
};

export default function Highlight() {
  const fairyTaleContent = [
    {
      title: "VANNA REACH",
      description:
        "Gain access to the world's largest collection of fairy tales, with over 4000 captivating stories, including timeless classics and hidden gems.",
      imageUrl: image1, // Use imported image
    },
    {
      title: "VANNA REACH",
      description:
        "Gain access to the world's largest collection of fairy tales, with over 4000 captivating stories, including timeless classics and hidden gems.",
      imageUrl: image2, // Use imported image
    },
    {
      title: "VANNA REACH",
      description:
        "Gain access to the world's largest collection of fairy tales, with over 4000 captivating stories, including timeless classics and hidden gems.",
      imageUrl: image3, // Use imported image
    },
  ];

  return (
    <section className="w-full min-h-screen pb-12 py-16">
      <article className="max-w-6xl mx-auto px-4">
        {/* head */}
        <div className="text-center mb-4">
          <h1 className="text-5xl font-semibold">
            <span className="text-blue-500">MY history</span>
          </h1>
          <div className="h-1 w-20 bg-pink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {fairyTaleContent.map((content, index) => (
            <ContentCard
              key={index}
              title={content.title}
              description={content.description}
              imageUrl={content.imageUrl} // Pass correct imageUrl
            />
          ))}
        </div>
      </article>
    </section>
  );
}
