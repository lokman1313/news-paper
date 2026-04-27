import Image from "next/image";
import Link from "next/link";

const SingleNews = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-100 font-sans mb-3">
      <div className="p-4 flex justify-between items-start">
        <div className="flex gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <Image
          src={news.author.img}
          alt="thumbnail"
          width={300}
          height={200}
        />
            </div>
          </div>
          <div>
            
            <h2 className="text-sm font-bold text-gray-800">{news.author.name}</h2>
            <p className="text-xs text-gray-500">{news.author.published_date}</p>
          </div>
        </div>

        <div className="flex gap-2 text-gray-400">
          <button className="btn btn-ghost btn-xs btn-circle">
            📌
          </button>
          <button className="btn btn-ghost btn-xs btn-circle">
            🔗
          </button>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h1 className="text-xl font-extrabold text-gray-800 leading-tight">
          {news.title}
        </h1>
      </div>

      <figure className="px-4">
        <Image
          src={news.thumbnail_url}
          alt="thumbnail"
          width={300}
          height={200}
        />
      </figure>

      <div className="card-body p-4 pt-4">
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-4">
          {news.details}
        </p>

        <div className="card-actions">
          <Link href={`/news/${news._id}`}>
          <button className="text-orange-500 font-bold text-sm hover:underline">
            Read More
          </button>
          </Link>

        </div>

        <div className="divider my-0"></div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-gray-500 ml-1">
              4.9
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            👁️ <span className="text-xs font-semibold">499</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;