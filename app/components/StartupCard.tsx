import React from "react";
import { formateDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

const StartupCard = ({ post }: { post: StartupCardType }) => {
  return (
    <div className="border-2 border-black flex w-96  rounded-xl">
      <div className="w-full py-4 px-4">
        <h1 className="flex justify-between items-center w-full">
          <p className="font1 bg-black-200 text-white px-2 rounded-xl text-xs py-1 flex items-center justify-center">
            {formateDate(post?._createdAt)}
          </p>
          <p className="flex gap-1">
            <EyeIcon size={20} className=" text-red-600" />
            {post?.views}
          </p>
        </h1>

        <div>
          <div>
            <Link href={`/user/${post?.author?._id}`}>
              <p className="text-xl font-semibold leading-non mt-4">
                {post?.author?.name}
              </p>
            </Link>

            <Link href={`/startup/${post?.author?._id}`}>
              <p className="text-4xl font-semibold mb-2">{post?.title}</p>
            </Link>
          </div>
          
        </div>
        <p>{post?.description}</p>

        <img src={post?.image} alt="image" className="rounded" />
      </div>
    </div>
  );
};

export default StartupCard;
