import React from "react";
import blogPosts from "../data/blogData";

const Blog = () => {
  return (
    <div className="max-w-3xl p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Blog posts</h1>
      {blogPosts.map((post) => (
        <article key={post.id} className="p-4 mb-6 border rounded-lg shadow-sm">
          <header>
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 mb-6 text-sm text-gray-500">{post.date}</p>
          </header>
          <img src={post.image} alt={post.title} className="w-full h-auto" />
          <p className="mt-6">{post.content}</p>
        </article>
      ))}
    </div>
  );
};

export default Blog;