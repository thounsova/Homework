import HoverImage from "../../../../assets/photo_2025-01-11_13-02-24.jpg";
import DefaultImage from "../../../../assets/two.jpg";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-12 md:gap-8 lg:gap-12 xl:gap-24 md:flex-row items-center">
          <article className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block">HELLO BRO SIS</span>
              <span className="block">
                VANNA <span className="text-[#260eff]">REACH</span>
              </span>
              <span className="block">BOYS NICE</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl max-w-md lg:max-w-lg mx-auto md:mx-0">
              Great! If you'd like me to continue or adjust anything further,
              feel free to let me know. I'm happy to help!
            </p>

            {/* Button */}
          </article>

          {/* Image Section */}
          <figure className="w-full md:w-1/2 px-4 sm:px-0">
            <div className="relative w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem] mx-auto">
              {/* Enhanced glowing effect with layered gradients */}
              <div className="absolute inset-0 -m-4 sm:-m-6 pointer-events-none">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-purple-300 rounded-full opacity-15 blur-3xl animate-pulse" />
                {/* Inner glow */}
                <div className="absolute inset-2 bg-purple-400 rounded-full opacity-25 blur-xl" />
              </div>

              {/* Image container with hover effect */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl ring-1 ring-purple-200/50 group">
                {/* Default image */}
                <img
                  src={DefaultImage}
                  alt="Mother reading a book to children"
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-0"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />

                {/* Hover image - positioned absolutely over the first image */}
                <img
                  src={HoverImage}
                  alt="Parent and child reading fairy tales together"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 transform scale-105 group-hover:scale-100"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
