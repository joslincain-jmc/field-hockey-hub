"use client";

import { useState } from "react";

const teams = [
  {
    team_name: "Penn State",
    division: "D1",
    conference: "Big Ten",
  },
  {
    team_name: "Maryland",
    division: "D1",
    conference: "Big Ten",
  },
  {
    team_name: "Iowa",
    division: "D1",
    conference: "Big Ten",
  },
  {
    team_name: "Kean University",
    division: "D3",
    conference: "NJAC",
  },
  {
    team_name: "Montclair",
    division: "D3",
    conference: "NJAC",
  },
  {
    team_name: "TCNJ",
    division: "D3",
    conference: "NJAC",
  },
];

export default function TeamsPage() {
  const [divisionFilter, setDivisionFilter] = useState("All");

  const filteredTeams =
    divisionFilter === "All"
      ? teams
      : teams.filter(
          (team) => team.division === divisionFilter
        );

  return (
    <main className="min-h-screen bg-green-50 p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">
        NCAA Field Hockey Teams
      </h1>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setDivisionFilter("All")}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          All
        </button>

        <button
          onClick={() => setDivisionFilter("D1")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          D1
        </button>

        <button
          onClick={() => setDivisionFilter("D2")}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          D2
        </button>

        <button
          onClick={() => setDivisionFilter("D3")}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          D3
        </button>
      </div>

      <p className="text-lg mb-6">
        {filteredTeams.length} Teams Found
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTeams.map((team) => (
          <div
            key={team.team_name}
            className="bg-white rounded-lg shadow p-4"
          >
            <h2 className="text-xl font-bold">
              {team.team_name}
            </h2>

            <p>Division: {team.division}</p>
            <p>Conference: {team.conference}</p>
          </div>
        ))}
      </div>
    </main>
  );
}