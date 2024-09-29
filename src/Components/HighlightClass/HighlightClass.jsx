import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

// react
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
// react

const HighlightClass = () => {
  const axiosPublic = useAxiosPublic();

  const { data: highClass = [] } = useQuery({
    queryKey: ["classHighlighted"],
    queryFn: async () => {
      const res = await axiosPublic.get("/highlighted");
      return res.data;
    },
  });

  return (
    <div>
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">Highlighted Classes</h2>
        <p className="dark:text-gray-600">Our Most Popular and Impactful Courses</p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {highClass.map((item) => (
          <div
            key={item._id}
            className="border border-gray-700 bg-orange-100 rounded-sm p-4 mt-5 items-center justify-center"
          >
            <div>
              <img className="w-full max-h-48 rounded" src={item.image} alt="" />
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-semibold">Title : {item.title}</h3>
              <div className="text-lg">
                <p>Educator : {item.name}</p>
              </div>
              <div>
                <p>Price : ${item.price}</p>
              </div>
              <p>Short Description : {item.shortDes}</p>
            </div>
            <Link to={`/public-class-details/${item._id}`}><button className="btn btn-ghost btn-sm bg-[#e67e22] text-white hover:text-black mt-2 w-full">Enroll</button></Link>
          </div>
        ))}
      </div> */}

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        {highClass.map((item) => (
          <SwiperSlide className="justify-center max-w-2xl mx-auto " key={item._id}>
            <div className="border border-gray-700 bg-orange-100 rounded-sm p-4 mt-5 items-center justify-center max-w-2xl">
              <div>
                <img className="w-full max-h-52 rounded mx-auto" src={item.image} alt="" />
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-semibold">Title : {item.title}</h3>
                <div className="text-lg">
                  <p>Educator : {item.name}</p>
                </div>
                <div>
                  <p>Price : ৳ {item.price}</p>
                </div>
                <p>Short Description : {item.shortDes}</p>
              </div>
              <Link to={`/public-class-details/${item._id}`}>
                <button className="btn btn-ghost btn-sm bg-[#e67e22] text-white hover:text-black mt-2 w-full">
                  Enroll
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <Link to="/public-classes" className="flex justify-center">
          <button className="btn btn-ghost bg-[#e67e22] text-white hover:text-black w-1/4">
            All Classes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HighlightClass;
