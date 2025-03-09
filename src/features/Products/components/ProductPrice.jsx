import { formatPrice } from "../../../utils/formatters";

export default function ProductPrice({ price, discount }) {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="flex items-center gap-2">
      <span className="text-secondary font-bold text-lg">
        {formatPrice(discountedPrice)}
      </span>
      {discount && (
        <span className="text-gray-400 line-through text-sm">
          {formatPrice(price)}
        </span>
      )}
    </div>
  );
}
