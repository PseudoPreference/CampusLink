"use client";
import React from "react";
import Link from "next/link";
import { BookOpen, MapPin, Phone } from "lucide-react"; // Import icons

const Contacts = () => {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/page.js">
          <BookOpen className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Campus Link</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/learn_more">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/communities_">
            Communities
          </Link>
        </nav>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="flex flex-col md:flex-row justify-between">
          {/* Our Address Section */}
          <div className="md:w-1/2 border-box p-4 border-2 border-white rounded-lg mb-4 md:mb-0 md:mr-4">
            {/* Address Icon */}
            <MapPin className="h-10 w-10 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
            <p>
              123 Main Street
              <br />
              City, State 12345
              <br />
              Country
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="md:w-1/2 border-box p-4 border-2 border-white rounded-lg">
            {/* Contact Icon */}
            <Phone className="h-10 w-10 text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <ul>
              <li>Phone: +123 456 7890</li>
              <li>Email: info@campuslink.com</li>
              <li>Website: www.campuslink.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
