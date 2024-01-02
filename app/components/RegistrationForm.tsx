"use client";
import { useState } from "react";
import Button from "./Button";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    usn: "",
    college: "",
    degree: "",
    branch: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here
    console.log("Form Data Submitted:", formData);
    // You can send the data to your server or perform any other actions
  };

  return (
    <div>
      <div className="h-[15px]"></div>
      <h1 className="text-white border-2 border-emerald-500 w-max p-2 mx-auto font-semibold rounded-md ">
        Submit to continue.
      </h1>
      <div className="w-3/4 sm:1/2 md:1/2 lg:1/2 xl:1/2 2xl:1/3 mx-auto mt-4 text-white">
        <form className="flex flex-col font-medium" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />
          <label htmlFor="mobile">Phone:</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />

          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="rounded-md h-8 mb-4 text-black"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label htmlFor="usn">University Number:</label>
          <input
            type="text"
            name="usn"
            id="usn"
            value={formData.usn}
            onChange={handleChange}
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />
          <label htmlFor="college">College:</label>
          <input
            type="text"
            name="college"
            id="college"
            value={formData.college}
            onChange={handleChange}
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />
          <label htmlFor="degree">Course:</label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={formData.degree}
            onChange={handleChange}
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />
          <label htmlFor="branch">Branch:</label>
          <input
            type="text"
            name="branch"
            id="branch"
            value={formData.branch}
            onChange={handleChange}
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />
          <label htmlFor="address">Address:</label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows={4}
            className="rounded-md mb-4 text-black p-1"
          />

          <div className="flex justify-center text-white w-max border-2 mx-auto mt-2">
            <Button text={"Submit"} bg="black" />
          </div>
        </form>
        <div className="h-10"></div>
      </div>
    </div>
  );
}
