import { Link } from "react-router-dom";

export default function SectionTitle({ title, filters, viewAll, to }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      {filters && (
        <div className="flex gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-4 py-1 rounded-full text-sm hover:bg-gray-100"
            >
              {filter}
            </button>
          ))}
        </div>
      )}
      {viewAll && (
        <Link to={to} className="text-secondary hover:underline">
          {viewAll}
        </Link>
      )}
    </div>
  );
}
