import Link from 'next/link';
export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-6xl font-bold text-center text-green-800">
          NCAA Field Hockey Hub
        </h1>

        <p className="text-center text-2xl mt-4 text-gray-700">
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

          <div className="bg-white p-8 rounded-lg shadow">
            No games available yet.
          </div>
        </section>

      <section className="mt-12">
        <h2 className="text-3xl flex justify-center font-semibold mb-4">
          Division Selection 
        </h2>

        <div className="flex justify-center gap-4">
          <Link href="/teams?division=D1" className="bg-green-600 text-white px-6 py-3 rounded">
            D1
          </Link>

          <Link href="/teams?division=D2" className="bg-green-600 text-white px-6 py-3 rounded">
            D2
          </Link>

          <Link href="/teams?division=D3" className="bg-green-600 text-white px-6 py-3 rounded">
            D3
          </Link>
        </div>

        <div className="mt-4 flex justify-center">
          <Link href="/teams">
            View All Teams
          </Link>
        </div>
      </section>
      </div>
    </main>
  );
}