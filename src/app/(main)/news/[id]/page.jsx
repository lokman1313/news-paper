import { getNewsDeteils } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  const { id } = await params;

  const data = await getNewsDeteils(id);

  return (
    <div className="p-8 border-1">
      <Image className="mx-auto" src={data.image_url} alt="data" width={800} height={400}></Image>
      <div className="p-4 space-y-3">

      <h2 className=" text-xl font-bold">{data.title}</h2>
      <p className="text-md font-semibold">{data.details}</p>
      <Link href={"/"}><button className="btn btn-primary">Go to News page</button></Link>
      </div>
    </div>
  );
};

export default page;