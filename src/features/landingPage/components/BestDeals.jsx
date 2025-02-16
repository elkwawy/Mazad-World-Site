import ProductCard from "@/components/products/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { useTranslation } from "react-i18next";

export default function BestDeals() {
  const { t } = useTranslation();

  const bestDeals = [
    {
      id: 1,
      nameKey: "luxuryVillaName",
      price: "5,500,000",
      image:
        "https://www.thepinnaclelist.com/wp-content/uploads/2016/01/01-Roca-Llisa-Luxury-Villa-Ibiza-Balearic-Islands-Spain.jpg",
      locationKey: "beverlyHillsLocation",
      descriptionKey: "luxuryVillaDesc",
      rating: 4.9,
      discount: 40,
      auctionDate: "2024-03-01",
    },
    {
      id: 2,
      nameKey: "vintageMustangName",
      price: "55,000",
      image:
        "https://s-media-cache-ak0.pinimg.com/736x/83/00/36/830036bd92fc5f65dc34aacd3d00338b.jpg",
      locationKey: "miamiLocation",
      descriptionKey: "vintageMustangDesc",
      rating: 4.8,
      discount: 25,
      auctionDate: "2024-04-05",
    },
    {
      id: 3,
      nameKey: "diamondNecklaceName",
      price: "15,000",
      image:
        "https://davidashton.co.uk/wp-content/uploads/2017/03/IMG_9452.jpg",
      descriptionKey: "diamondNecklaceDesc",
      rating: 4.9,
      discount: 55,
      auctionDate: "2024-03-10",
    },
    {
      id: 4,
      nameKey: "vintageMirrorName",
      price: "3,500",
      image:
        "https://a.1stdibscdn.com/18th-century-antique-mirror-richly-carved-and-gilded-mirror-for-sale-picture-2/f_11162/1540911886827/DSCN0541_master.JPG?width=768",
      descriptionKey: "vintageMirrorDesc",
      rating: 4.8,
      discount: 55,
      auctionDate: "2024-04-01",
    },
  ];

  return (
    <section className="py-12">
      <div className="containerAK ">
        <SectionTitle
          title={t("bestDealsTitle")}
          viewAll={t("viewAllButton")}
          to="/bestDeals"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {bestDeals.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                name: t(product.nameKey),
                location: t(product.locationKey),
                description: t(product.descriptionKey),
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
