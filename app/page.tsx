export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-5xl font-bold text-center text-green-800">
          NCAA Field Hockey Hub
        </h1>

        <p className="text-center text-xl mt-4 text-gray-700">
          Your central location for NCAA field hockey schedules.
        </p>

        <div className="flex justify-center mt-8">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
            View Games
          </button>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">
            Today's Games
          </h2>

          <div className="bg-white p-6 rounded-lg shadow">
            No games available yet.
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">
            Filter By Division
          </h2>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              D1
            </button>

            <button className="bg-red-600 text-white px-4 py-2 rounded">
              D2
            </button>

            <button className="bg-purple-600 text-white px-4 py-2 rounded">
              D3
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}