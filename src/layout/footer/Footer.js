import React from "react";
import FooterLinks from "./FooterLinks";
import Sign from "./Sign";
import pegi from "../../assets/pegi.jpg";
import violence from "../../assets/violence.png";
import teen from "../../assets/teen.webp";

function Footer() {
  return (
    <footer className="column-c w-full p-2 column-c h-auto">
      <div className="responsive-column-c w-full">
        <FooterLinks />
        <Sign />
      </div>
      <div className="responsive-column-c m-2 p-2">
        <div className="color-grey w-full mw-8 column-c font-f-secondary">
          <div className="row-sa text-t-cap mw-500 ">
            <h5 className="mr-2 white-hover cursor-p color-white">
              privary prolicy
            </h5>
            <h5 className="mr-2 white-hover cursor-p color-white">
              terms of service
            </h5>
            <h5 className="mr-2 white-hover cursor-p color-white">
              end user license agreements
            </h5>
          </div>
          <p className="mw-800 p-2 font-s-xs line-h-20 mt-2">
            ©2023 Middle-earth Enterprises. All rights reserved. "Moria",
            "Middle-Earth" and "The Lord of the Rings" and the names of the
            characters, events, items, and places therein are trademarks or
            registered trademarks of Middle-earth Enterprises, LLC under license
            to Open Door Entertainment, LLC dba North Beach Games. ©2023 Free
            Range Games. <br />
            All rights reserved. Free Range Games and the Free Range Games logo
            are trademarks or service marks of Free Range Games. ©2023 North
            Beach Games and associated logos and names are registered trademarks
            of Open Door Entertainment, LLC. All rights reserved.
          </p>
        </div>
        <div className="w-full column-c align-a-c color-white mw-300">
          <div className="row-sa w-300">
            <img className="h-50 w-auto" src={pegi} alt="pegi" />
            <img className="h-50 w-auto" src={violence} alt="violence" />
            <img className="h-50 w-auto" src={teen} alt="teen" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
