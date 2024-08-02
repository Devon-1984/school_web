import React from "react";
import Image from "next/image";

export default function Heading({ data }) {
  const teachersData = data.faculty;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-12">
        {teachersData.map((teacher, index) => (
          <div className="bg-white rounded-lg overflow-hidden" key={index}>
            <img
              src={teacher.teachImg}
              alt={teacher.ourTeacher}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-primary-900">
                {teacher.ourTeacher}
              </h3>
              <p className="text-primary-900">{teacher.role}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
