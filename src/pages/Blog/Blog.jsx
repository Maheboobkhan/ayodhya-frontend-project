// src/BlogComponent.js

import React from 'react';
import './Blog.css';
import jsonData from './data.json'; // Import JSON data
import Navbar from '../../components/Navbar/Navbar';

const Blog = () => {
  const { blogs } = jsonData;

  return (
    <div>
      <Navbar />
      <div className="headding">
        <h1>Ayodhya Ram Mandir Blog</h1>
      </div>
      <div className="blog-page">
        {blogs.map((blog, index) => (
          <div className="blog" key={index}>
            <section className="blog-box">
              <div className="image-box">
                <img className="image" src={blog.image} alt={`blog-${index + 1}`} />
              </div>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <button className="blog-button">Learn More</button>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
