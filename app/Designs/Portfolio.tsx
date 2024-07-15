{/* "use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProjectData from "../Data/Projects";
import Image from "next/image";
import user1 from "../assets/users/balazs-orban.png";
import user2 from "../assets/users/delba-de-oliveira.png";
import user3 from "../assets/users/evil-rabbit.png";

const Portfolio: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full h-auto flex items-center justify-center">
        <Swiper
          slidesPerView={4.5}
          spaceBetween={8}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4.4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="swiper"
        >
          <div className=" py-6">
            {ProjectData.map((project) => (
              <div key={project.id} className="  py-5 flex">
                <SwiperSlide className=" gap-5">
                  <div className=" w-[250px] rounded-sm bg-white dark:bg-zinc-800 dark:border shadow-xl  h-auto p-4">
                    <div className=" space-y-4">
                      <h1 className=" text-lg font-semibold plus">
                        {project.projectName}
                      </h1>
                      <Image
                        src={project.projectImage}
                        className="overflow-hidden object-cover h-[100px] rounded-3xl"
                        alt={""}
                      />
                      <div className="flex items-center justify-between w-full">
                        <div className="p-1 rounded-md bg-indigo-300 font-semibold text-indigo-600 text-sm flex items-center justify-center">
                          {project.projectType}
                        </div>
                        <div className="-space-x-3 text-white flex items-center">
                          <Image src={user1} alt="" className="h-7 w-7 rounded-full object-cover "/>
                          <Image src={user2} alt="" className="h-7 w-7 rounded-full object-cover "/>
                          <div className="h-7 bg-indigo-600 flex-center w-7 rounded-full object-cover text-xs">
                            {project.projectViews}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
*/}