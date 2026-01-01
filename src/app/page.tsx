import { Domain } from "./DATA/domains";
import { SearchBar } from "./components/SearchBar";

const URL = 'http://localhost:3001/domains';

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ query?: string }>
}) {

  const { query } = await searchParams

  const response = await fetch(URL);
  const domains: Domain[] = await response.json();

  const filteredDomains = domains.filter((domain) =>
    domain.name.toLowerCase().includes((query ?? '').toLowerCase()))

  return (
    <div className="flex items-center justify-center flex-col">
      <SearchBar />

      <h1 className="mt-10">Domains list:</h1>
      <ul className="space-y-4 p-4">
        {filteredDomains.map((domain) => (
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
