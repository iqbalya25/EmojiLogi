"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

interface DataProps {
  name: string;
  category: string;
  group: string;
  htmlCode: string;
  unicode: string;
}

export default function Home() {
  const [data, setData] = useState<DataProps | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://emojihub.yurace.pro/api/random/category/food-and-drink"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleReresh = () => {
    fetchData();
  };

  return (
    <div className="flex flex-col p-6 gap-4">
      <h1>EMOJILOGI</h1>
      <div className="bg-yellow-200 flex flex-col items-center justify-center px-4 py-20 gap-40 text-center">
        <h1>{"What's your emoji today?"}</h1>

        <div>
          <button onClick={handleReresh}>Click It</button>
          {data && data.htmlCode && (
            <div
              dangerouslySetInnerHTML={{ __html: data.htmlCode }}
              className="text-[6rem]"
            ></div>
          )}
        </div>

        {data && data.name && (
          <div
            dangerouslySetInnerHTML={{ __html: data.name }}
            className="text-[3rem]"
          ></div>
        )}
      </div>
    </div>
  );
}
