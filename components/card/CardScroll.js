import { Products } from "../MockData";
import Image from "next/image";

function CardScroll() {
  return (
    <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-default p-2">
      {Products.map((p) => (
        <div key={p.id} className=" m-2 rounded">
          <div className="relative min-w-[300px] min-h-[200px] md:min-w-[330px]">
            <Image
              src={p.image}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
              className="bg-cover p-4 bg-center bg-norepeat"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardScroll;
