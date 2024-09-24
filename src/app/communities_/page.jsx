"use client"; // Ensure this component is rendered on the client side
import React, { useEffect } from "react";
import Link from "next/link";
import { BookOpen, Users, Calendar, MessageCircle } from "lucide-react"; // Import icons

const Communities = () => {
  useEffect(() => {
    // Disqus configuration
    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = 'communities'; // Unique identifier for the page
    };

    // Load the Disqus script
    const d = document;
    const s = d.createElement('script');
    s.src = 'https://campusLink.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/communities">
            Communities
          </Link>
        </nav>
      </header>
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Communities</h1>
          {/* This is where Disqus will embed the comments section */}
          <div id="disqus_thread"></div>
        </div>
      </main>
      
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 Campus Link. All rights reserved. Developed by Campus Link</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Communities;
