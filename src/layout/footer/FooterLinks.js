import React from "react";
import { FaDiscord, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BorderSvg from "../../components/BorderSvg";

function FooterLinks() {
  return (
    <div className="w-full p-2 color-white font-f-primary h-full display-f flex-d-r justify-c-fs">
      <div className="links-container w-full responsive-column-c">
        <article className="w-full m-1">
          <h5 className="color-white primary-line p-1 font-f-secondary text-t-up ">
            discover moria
          </h5>
          <div className="color-grey mt-3 text-t-cap font-f-primary">
            <h5 className="p-2 white-hover cursor-p ">news & updates</h5>
            <h5 className="p-2 white-hover cursor-p ">community</h5>
            <h5 className="p-2 white-hover cursor-p ">media</h5>
            <h5 className="p-2 white-hover cursor-p ">support</h5>
            <h5 className="p-2 white-hover cursor-p ">contact us</h5>
          </div>
        </article>
        <article className="w-full m-1">
          <h5 className="color-white primary-line p-1 font-f-secondary text-t-up ">
            buy know
          </h5>
          <div className="color-grey mt-3 text-t-cap font-f-primary">
            <h5 className="p-2 white-hover cursor-p">epic games store</h5>
          </div>
        </article>
        <article className="w-full m-1">
          <h5 className="color-white primary-line p-1 font-f-secondary text-t-up ">
            discover moria
          </h5>
          <div className="color-grey row-sa mt-3 text-t-cap font-f-primary">
            <div className="primary-button position-r p-2 m-2">
              <BorderSvg />
              <FaXTwitter className="font-s-md" />
            </div>
            <div className="primary-button position-r p-2 m-2">
              <BorderSvg />
              <FaTiktok className="font-s-md" />
            </div>
            <div className="primary-button position-r p-2 m-2">
              <BorderSvg />
              <FaDiscord className="font-s-md" />
            </div>
            <div className="primary-button position-r p-2 m-2">
              <BorderSvg />
              <FaYoutube className="font-s-md" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FooterLinks;
