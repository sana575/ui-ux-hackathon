    "use client";

    import React, { useState } from "react";
    import Image from "next/image";
    import Footer2 from "../components/Footer2";
    import BreadCrumb from "../components/BreadCrumb";

    const ContactPage = () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [subject, setSubject] = useState("");
      const [message, setMessage] = useState("");

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formData = {
          name,
          email,
          subject,
          message,
          timestamp: new Date().toISOString()
        };

        const existingData = JSON.parse(localStorage.getItem("contactFormData") || "[]");
        const newData = [...existingData, formData];
        localStorage.setItem("contactFormData", JSON.stringify(newData));

        alert("Thank you for your message! We'll get back to you soon.");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      };

      return (
        <section>
          <div>
            <BreadCrumb title="Contact" url="contact" />
          </div>
          <div className="flex flex-col items-center justify-center px-4 mt-10 lg:mt-20">
            <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-center">
              Get In Touch With Us
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#9F9F9F] mt-4 text-center max-w-[90%] lg:max-w-[644px]">
              For More Information About Our Product & Services. Please Feel Free To
              Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-between mt-12 px-4 lg:px-16 gap-10">
            <div className="flex flex-col gap-8 lg:w-1/2">
              {[
                {
                  img: "/images/location.png",
                  title: "Address",
                  desc: "236 5th SE Avenue, New York NY10000, United States",
                },
                {
                  img: "/images/call.png",
                  title: "Phone",
                  desc: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789",
                },
                {
                  img: "/images/time.png",
                  title: "Working Time",
                  desc: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00",
                },
              ].map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Image
                    src={info.img}
                    alt={`${info.title}-icon`}
                    width={22}
                    height={28}
                  />
                  <div>
                    <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">
                      {info.title}
                    </h2>
                    <p className="text-[14px] sm:text-[16px] text-gray-700 whitespace-pre-line">
                      {info.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col lg:w-1/2 gap-6">
              <form onSubmit={handleSubmit}>
                {[
                  {
                    label: "Your Name",
                    value: name,
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
                    placeholder: "Enter your name"
                  },
                  {
                    label: "Email Address",
                    value: email,
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
                    placeholder: "Enter your email"
                  },
                  {
                    label: "Subject",
                    value: subject,
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value),
                    placeholder: "Enter subject (optional)"
                  },
                ].map((field, index) => (
                  <div key={index} className="flex flex-col">
                    <label className="text-[16px] font-semibold mb-2">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={field.placeholder}
                      className="border border-gray-300 rounded-md px-4 py-3 w-full text-[14px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
                    />
                  </div>
                ))}

                <div className="flex flex-col">
                  <label className="text-[16px] font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    className="border border-gray-300 rounded-md px-4 py-3 w-full text-[14px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none h-32 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full lg:w-[237px] h-[55px] bg-[#B88E2F] text-white rounded-md mt-4 flex items-center justify-center text-[16px] mb-10 font-semibold hover:bg-[#9a7827] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <Footer2 />
        </section>
      );
    };

    export default ContactPage;