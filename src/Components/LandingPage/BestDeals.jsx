import ProductCard from '../products/ProductCard';
import SectionTitle from '../ui/SectionTitle';

const bestDeals = [
  {
    id: 1,
    name: 'Luxury Villa in Beverly Hills',
    price: '5,500,000',
    image: 'https://www.thepinnaclelist.com/wp-content/uploads/2016/01/01-Roca-Llisa-Luxury-Villa-Ibiza-Balearic-Islands-Spain.jpg',
    location: 'Beverly Hills, CA',
    description: 'A stunning luxury villa with a breathtaking view, offering 6 bedrooms and 7 bathrooms.',
    rating: 4.9,
    discount: 40,
    auctionDate: '2024-03-01',
  },
  {
    id: 2,
    name: 'Vintage 1967 Ford Mustang',
    price: '55,000',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/83/00/36/830036bd92fc5f65dc34aacd3d00338b.jpg',
    location: 'Miami, FL',
    description: 'Classic 1967 Ford Mustang in mint condition, fully restored and ready for driving.',
    rating: 4.8,
    discount: 25,
    auctionDate: '2024-04-05',
  },
  {
    id: 3,
    name: 'Platinum Diamond Necklace',
    price: '15,000',
    image: 'https://davidashton.co.uk/wp-content/uploads/2017/03/IMG_9452.jpg',
    description: 'Exquisite platinum necklace with 3 carat diamonds, perfect for special occasions.',
    rating: 4.9,
    discount: 55,
    auctionDate: '2024-03-10',
  },
  {
    id: 4,
    name: 'Vintage 18th Century Mirror',
    price: '3,500',
    image: 'https://a.1stdibscdn.com/18th-century-antique-mirror-richly-carved-and-gilded-mirror-for-sale-picture-2/f_11162/1540911886827/DSCN0541_master.JPG?width=768',
    description: 'A rare 18th-century French mirror with original gilding, perfect for collectors.',
    rating: 4.8,
    discount: 55,
    auctionDate: '2024-04-01',
  },
];


export default function BestDeals() {
  return (
    <section className="py-12">
      <div className="containerAK ">
        <SectionTitle 
          title="Best Deals"
          viewAll="View All"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {bestDeals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}