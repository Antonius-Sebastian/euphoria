import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";

import "./styles.css";

import { footerLinks } from "./constant/index.js";
import images from "./assets/images";
import Icons from "./assets/icons";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Delivery from "./pages/Delivery.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import OrderConfirmed from "./pages/OrderConfirmed.jsx";
import Error_404 from "./pages/Error_404.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/order-confirmed" element={<OrderConfirmed />} />
        <Route path="/*" element={<Error_404 />} />
      </Routes>
      <footer className="bg-grayDark2 w-full pt-[60px] pb-10">
        <div className="mx-auto w-4/5 max-w-7xl">
          <div className="flex flex-wrap justify-between gap-10 md:gap-20">
            {footerLinks.map((footerLink, id) => (
              <div key={id} className="flex flex-col gap-4">
                <h3 className="font-causten text-[28px] font-semibold text-white">
                  {footerLink.title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {footerLink.labels.map((label, id) => (
                    <li key={id} className="font-causten text-secondary">
                      <a href="#">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-b-grayLight mt-10 flex flex-wrap items-end justify-between gap-5 border-b pb-10">
            <div className="flex gap-2.5">
              <div className="rounded-[10px] bg-white px-[14px] py-2.5">
                <Icons.Facebook />
              </div>
              <div className="rounded-[10px] bg-white px-[14px] py-2.5">
                <Icons.Instagram />
              </div>
              <div className="rounded-[10px] bg-white px-[14px] py-2.5">
                <Icons.Twitter />
              </div>
              <div className="rounded-[10px] bg-white px-[14px] py-2.5">
                <Icons.Linkedin />
              </div>
            </div>
            <div className="mr-6 flex flex-col gap-6">
              <h3 className="font-causten text-[28px] font-semibold text-white">
                Download the App
              </h3>
              <div className="flex flex-wrap justify-between gap-[22px]">
                <img
                  src={images.downloadGooglePlay}
                  className="object-contain"
                  alt=""
                />
                <img
                  src={images.downloadAppStore}
                  className="object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>

          <p className="font-causten pt-8 text-center text-base text-white">
            Copyright © 2025. Created by Antonius Sebastian. All rights
            reserved.
          </p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
