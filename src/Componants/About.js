import React from 'react';

const About = () => {
    return (
      <div className="p-4 bg-gradient-to-b from-sky-200 to-blue-400">
        <div>
          <h1 className="text-3xl font-semibold my-3">About Us</h1>
          <p className="text-justify w-[75%] mx-auto p-5 border-2 rounded-md my-3">
            At SSS Hospital, we understand that seeking medical care can be a
            stressful and overwhelming experience. That's why we strive to
            create a warm, welcoming environment where patients and their
            families feel comfortable and supported.<br></br>Our
            state-of-the-art facility is equipped with the latest technology and
            staffed by highly trained medical professionals who are dedicated to
            providing personalized, compassionate care to every patient.
            <br></br>We offer a wide range of medical services, including
            diagnostic imaging, laboratory testing, surgery, and rehabilitation.
            Our team of physicians and specialists work together to develop
            comprehensive treatment plans tailored to each patient's individual
            needs.<br></br>As a community hospital, we are committed to
            improving the health and wellbeing of the people we serve. We
            participate in a variety of community outreach programs and
            initiatives aimed at promoting health and wellness throughout the
            region.
            <br></br>Thank you for choosing SSS Hospital for your healthcare
            needs. We look forward to serving you and your family with the
            highest quality of care.
          </p>
        </div>
        {/* Goals and targets */}
        <div className="my-3 text-left w-[75%] mx-auto p-10 border-b-2 border-black">
          <p className="text-lg font-semibold">
            Goal: To improve patient satisfaction and experience Targets:
          </p>
          <ul className="list-disc w-[95%] mx-auto">
            <li>
              Increase the overall patient satisfaction score on surveys by 10%
              within the next year
            </li>
            <li>
              Reduce patient wait times by 20% in the emergency department by
              the end of the quarter
            </li>
            <li>
              Implement patient-centered communication training for all staff by
              the end of the year
            </li>
          </ul>
        </div>
        <div className="my-3 text-left w-[75%] mx-auto p-10 border-b-2 border-black">
          <p className="text-lg font-semibold">
            Goal: To provide high-quality care and achieve clinical excellence
            Targets:
          </p>
          <ul className="list-disc w-[95%] mx-auto">
            <li>
              Achieve a 90% or higher rate of compliance with evidence-based
              clinical guidelines for common conditions such as heart failure
              and pneumonia
            </li>
            <li>
              Reduce the hospital-acquired infection rate by 30% by the end of
              the year
            </li>
            <li>
              Increase the percentage of patients who receive appropriate
              preventative care screenings by 15% within the next 6 months
            </li>
          </ul>
        </div>
      </div>
    );
};

export default About;