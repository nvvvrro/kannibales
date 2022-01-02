import React from "react";
import Image from "next/image";
import Kannibales from "../../images/misc/kannibales.svg";
import { FooterBottom } from "./FooterBottom";
export const Footer = () => {
  return (
    <footer className="text-tx-main body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-tx-dark">
            <Image
              src={Kannibales}
              width={50}
              height={50}
              alt="Kannibales"
            ></Image>
            <span className="ml-3 text-xl text-tx-title">Kannibales</span>
          </a>
          <p className="mt-2 text-sm text-tx-main">
            Mi tiendita de cosmetica erotica y consejos para tu cuerpo y
            sexualidad
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-tx-subtitle tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-tx-main hover:text-tx-dark">First Link</a>
              </li>
              <li>
                <a className="text-tx-main hover:text-tx-dark">Second Link</a>
              </li>
              <li>
                <a className="text-tx-main hover:text-tx-dark">Third Link</a>
              </li>
              <li>
                <a className="text-tx-main hover:text-tx-dark">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-tx-subtitle tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-tx-main hover:text-tx-dark">First Link</a>
              </li>
              <li>
                <a className="text-tx-main hover:text-tx-dark">Second Link</a>
              </li>
              <li>
                <a className="text-tx-main hover:text-tx-dark">Third Link</a>
              </li>
              <li>
                <a className="text-tx-main hover:text-tx-dark">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-tx-subtitle tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-tx-main hover:text-tx-dark">First Link</a>
              </li>
              <li>
                <a className="text-tx-main hover:text-tx-dark">Second Link</a>
              </li>
              <li>
                <a className="text-tx-main hover:text-tx-dark">Third Link</a>
              </li>
              <li>
                <a className="text-tx-main hover:text-tx-dark">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <FooterBottom/>
    </footer>
  );
};
