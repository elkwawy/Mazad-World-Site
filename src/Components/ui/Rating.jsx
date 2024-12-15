import { FaStar } from 'react-icons/fa';

export default function Rating({ value, max = 5 }) {
  return (
    <div className="flex items-center">
      {[...Array(max)].map((_, i) => (
        <FaStar
          key={i}
          className={`
            ${i < Math.floor(value) ? 'text-yellow-400' : 'text-gray-300'}
            text-sm
          `}
        />
      ))}
      <span className="text-sm text-gray-500 ml-2">{value}</span>
    </div>
  );
}