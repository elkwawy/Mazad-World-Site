import useLocalization from "@/hooks/useLocalization";
import AuctionCard from "../landingPage/components/auctions/AuctionCard";

const AuctionsPage = () => {
  const { t } = useLocalization();
  const auctions = [
    {
      id: 1,
      name: t("auctions.name1"), // مفتاح الترجمة
      currentBid: 1200000.0,
      timeLeft: "8h 30m",
      image:
        "https://th.bing.com/th/id/OIP.Uz8Ei04MjAOenca3DFHLFgHaE8?rs=1&pid=ImgDetMain",
      bids: 10,
      category: t("auctions.category1"), // مفتاح الترجمة
    },
    {
      id: 2,
      name: t("auctions.name2"),
      currentBid: 4999.99,
      timeLeft: "4h 30m",
      image:
        "https://i.etsystatic.com/6382786/r/il/182fc9/2222434112/il_fullxfull.2222434112_gl8j.jpg",
      bids: 12,
      category: t("auctions.category2"),
    },
    {
      id: 3,
      name: t("auctions.name3"),
      currentBid: 69999.99,
      timeLeft: "5h 10m",
      image:
        "https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg",
      bids: 30,
      category: t("auctions.category3"),
    },
    {
      id: 4,
      name: t("auctions.name4"),
      currentBid: 2499.99,
      timeLeft: "3h 45m",
      image:
        "https://telosmain123.s3.eu-west-2.amazonaws.com/wp-content/uploads/2018/11/29205603/Telos-magic-Egyptian-Scarab-Gold-front-view2.jpg",
      bids: 8,
      category: t("auctions.category4"),
    },
    {
      id: 5,
      name: t("auctions.name5"),
      currentBid: 450000.0,
      timeLeft: "7h 25m",
      image:
        "https://th.bing.com/th/id/R.4ad93b5a28ceea05ece284eb2bd77376?rik=viMsNZjdH3mWrQ&pid=ImgRaw&r=0",
      bids: 5,
      category: t("auctions.category5"),
    },
    {
      id: 6,
      name: t("auctions.name6"),
      currentBid: 55999.99,
      timeLeft: "6h 10m",
      image:
        "https://th.bing.com/th/id/R.e768138a1980201bf8617da7075d79f2?rik=wZXfeb9e%2b0Dyqw&riu=http%3a%2f%2fwww.listadecarros.com%2fwp-content%2fuploads%2f2020%2f10%2fBMW-X5-M-Competition-2021-1.jpg&ehk=7uyeXTMT7xy4QrWpMkPwMNZmwMRWemiHjeZluwo%2binE%3d&risl=&pid=ImgRaw&r=0",
      bids: 25,
      category: t("auctions.category6"),
    },
    {
      id: 7,
      name: t("auctions.name7"),
      currentBid: 8499.99,
      timeLeft: "2h 55m",
      image:
        "https://th.bing.com/th/id/OIP.l05T2KFJ2SoIm33-wYGuqQHaHa?rs=1&pid=ImgDetMain",
      bids: 18,
      category: t("auctions.category7"),
    },
    {
      id: 8,
      name: t("auctions.name8"),
      currentBid: 1500.0,
      timeLeft: "3h 50m",
      image:
        "https://i.etsystatic.com/15773455/r/il/16fc04/2996152205/il_1588xN.2996152205_b877.jpg",
      bids: 5,
      category: t("auctions.category8"),
    },
  ];
  return (
    <div className="containerAK py-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">{t("auctions.title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {auctions.map((auction) => (
          <AuctionCard auction={auction} />
        ))}
      </div>
    </div>
  );
};

export default AuctionsPage;
