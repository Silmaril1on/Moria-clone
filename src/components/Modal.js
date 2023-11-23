import React, { useState } from "react";
import BorderSvg from "./BorderSvg";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { PopUp } from "../framerMotion/motionValues";

function Modal() {
  const [modal, setModal] = useState(true);

  return (
    <>
      {modal ? (
        <motion.div
          variants={PopUp}
          initial="hidden"
          animate="visible"
          className="color-white font-f-primary h-300 w-400 position-f column-se index-5 bg-black right-20 bottom-20"
        >
          <BorderSvg />
          <div className="ml-4 h-50 w-60">
            <button
              className="primary-button p-1"
              onClick={() => setModal(false)}
            >
              <BorderSvg />
              <IoMdClose className="font-s-md" />
            </button>
          </div>
          <div className="pl-4 pr-4">
            <h3 className="text-t-cap letter-s-xs mb-2">cookie settings</h3>
            <p className="color-grey font-f-secondary">
              By clicking “Accept All Cookies”, you agree to the storing of
              cookies on your device to enhance site navigation, analyze site
              usage and assist in our marketing efforts.
            </p>
          </div>
          <div className="row-se mt-2 row-c align-i-c">
            <button className="primary-button p-2 font-s-sm">
              <BorderSvg />
              accept all cookies
            </button>
            <h3 className="h-40 display-f align-i-c text-t-cap">
              cookie settings
            </h3>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

export default Modal;
