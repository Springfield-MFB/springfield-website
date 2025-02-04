import { PageBoard } from "@/components/page-board";
import React from "react";
import { Category } from "./category";
import { News } from "./news";
import { Press } from "./press";
import { PicturesVideos } from "./pictures-videos";
import { Speeches } from "./speeches";

export const MediaPage = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <PageBoard
        containerClassName="lg:w-[90%]"
        className="h-[80vh] lg:h-[90vh]"
        backgroundImage="url('/images/media-bg.png')"
        desc="We have a lot to share as events unfold in our industry, so visit us often to get the latest news from Springfield Bank and the banking industry."
        heading="Media Centre"
      />

      <Category />

      <News />

      <Press />

      <PicturesVideos />

      <Speeches />
    </div>
  );
};
