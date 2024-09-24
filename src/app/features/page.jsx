"use client";
import React from "react";
import Link from "next/link";
import { BookOpen, ClipboardList, Users, Calendar, Monitor, MessageCircle } from "lucide-react"; // Import icons

const features = () => {
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
        <h1 className="text-3xl font-bold text-center mb-8">Student Features</h1>
        
        <div className="flex flex-col md:flex-row justify-between">
          {/* Student Management Feature */}
          <div className="md:w-1/2 border-box p-4 border-2 border-white rounded-lg mb-4 md:mb-0 md:mr-4">
            {/* Student Management Icon */}
            <ClipboardList className="h-10 w-10 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Student Management</h2>
            <p>
              Manage student profiles, personal information, and academic records. Track enrollment, attendance, and progress efficiently.
            </p>
          </div>

          {/* Interactive Groups Feature */}
          <div className="md:w-1/2 border-box p-4 border-2 border-white rounded-lg">
            {/* Group Collaboration Icon */}
            <Users className="h-10 w-10 text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Interactive Groups</h2>
            <p>
              Form study groups, collaborate with peers, and engage in virtual discussions using built-in tools for file sharing and video conferencing.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-8">
          {/* Calendar and Scheduling Feature */}
          <div className="md:w-1/2 border-box p-4 border-2 border-white rounded-lg mb-4 md:mb-0 md:mr-4">
            {/* Calendar Icon */}
            <Calendar className="h-10 w-10 text-yellow-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Calendar & Scheduling</h2>
            <p>
              Stay organized with shared calendars that help you track class schedules, assignments, exams, and group activities.
            </p>
          </div>

          {/* Virtual Classrooms Feature */}
          <div className="md:w-1/2 border-box p-4 border-2 border-white rounded-lg">
            {/* Virtual Classroom Icon */}
            <Monitor className="h-10 w-10 text-red-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Virtual Classrooms</h2>
            <p>
              Attend live classes, participate in interactive sessions, and review recorded lectures. Enhance your learning with virtual labs and tools.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-8">
          {/* Messaging Feature */}
          <div className="md:w-1/2 border-box p-4 border-2 border-white rounded-lg">
            {/* Messaging Icon */}
            <MessageCircle className="h-10 w-10 text-purple-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Instant Messaging</h2>
            <p>
              Stay connected with real-time messaging for students, teachers, and study groups. Share updates, questions, and files instantly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default features;
