import AllCategory from "@/components/homepage/AllCategory";
import LogoWith from "@/components/homepage/LogoWith";

const getData= async()=>{
  const res= await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data
}

const getNewsData= async(category_id)=>{
  const res= await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
  const data = await res.json()
  return data
}
const CategoriId = async({params}) => {
 const {id}=await params;
 console.log(id)

    const categoryData = await getData()
  const categorys=categoryData.data.news_category;

//category by news id
 const nwesData=await getNewsData(id)

 
  return (
    <div className="grid grid-cols-8 gap-2">
     <div className="col-span-2 ">
      <h2 className="text-2xl font-bold mb-3">
      Category
      </h2>
      <AllCategory categorys={categorys} activeId={id}></AllCategory>
     </div>


     <div className="col-span-4">
        <h2 className="text-2xl font-bold mb-3">News</h2>
        {
         nwesData.data.length>0 ? nwesData.data.map((news , index) => <div key={index}>{news.title}</div>):(<div className="flex justify-center items-center "> 
         <h2 className="font-bold text-4xl mt-20">News is Cooking...</h2>
         </div>)
        }
        </div>


     <div className="col-span-2">
     <h2 className="text-2xl font-bold mb-3">Logo With</h2>
      <LogoWith></LogoWith>
     </div>
    </div>
  );
}

export default CategoriId;