import React from "react";
import './ArticlePage.css'
export default function ArticlePage({prop}) {
  const article = {
    title: "The Rise of React in Modern Web Development",
    author: "Jane Doe",
    date: "September 5, 2024",
    imageUrl: "https://via.placeholder.com/1200x400?text=React+Logo",
    content: `
      React has become one of the most popular libraries for building user interfaces,
      especially for single-page applications. Developed by Facebook, React allows developers
      to build complex UIs from small, reusable components. Its component-based architecture
      helps in creating a dynamic and responsive user experience.
      
      One of the key features of React is its virtual DOM. Unlike traditional DOM manipulation,
      React’s virtual DOM allows for efficient updates and rendering. When the state of a component
      changes, React updates the virtual DOM and then compares it with the previous version to
      determine the minimal number of changes required to update the real DOM. This process
      enhances performance and ensures a smooth user experience.
  
      Another significant feature is React’s use of hooks. Hooks provide a way to use state and other
      React features without writing a class. This functional approach simplifies component logic
      and makes it more reusable.
  
      As the web continues to evolve, React’s flexibility and performance make it a valuable tool
      for developers looking to build modern, high-quality applications.
    `,
  };
  const { title, author, date, imageUrl, content } = article;

  // console.log(prop)
  return (
  
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <header className="mb-6">
      <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600 text-sm">
        <strong>By:</strong> {author} | <strong>Date:</strong> {date}
      </p>
    </header>
    <article className="prose lg:prose-xl text-gray-800" dangerouslySetInnerHTML={{ __html: content }} />
    <footer className="mt-6 border-t pt-4 text-center text-gray-600">
      <p>&copy; 2024 React News</p>
    </footer>
  </div>
  );
}
