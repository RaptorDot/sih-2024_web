import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaMoneyBill, FaRegClock } from 'react-icons/fa';
export default function Home() {
  return (
    // <div className="mx-auto w-full max-w-7xl">
    //   <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
    //     <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
    //       <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
    //         <h2 className="text-4xl font-bold sm:text-5xl">
    //           Save Water!!
    //           <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
    //         </h2>

    //         <Link
    //           className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
    //           to="/"
    //         >
    //           <svg
    //             fill="white"
    //             width="24"
    //             height="24"
    //             // xmlns="http://www.w3.org/2000/svg"
    //             fillRule="evenodd"
    //             clipRule="evenodd"
    //           >
    //             <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
    //           </svg>
    //           &nbsp; Download now
    //         </Link>
    //       </div>
    //     </div>

    //     <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
    //       <img
    //         className="min-w-56 w-96"
    //         src="https://images.unsplash.com/photo-1675526985295-79f5210563f2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="image1"
    //       />
    //     </div>
    //   </aside>
    //     <p>hello</p>
    //   <div className="grid  place-items-center sm:mt-20">
    //     <img
    //       className="sm:w-96 w-48"
    //       src="https://images.unsplash.com/photo-1585823557053-c4c84b972abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //       alt="image2"
    //     />
    //   </div>

    //   <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
    //     Lorem Ipsum Yojo
    //   </h1>
    // </div>
    <div className="min-h-screen bg-gray-100">
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
