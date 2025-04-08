export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-teal-300 to-pink-300 p-12 rounded-lg shadow-lg">
      <div className="text-center shadow-xl rounded-lg p-8 bg-white">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-4 animate__animated animate__fadeIn">
          VANNA REACH
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          A passionate creator and dreamer.
        </p>
        <button className="px-6 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all transform hover:scale-105">
          Let's Connect!
        </button>
      </div>
    </section>
  );
}
