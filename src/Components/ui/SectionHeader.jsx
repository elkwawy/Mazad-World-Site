export default function SectionHeader({ title, action, filters }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      {filters && (
        <div className="flex gap-4">
          {filters.map(filter => (
            <button
              key={filter}
              className="px-4 py-1 rounded-full text-sm hover:bg-gray-100"
            >
              {filter}
            </button>
          ))}
        </div>
      )}
      {action && (
        <a href={action.href} className="text-secondary hover:underline">
          {action.label}
        </a>
      )}
    </div>
  );
}