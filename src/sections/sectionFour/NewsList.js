import React, { useState } from "react";
import BorderSvg from "../../components/BorderSvg";
import newsData from "../../database/newsData";
import CursorEffect from "../../components/CursorEffect";
import "./news.scss";
import { motion } from "framer-motion";
import { slideUp } from "../../framerMotion/motionValues";

function NewsList() {
  const [effect] = useState(true);
  return (
    <section>
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        className="m-1 p-1 display-f h-auto flex-r flex-w-w justify-c-c"
      >
        {newsData.map((news) => {
          const { id, image, header, date, icon, info, iconName } = news;
          return (
            <motion.div
              variants={slideUp}
              className="news-card m-3 p-2 w-3 overflow-h position-r color-grey font-f-secondary"
              key={id}
            >
              <BorderSvg />
              {news.image ? (
                <div className="h-full position-r overflow-h index-1 m-3 w-auto">
                  <img
                    src={image}
                    className="w-full main-poster h-auto"
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
              <div className="news-info position-r index-1">
                <h5 className="mr-3 ml-3 mt-3 text-t-up letter-s-sm">
                  {header}
                </h5>
                {date ? (
                  <h3 className="pt-3 pb-2 pl-3 pr-3 color-white line-h-30 font-f-primary font-s-md">
                    {date}
                  </h3>
                ) : (
                  ""
                )}
                <p className="p-3 line-h-30">{info}</p>
              </div>
              {news.icon && news.iconName ? (
                <div className="m-3 position-r index-1 display-f flex-d-row align-i-c justify-c-fs">
                  <img
                    className="w-60 h-60 border-r-full"
                    src={icon}
                    alt="nerd"
                  />
                  <h5 className="color-white font-f-primary ml-3">
                    {iconName}
                  </h5>
                </div>
              ) : (
                ""
              )}
              {effect && <CursorEffect />}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default NewsList;
