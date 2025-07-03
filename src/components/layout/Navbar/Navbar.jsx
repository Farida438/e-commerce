import React, { useState } from "react";
import { assets } from "../../../assets/assets.jsx";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

// Icons
import { FaShoppingBag as Cart } from "react-icons/fa";
import { IoSunnyOutline as Theme } from "react-icons/io5";
import { FaRegUser as User } from "react-icons/fa";
import { BiWorld as Lang } from "react-icons/bi";
import { FaRegHeart as Wishlist } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.container}>
      {/* Top Strip */}
      <div className={styles.boxes}>
        <div className={styles.box}>
          Discover exquisite craftsmanship and timeless elegance in every piece
          of our curated collection, With Love, Catbird Team
        </div>
      </div>

      {/* Main Navbar */}
      <div className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={assets.catbird} alt="Logo" />
        </div>

        {/* Hamburger (mobile only) */}
        {!menuOpen && (
          <div className={styles.hamburger} onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
        )}

        {/* Desktop NavLinks */}
        <div className={styles.pages}>
          <NavLink to="/home" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Shop</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>About</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Blog</NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>FAQ</NavLink>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className={styles.pagesOpen}>
            <div className={styles.closeBtn} onClick={closeMenu}>
              <IoMdClose />
            </div>
            <NavLink to="/home" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
            <NavLink to="/shop" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Shop</NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>About</NavLink>
            <NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Blog</NavLink>
            <NavLink to="/faq" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>FAQ</NavLink>
          </div>
        )}

        {/* Right Icons */}
        <div className={styles.icons}>
          <NavLink to="/wishlist" className={styles.iconhe}>
            <Wishlist />
          </NavLink>
          <NavLink to="/cart" className={styles.icon}>
            <Cart />
          </NavLink>
          <NavLink to="#" className={styles.icon}>
            <Theme />
          </NavLink>
          <NavLink to="#" className={styles.icon}>
            <Lang />
          </NavLink>
          <NavLink to="#" className={styles.icon}>
            <User />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
