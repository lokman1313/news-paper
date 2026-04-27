export const getNewsDeteils= async (news_id)=>{
  const res= await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
  const data = await res.json()
  return data.data[0];
}