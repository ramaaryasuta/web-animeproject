import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import ImagePlacehoderSkeleton from "./SkeletonCard";
import { malIdContext } from "../App";

const GridComp = (props) => {
  const navigate = useNavigate();

  const malId = useContext(malIdContext);

  return (
    <>
      {props.data.length === 0 ? (
        <div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-8">
            <ImagePlacehoderSkeleton/>
            <ImagePlacehoderSkeleton/>
            <ImagePlacehoderSkeleton/>
            <ImagePlacehoderSkeleton/>
            <ImagePlacehoderSkeleton/>
          </ul>
        </div>
      ) : (
        <div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5">
            {props.data.map((data) => {
              return (
                <li key={data.mal_id}>
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <a href="#!">
                      <img
                        className="rounded-t-lg w-full h-60 object-cover"
                        src={data.images.jpg.image_url}
                        alt={data.title}
                      />
                    </a>
                    <div className="p-6">
                      <h5 className="mb-2 text-m md:text-lg font-medium leading-tight truncate ">
                        {data.title}
                      </h5>
                      <p className="mb-4 text-gray-500 line-clamp-3 text-sm">
                        {data.synopsis}
                      </p>
                      <Button color="blue" onClick={() => {
                        malId.setMalId(data.mal_id);
                        navigate("/detail");
                      }}>Read More</Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default GridComp;
