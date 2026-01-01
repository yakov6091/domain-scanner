import { Domain } from "./DATA/domains";


export default async function Home() {
  const URL = 'http://localhost:3001/domains';

  const response = await fetch(URL);
  const domains: Domain[] = await response.json();

  return (
    <div className="flex items-center justify-center">
      <h1>Domains list:</h1>
      <ul className="space-y-4 p-4">
        {domains.map((domain) => (
          <li
            key={domain.id}
            className="p-4 bg-blue-500 shadow-md rounded-lg text-gray-800"
          >
            <div className="font-bold text-white">{domain.name}</div>
            <div className="text-sm">
              <p>Active: {domain.isActive ? "ON" : "OFF"}</p>
              <p>Last checked: {domain.lastChecked}</p>
              <p>Created at: {domain.createdAt}</p>
            </div>

          </li>
        ))}

      </ul>
    </div>


  );
}
