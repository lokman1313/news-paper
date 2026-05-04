import Link from "next/link";


const AllCategory = ({categorys,activeId}) => {
    return (
         <ul className="flex flex-col gap-2 justify-center p-2">
            {
                categorys.map(category => <li key={category.category_id} className={`${activeId === category.category_id ? "bg-purple-400": ""} p-2 text-center font-semibold text-md rounded-md`}>
                    <Link href={`/category/${category.category_id}`} className="block">
                    {category.category_name}
                    </Link>
                    </li>)
            }
         </ul>
    );
};

export default AllCategory;