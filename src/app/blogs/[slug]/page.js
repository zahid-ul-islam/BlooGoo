import Image from "next/image";
import React from "react";

export default function SinglePostPage() {
  return (
    <div className="flex gap-10 m-10">
      <div>
        <Image src="/blogimg1.jpg" alt="blgo-img-1" width={400} height={400} />
      </div>
      <div className="flex flex-col gap-8 justify-center">
        <div>
          <span className="font-bold text-2xl">Noteworthy technology acquisitions 2021</span>
        </div>
        <div className="flex gap-4">
          <div>
            <Image
              className="rounded-full"
              src="/blogimg1.jpg"
              alt="blog-img-1"
              width={50}
              height={500}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Author</span>
            <span>Zahid Fahim</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Published</span>
            <span>01.01.2024</span>
          </div>
        </div>
        <div>
          <p className="text-sm">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
}
