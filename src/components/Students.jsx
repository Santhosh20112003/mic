import React from "react";
import ForeignStudents from "./student/ForeignStudents";
import IndianStudents from "./student/IndianStudents";
import Certifications from "./student/Certifications";
import { Helmet } from "react-helmet";

function Students() {
  return (
    <div>
      <Helmet>
        <title>
          Student Success Stories & Testimonials | MEC Education India
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Read inspiring success stories from foreign and Indian students who achieved their academic dreams through MEC Education's overseas consultancy services."
        />
        <link rel="canonical" href="http://mec.in/students" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Student Success Stories & Testimonials | MEC Education India"
        />
        <meta
          property="og:description"
          content="Read inspiring success stories from students who achieved their academic dreams through MEC Education."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <ForeignStudents />
      <IndianStudents />
      <Certifications />
    </div>
  );
}

export default Students;
