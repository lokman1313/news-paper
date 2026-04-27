import Image from "next/image";
const getData= async()=>{
  const res= await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data
}
export default async function Home() {
  const categoryData = await getData()
  const categorys=categoryData.data.news_category;
  console.log(categorys)
  return (
    <div className="grid grid-cols-8 gap-2">
     <div className="col-span-2">
      Category
      <ul>
        {
        categorys.map(category => <li key={category.category_id}>{category.category_name}</li>)
      }
      </ul>
     </div>
     <div className="col-span-4">News</div>
     <div className="col-span-2">Logo icon</div>
    </div>
  );
}
