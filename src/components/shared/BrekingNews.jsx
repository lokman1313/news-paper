import Marquee from "react-fast-marquee";

const newsData = [
  {
    id: 1,
    category: "Global",
    title: "Middle East tensions rising",
    description: "Ongoing conflicts and diplomatic efforts continue with global calls for ceasefire.",
    date: "2026-04-27"
  },
  {
    id: 2,
    category: "Global",
    title: "AI regulations expanding",
    description: "Several countries are introducing stricter AI laws focusing on privacy and safety.",
    date: "2026-04-27"
  },
  {
    id: 3,
    category: "Global",
    title: "Climate alerts",
    description: "Extreme weather events like floods and heatwaves reported worldwide.",
    date: "2026-04-27"
  },
  {
    id: 4,
    category: "Bangladesh",
    title: "Economic updates",
    description: "Discussions around inflation and currency stability are ongoing.",
    date: "2026-04-27"
  },
  {
    id: 5,
    category: "Bangladesh",
    title: "Infrastructure progress",
    description: "Metro rail and expressway projects are making steady progress.",
    date: "2026-04-27"
  },
  {
    id: 6,
    category: "Bangladesh",
    title: "Weather warning",
    description: "Heavy rainfall expected in several regions this week.",
    date: "2026-04-27"
  }
];

const BrekingNews = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100 p-2">
            <button className="btn bg-amber-600 text-white">Latest</button>
            <Marquee pauseOnHover={true}>
             {newsData.map((news) => (
    <span key={news.id} className="mr-8">
      <span className="font-bold">[{news.category}]</span>{" "}
      {news.title} - {news.description}
    </span>
  ))}
            </Marquee>
        </div>
    );
};

export default BrekingNews;