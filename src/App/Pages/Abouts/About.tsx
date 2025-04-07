import profileImage from "../../../assets/photo_2025-01-11_13-02-24.jpg"; // Replace with your own image

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-teal-300 to-pink-300 text-gray-800 py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-pink-200 opacity-60 rounded-lg blur-xl"></div>
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full border-8 border-white mx-auto shadow-xl transform transition-all hover:scale-110"
          />
          <h1 className="text-4xl font-bold text-purple-700 mt-6">
            Hi, I'm <span className="text-pink-500">[VANNA REACH]</span>
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            A passionate creator, dreamer, and storyteller.
          </p>
        </div>

        {/* About Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold mb-4 text-center text-purple-600">
            About Me
          </h2>
          <p className="text-lg text-gray-700">
            I’m a passionate [Your Profession], always bringing creative ideas
            to life. Whether it’s coding, writing, or designing, I love making
            imagination come true. When I'm not working on projects, you can
            find me exploring new places, reading fantasy novels, or spending
            time with my friends and family.
          </p>

          {/* Fun Facts Section */}
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-4 text-center text-teal-500">
              Fun Facts
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span role="img" aria-label="book" className="text-2xl">
                  📚
                </span>
                <span>I’m obsessed with fantasy books!</span>
              </li>
              <li className="flex items-center space-x-3">
                <span role="img" aria-label="music" className="text-2xl">
                  🎸
                </span>
                <span>Music is my life. I play guitar in my free time.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span role="img" aria-label="coffee" className="text-2xl">
                  ☕
                </span>
                <span>I can’t function without my daily cup of coffee.</span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mt-10">
            <p className="text-lg text-gray-600 mb-4">
              Want to collaborate or just say hi? Feel free to reach out to me!
            </p>
            <a
              href="mailto:your-email@example.com"
              className="inline-block px-6 py-3 bg-teal-500 text-white text-lg rounded-full hover:bg-teal-600 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
