import React from "react";

export default function Footer() {
  return (
    <footer className="relative bottom-0 flex flex-col justify-center items-center text-white mt-12 bg-black">
      <header className="w-full h-28 flex justify-center items-center text-3xl tracking-widest font-medium font-copper">
        <span>CICERO</span>
      </header>
      <div
        className="w-full flex justify-center text-sm tracking-widest mt-8 leading-10 h-60"
        style={{
          borderBottom: "1px solid gray",
        }}
      >
        <div className="text-infooter flex justify-between w-3/6">
          <div className="flex flex-col">
            <p className="font-medium font-copper">DISCOVER CICERO</p>
            <span className="font-thin">ABOUT US</span>
            <span className="font-thin">STORE LOCATION</span>
          </div>
          <div className="flex flex-col">
            <p className="font-medium font-copper">CUSTOMER SERVICE</p>
            <span className="font-thin">CONTACT US</span>
            <span className="font-thin">TERMS OF USE</span>
            <span className="font-thin">PRIVACY POLICY</span>
            <span className="font-thin">FAQS</span>
          </div>
          <div className="flex flex-col">
            <p className="font-medium font-copper">FOLLOW US</p>
            <a href="https://instagram.com/">
              <span className="font-thin">INSTAGRAM</span>
            </a>
            <a href="https://facebook.com/">
              <span className="font-thin">FACEBOOK</span>
            </a>
            <a href="https://line.me/th/">
              <span className="font-thin">LINE</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex m-3 text-sm font-copper">
        © 2023 CICERO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
