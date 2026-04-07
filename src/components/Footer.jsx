import React from "react";
import { APP_STORE_URL, PLAY_STORE_URL } from "../utils/app.constants";

const Footer = () => {
  return (
    <div className="bg-black text-white p-20 md:px-36 flex flex-col">
      <span className="text-3xl font-medium ">Zomato</span>
      <span className="mt-8 hover:underline cursor-pointer transform duration-300 ease-in-out">
        Visit The Help Center
      </span>

      <div className="flex justify-between gap-2 mt-8 flex-wrap ">
        <div>
          <span className="text-lg font-medium">Compony</span>
          <div className="flex flex-col gap-3 mt-2 ">
            <span className="text-sm">About Us</span>
            <span className="text-sm">our offerings</span>
            <span className="text-sm">Newsroom</span>
            <span className="text-sm">Investors</span>
          </div>
        </div>

        <div>
          <span className="text-lg font-medium">Quick Links</span>
          <div className="flex flex-col gap-3 mt-2 ">
            <span className="text-sm">Home</span>
            <span className="text-sm">Shop</span>
            <span className="text-sm">Best Sellers</span>
            <span className="text-sm">Deals</span>
          </div>
        </div>

        <div>
          <span className="text-lg font-medium">Customer Support</span>
          <div className="flex flex-col gap-3 mt-2 ">
            <span className="text-sm">FAQs</span>
            <span className="text-sm">Shipping & Delivery</span>
            <span className="text-sm">Return&Refund</span>
            <span className="text-sm">Privacy Policy</span>
          </div>
        </div>

        <div>
          <span className="text-lg font-medium">Follow Us</span>
          <div className="flex flex-col gap-3 mt-2 ">
            <span className="text-sm">Instagram</span>
            <span className="text-sm">Facebook</span>
            <span className="text-sm">Twitter</span>
            <span className="text-sm">LinkedIn</span>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center gap-4 mt-10">
        <img src={PLAY_STORE_URL} alt="" className="w-[188px] h-[56px] " />
        <img src={APP_STORE_URL} alt="" className="w-[188px] h-[56px] " />
      </div>
      <hr className="mt-5 text-gray-500"></hr>
      <span className="text-gray-400 text-xs mt-4">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners 2008-2026 © Zomato™ Ltd. All
        rights reserved.
      </span>
    </div>
  );
};

export default Footer;
