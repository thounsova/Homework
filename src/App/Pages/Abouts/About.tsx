import profileImage from "../../../assets/photo_2025-01-11_13-02-24.jpg"; // Your image

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-amber-50 to-purple-100 text-gray-800 py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-white opacity-40 rounded-full blur-3xl"></div>
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-pink-400 mx-auto shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-110 z-10 relative"
          />
          <h1 className="text-4xl font-bold mt-6 text-purple-700 drop-shadow-sm">
            Hi, I'm <span className="text-pink-500">Vanna Reach 💖</span>
          </h1>
          <p className="text-lg text-gray-600 mt-2 italic">
            Dreamer ✨ | Creator 🎨 | Storyteller 📖
          </p>
        </div>

        {/* About Me Section */}
        <div className="bg-white rounded-xl p-6 shadow-xl space-y-6">
          <h2 className="text-3xl font-semibold text-pink-500">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate digital creator who believes in the magic of
            imagination. From writing to coding and designing, I bring stories
            to life in fun and meaningful ways. When I'm not creating, you'll
            find me sipping coffee, playing music, or getting lost in a fantasy
            novel.
          </p>

          {/* Fun Facts */}
          <div className="bg-pink-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">
              ✨ Fun Facts
            </h3>
            <ul className="space-y-4 text-left text-gray-700 text-base">
              <li className="flex items-center space-x-3">
                <span className="text-2xl">📚</span>
                <span>
                  I’m obsessed with fantasy books — dragons are my thing!
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">🎸</span>
                <span>
                  I play the guitar and love singing cheesy 2000s pop.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">☕</span>
                <span>
                  I absolutely cannot live without my morning coffee fix.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">🐱</span>
                <span>Cat lover forever — I have two fluffballs at home!</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-8">
            <p className="text-md text-gray-600 mb-4">
              Wanna collab, chat, or share a story with me? I'm just an email
              away 💌
            </p>
            <a
              href="mailto:your-email@example.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-teal-400 to-pink-400 text-white font-medium rounded-full shadow hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
