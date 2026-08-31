import supabase from "../../lib/supabase";

export default async function TeamsPage() {
  const { data: teams, error } = await supabase
    .from("teams")
    .select("*")
    .order("team_name");

  if (error) {
    return (
      <main className="p-8">
        <h1>Error Loading Teams</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-green-50 p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        NCAA Field Hockey Teams
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teams?.map((team) => (
          <div
            key={team.id}
            className="bg-white rounded-lg shadow p-4"
          >
            <h2 className="text-xl font-bold">
              {team.team_name}
            </h2>

            <p>
              <strong>Division:</strong> {team.division}
            </p>

            <p>
              <strong>Conference:</strong> {team.conference}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {team.city || "N/A"},{" "}
              {team.state || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}