import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaMoneyBill, FaRegClock } from 'react-icons/fa';
export default function Home() {
  return (
   
    <div className="min-h-screen bg-gray-100">
      <br/>
    {/* Hero Section */}
    <section className="relative bg-blue-700 text-white py-32 text-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-blue-700 opacity-50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Save Water, Save Life
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Join us in our mission to conserve water and make a lasting impact on our planet.
        </p>
        <a
          href="#learn-more"
          className="bg-white text-blue-700 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Learn More
        </a>
      </div>
    </section>

    {/* Key Information Section */}
    <section id="learn-more" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          Why Conserve Water?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:bg-gray-200 transition">
            <FaLeaf className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Protect the Environment</h3>
            <p>
              Conserving water helps protect ecosystems and maintains natural habitats.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:bg-gray-200 transition">
            <FaMoneyBill className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Save Money</h3>
            <p>
              Reducing water usage lowers utility bills and saves money over time.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:bg-gray-200 transition">
            <FaRegClock className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Ensure Future Supply</h3>
            <p>
              Every drop counts! Conserving water ensures future generations have the resources they need.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-blue-200 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
          Get Involved Today
        </h2>
        <p className="text-lg mb-8">
          Ready to make a difference? Discover easy ways to start saving water now.
        </p>
        <a
          href="#get-started"
          className="bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Get Started
        </a>
      </div>
    </section>

    {/* Footer Section */}
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2024 Water Save Awareness. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}
