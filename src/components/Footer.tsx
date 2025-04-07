import characterImg from "../assets/image.webp"; // Import Local Image
import SocialIconsFooter from "./socialiconsFooter/socialiconsFooter";

export default function Footer() {
  return (
    <div className="bg-blue-900 text-white py-10 px-5 md:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Title & Description */}
          <div className="text-center md:text-left w-full md:w-1/2">
            <h2 className="text-3xl font-bold">
              THE END.
              <p className="text-pink-500 text-lg">(of this page)</p>
            </h2>
          </div>

          <p className="text-gray-400 text-sm text-center md:text-end md:w-1/2">
            Fabletastic.com is the world's largest collection of fairytales,
            fables, and folktales. Discover thousands of classic tales plus new
            ones from today's best storytellers. Join now to publish your own
            tales, get feedback from readers, and enter writing competitions.
          </p>
        </div>

        {/* Signup Form & Image */}

        <div className=" flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="mt-[100px] text-gray-500 text-sm text-center">
            © 2025 Sooper Books. All rights reserved.
            <div className="mt-6 text-center md:text-">
              <p className="text-gray-400 justify-center items-center">
                Follow us on:
              </p>
              <SocialIconsFooter />
            </div>
          </div>
          {/* Character Image */}
          <img
            src={characterImg}
            alt="Character"
            className="w-32 md:w-44 rounded-lg"
          />

          {/* Sign-up Form */}
          <form className="max-w-md w-full">
            <label className="block mb-2 font-medium text-white">
              <h3>Sign in</h3>
            </label>
            <p className="text-gray-400 text-sm">
              If you want your children to be intelligent, read them fairy
              tales.
            </p>

            <div className="relative mt-3">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm px-4 py-2"
              >
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              If you want them to be more intelligent, read them more fairy
              tales.{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
