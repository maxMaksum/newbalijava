import Link from "next/link";
import { Category } from "../MockData";
import { staticPages } from "../MockData";

function HeaderRight({ navigation, category }) {
  console.log(category);
  // const uniqueC = new Set();

  // const uniqueCategory = Category.filter((cat) => {
  //   const isPresent = uniqueC.has(cat.category);
  //   uniqueC.add(cat.category);
  //   return !isPresent;
  // });

  return (
    <div className=" flex items-center  justify-end w-full  text-gray-900 text-s space-x-8">
      <div className="flex items-center">
        {navigation?.map((p) => (
          <div key={p.title}>
            <Link href={`/${p.slug}`}>
              <p className=" p-2 font-bold uppercase hover:cursor-pointer">
                {p.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
      {category?.map((data) => (
        <div key={data.id}>
          <Link href={`/categories/${data.slug}`}>
            <p className=" font-bold uppercase hover:cursor-pointer">
              {data.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HeaderRight;
