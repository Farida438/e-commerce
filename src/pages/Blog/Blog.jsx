import React from "react";
import styles from "./Blog.module.css";
import { assets } from "../../assets/assets.jsx";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Story Behind Our Signature Ring",
      image: assets.blog1,
      description: "Discover the inspiration, process, and love behind our bestselling handcrafted ring design.",
      date: "June 28, 2025"
    },
    {
      title: "Jewelry Care 101: Keep It Sparkling",
      image: assets.blog2,
      description: "Tips and tricks on how to clean and maintain your jewelry for long-lasting brilliance.",
      date: "June 12, 2025"
    },
    {
      title: "Behind the Scenes: A Day in Our Workshop",
      image: assets.blog3,
      description: "Take a peek into how we bring elegance to life through craftsmanship and precision.",
      date: "May 24, 2025"
    }
  ];

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Our Blog</h1>
      <div className={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <div className={styles.blogCard} key={index}>
            <img src={post.image} alt={post.title} className={styles.blogImage} />
            <div className={styles.blogContent}>
              <h2 className={styles.blogPostTitle}>{post.title}</h2>
              <p className={styles.blogDate}>{post.date}</p>
              <p className={styles.blogDescription}>{post.description}</p>
              <button className={styles.readMore}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
