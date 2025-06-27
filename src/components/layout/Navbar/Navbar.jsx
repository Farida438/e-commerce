import React from "react";
import { assets } from "../../../assets/assets.jsx";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
// Replaced icon imports with react-icons
import { FaShoppingBag as Cart } from "react-icons/fa";
import { IoSunnyOutline as Theme } from "react-icons/io5";
import { FaRegUser as User } from "react-icons/fa";
import { BiWorld as Lang } from "react-icons/bi";
import { FaRegHeart as Wishlist } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxes}>
        <div className={styles.box}>
          Discover exquisite craftsmanship and timeless elegance in every piece
          of our curated collection, With Love, Catbird Team
        </div>
      </div>

      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={assets.catbird} alt="Logo" />
        </div>

        <div className={styles.pages}>
          <NavLink 
            to="/home" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/shop" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Shop
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Contact
          </NavLink>
          <NavLink 
            to="/faq" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            FAQ
          </NavLink>
        </div>

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