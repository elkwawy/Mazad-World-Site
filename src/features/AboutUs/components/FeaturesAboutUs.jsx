import { FiAward, FiUsers, FiShoppingBag, FiTruck } from "react-icons/fi";
const FeaturesAboutUs = () => {
  return (
    <div className="containerAK px-4 py-10">
      <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiAward className="text-2xl text-secondary" />
          </div>
          <h3 className="font-semibold mb-2">Quality Guarantee</h3>
          <p className="text-gray-600">
            All items are verified for authenticity
          </p>
        </div>
        <div className="text-center">
          <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiUsers className="text-2xl text-secondary" />
          </div>
          <h3 className="font-semibold mb-2">Trusted Community</h3>
          <p className="text-gray-600">
            Verified buyers and sellers you can trust
          </p>
        </div>
        <div className="text-center">
          <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiShoppingBag className="text-2xl text-secondary" />
          </div>
          <h3 className="font-semibold mb-2">Secure Transactions</h3>
          <p className="text-gray-600">Safe and secure payment processing</p>
        </div>
        <div className="text-center">
          <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiTruck className="text-2xl text-secondary" />
          </div>
          <h3 className="font-semibold mb-2">Fast Shipping</h3>
          <p className="text-gray-600">Quick delivery to your doorstep</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAboutUs;
