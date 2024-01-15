import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex mt-16 justify-evenly">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-blue-500 text-xl font-bold">About Us</span>
        </div>
        <div className="flex flex-col text-4xl font-bold">
          <span>We Create digital ideas</span>
          <span>that are bigger, bolder,</span>
          <span>braver and better.</span>
        </div>
        <div className="flex flex-col text-sm text-gray-500">
          <span>
            {" "}
            This is a frequently updated web page used for personal commentary or 
            
          </span>
          <span>business content. Blogs are often interactive and include sections
            </span>

          <span>
            at thebottom of individual blog posts where readers can leave
            comments
          </span>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-blue-700">10K+</span>
            <span className="text-sm">Year of experience</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-blue-700">234K+</span>
            <span className="text-sm">People reached</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-blue-700">5K+</span>
            <span className="text-sm">Stories and pugins</span>
          </div>
        </div>
      </div>
      <div>
        <Image src="/agency.jpg" alt="agency-image" width={500} height={500} />
      </div>
    </div>
  );
}
