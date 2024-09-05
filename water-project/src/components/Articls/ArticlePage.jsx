import React from "react";
import useData from "../Contexts/data";
import { useLocation } from "react-router-dom";
export default function ArticlePage() {
  // console.log(id)
  const location = useLocation()
  const prop = location.state.data;
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
  
  console.log(prop)
  
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-200 shadow-lg rounded-lg">
    <header className="mb-8">
      <img src={prop.image} alt={prop.title} className="w-full h-auto rounded-lg shadow-lg mb-6" />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
        {prop.title}
      </h1>
      <p className="text-gray-700 text-lg">
        <span className="font-semibold">By:</span> {author} | <span className="font-semibold">Date:</span> {date}
      </p>
    </header>
    <article className="prose lg:prose-xl text-gray-800 leading-relaxed">
      <div dangerouslySetInnerHTML={{ __html: prop.info }} />
    </article>
    <footer className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-600">
      <p>&copy; 2024 React News</p>
    </footer>
  </div>
  
  );
}
