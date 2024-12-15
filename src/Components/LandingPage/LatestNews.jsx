import SectionTitle from "../ui/SectionTitle";

const news = [
  {
    id: 1,
    title: "Record-Breaking Online Auction Sells Rare Painting for $5 Million",
    excerpt:
      "An exclusive digital auction witnessed the sale of a rare masterpiece, attracting bidders from around the globe.",
    image: "https://th.bing.com/th/id/R.208308bee89e6525b12f52de6cb54240?rik=qOFalCKCrEteGw&pid=ImgRaw&r=0", 
    date: "2024-12-01",
  },
  {
    id: 2,
    title: "Luxury Car Auction Goes Virtual with Stunning Results",
    excerpt:
      "Top luxury car brands were auctioned online, achieving unprecedented sales and exciting car enthusiasts worldwide.",
    image: "https://i.pinimg.com/originals/fc/02/7c/fc027cf0b6423788d72f9af8d8a91884.jpg", 
    date: "2024-12-05",
  },
  {
    id: 3,
    title:
      "Rare Collectibles Now Available in the Biggest Online Auction Event",
    excerpt:
      "From vintage watches to historical artifacts, the online auction is a treasure trove for collectors.",
    image:
      "https://th.bing.com/th/id/R.cf14cadf1e381fa81108e91cd4eb244e?rik=mkgUim35B%2bi1Tg&pid=ImgRaw&r=0", 
    date: "2024-12-10",
  },
];

export default function LatestNews() {
  return (
    <section className="py-12 ">
      <div className="containerAK">
        <SectionTitle title="Latest News" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {news.map(({ id, title, excerpt, image, date }) => (
            <article
              key={id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow"
            >
              <img
                src={image}
                alt={"Problem with the image"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{excerpt}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{date}</span>
                  <button className="text-secondary hover:underline">
                    Read more
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
