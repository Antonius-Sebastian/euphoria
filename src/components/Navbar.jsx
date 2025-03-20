import { useState } from "react";
import Icons from "../assets/icons"; // Import your icons
import images from "../assets/images"; // Import your images

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b-grayLight w-full border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8">
        {/* Logo */}
        <div className="h-11 w-23">
          <img src={images.logo} alt="Logo" className="object-contain" />
        </div>

        {/* Hamburger m (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-grayDark2 md:hidden"
        >
          {isOpen ? (
            <Icons.CloseCross className="h-8 w-8" />
          ) : (
            <img src={Icons.menu} alt="" className="h-8 w-8" />
          )}
        </button>

        {/* Desktop m */}
        <ul className="font-causten hidden items-center gap-10 md:flex">
          <li className="text-grayDark2 text-[22px] font-bold">
            <a href="#">Home</a>
          </li>
          <li className="text-grayDark text-[22px] font-medium">
            <a href="#">Shop</a>
          </li>
        </ul>

        {/* Search & Icons */}
        <div className="hidden items-center gap-6 md:flex">
          <form className="bg-secondary flex items-center gap-3 px-5 py-3">
            <Icons.Search className="h-5 w-5" />
            <input
              type="text"
              className="placeholder:text-grayDark text-grayDark2 font-causten text-base outline-none"
              placeholder="Search"
            />
          </form>
          <div className="flex items-center gap-3">
            <a href="#" className="bg-secondary rounded-lg p-3">
              <Icons.Heart className="h-5 w-5" />
            </a>
            <a href="#" className="bg-secondary rounded-lg p-3">
              <Icons.User className="h-5 w-5" />
            </a>
            <a href="#" className="bg-secondary rounded-lg p-3">
              <Icons.ShoppingCart className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile m (Dropdown) */}
      <div
        className={`transition-all duration-300 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 bg-white py-4 shadow-md">
          <li className="text-grayDark2 text-[20px] font-bold">
            <a href="#">Home</a>
          </li>
          <li className="text-grayDark text-[20px] font-medium">
            <a href="#">Shop</a>
          </li>
          <li>
            <form className="bg-secondary flex items-center gap-3 px-5 py-3">
              <Icons.Search className="h-5 w-5" />
              <input
                type="text"
                className="placeholder:text-grayDark text-grayDark2 font-causten text-base outline-none"
                placeholder="Search"
              />
            </form>
          </li>
          <div className="flex gap-4">
            <a href="#" className="bg-secondary rounded-lg p-3">
              <Icons.Heart className="h-5 w-5" />
            </a>
            <a href="#" className="bg-secondary rounded-lg p-3">
              <Icons.User className="h-5 w-5" />
            </a>
            <a href="#" className="bg-secondary rounded-lg p-3">
              <Icons.ShoppingCart className="h-5 w-5" />
            </a>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
