import React from 'react';
import TopHeader from '../components/TopHeader';
import CourseComponent1 from '../components/CourseComponent1';
import CourseComponent2 from '../components/CourseComponent2';
import CourseComponent3 from '../components/CourseComponent3';
import CourseComponent4 from '../components/CourseComponent4';

function Course() { 
  return (
    <div className="flex flex-col flex-1 overflow-hidden bg-gray-200">
      <TopHeader />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <CourseComponent1/>
          <CourseComponent2/>
          <CourseComponent3/>
          <CourseComponent4/>
        </div>
      </div>
    </div>
  );
}

export default Course;
