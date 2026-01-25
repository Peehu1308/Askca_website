import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
  const recieveremail=import.meta.env.VITE_RECIEVER_EMAIL;

  const [form,setform]=useState({
    name:"",
    email:"",
    phone:"",
    message:"",
  });

  const [loading,setloading]=useState(false);
  const [status,setstatus]=useState("");


  const handleChange = (e) => {
  setform({ ...form, [e.target.name]: e.target.value });
};

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setloading(true);
    setstatus("");

    try{
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email:recieveremail,

          from_name:form.name,
          from_email:form.email,
          phone:form.phone,
          message:form.message,
          

        },
        publicKey
      );

      setstatus("Message Sent");
      setform({
        name:"",
        email:"",
        phone:"",
        message:"",
      });
    }
    catch(error){
      console.error(error);
      setstatus("Message not send.Try again later.");
    }
    setloading(false);
  }

  return (
    <div>
      <div className="w-full bg-white px-6 md:px-16 py-16">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-[#101010] mb-4">
          Contact Us
        </h1>
        <p className="text-[#182729] max-w-2xl mx-auto">
          We’re here to help. Reach out to us for professional advisory,
          compliance, or consultation services.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-7xl mx-auto">

        {/* Left Section */}
        <div className="space-y-8">

          {/* Contact Info */}
          <div className="space-y-6">
            <InfoItem
              icon={<MapPin size={22} />}
              title="ASKCA Financial Consultants"
              text="Main Rd, Hanuman Vihar, Sector 49, Noida, Uttar Pradesh-201304"
            />

            <InfoItem
              icon={<Phone size={22} />}
              title="Phone"
              text="+91 81304 14919"
            />

            <InfoItem
              icon={<Mail size={22} />}
              title="Email"
              text="Office@askcafinance.com"
            />

            <InfoItem
              icon={<Clock size={22} />}
              title="Business Hours"
              text="Monday – Friday: 9:30 AM – 6:30 PM"
            />
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-md border">
            <iframe
  title="ASKCA Office Location"
  src="https://www.google.com/maps?q=28.558559,77.379408&z=17&output=embed"
  className="w-full h-[300px] rounded-xl border shadow-md"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="border rounded-xl p-8 shadow-sm max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-[#101010]">
        Send Us a Message
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2"
          required
        />

        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2"
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded-md px-4 py-2"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#F49426] text-white px-6 py-3 rounded-md
                     font-semibold w-full hover:opacity-90 transition"
        >
          {loading ? "Sending..." : "Submit Message"}
        </button>
      </form>

      {status && (
        <p className="mt-4 text-sm text-center">
          {status}
        </p>
      )}
    </div>
      </div>
      
    </div>


    </div>
  );
};

const InfoItem = ({ icon, title, text }) => (
  <div className="flex gap-4 items-start">
    <div className="text-[#F49426] mt-1">{icon}</div>
    <div>
      <h3 className="font-semibold text-[#101010]">{title}</h3>
      <p className="text-[#182729] text-sm">{text}</p>
    </div>
  </div>
);

const Input = ({ label, placeholder }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F49426]"
    />
  </div>
);

export default Contact;
