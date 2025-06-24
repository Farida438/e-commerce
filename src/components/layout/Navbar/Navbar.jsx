import React from "react";
import { assets } from "../../../assets/assets.jsx";
import styles from "./Navbar.module.css";
import {
  Cart,
  Theme,
  User,
  Lang,
  Wishlist,
} from "../../../assets/icons/Cart.jsx";

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
          <a href="">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
        </div>

        <div className={styles.icons}>
          <a href="/wishlist" className={styles.icon}>
            <Wishlist />
          </a>

          <a href="/cart" className={styles.icon}>
            <Cart />
          </a>

          <a href="#" className={styles.icon}>
            <Theme />
          </a>

          <a href="#" className={styles.icon}>
            <Lang />
          </a>

          <a href="#" className={styles.icon}>
            <User />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;