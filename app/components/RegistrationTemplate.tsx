"use client";

import Button from "./Button";
import register from "../actions/register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
export default function RegistrationTemplate({ email }) {
  const router = useRouter();
  async function handleSubmit(formData) {
    try {
      const promise = toast.promise(
        register({
          name: formData.get("name"),
          mobile: formData.get("mobile"),
          gender: formData.get("gender"),
          college: formData.get("college"),
          degree: formData.get("degree"),
          branch: formData.get("branch"),
          address: formData.get("address"),
        }),
        {
          pending: "Uploading details...",
          success: "Details uploaded successfully!",
          error: "Details could not be added",
        }
      );

      const response = await promise;

      router.refresh();
    } catch (e) {}
  }
  return (
    <div>
      <ToastContainer />
      <div className="h-[15px]"></div>
      <h1 className="text-white border-2 border-emerald-500 w-max p-2 mx-auto font-semibold rounded-md ">
        Submit to continue.
      </h1>
      <div className="w-3/4 sm:1/2 md:1/2 lg:1/2 xl:1/2 2xl:1/3 mx-auto mt-4 text-white">
        <form className="flex flex-col font-medium" action={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="John Doe"
            className="rounded-md h-8 mb-4 text-black p-1"
          />
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@xyz.com"
            value={email}
            disabled
            required
            className="rounded-md h-8 mb-4 text-black p-1 disabled:bg-white"
          />
          <label htmlFor="mobile">Phone:</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="9353243321"
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />

          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            required
            className="rounded-md h-8 mb-4 text-black"
            defaultValue=""
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
            placeholder="4CB20CS058"
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />
          <label htmlFor="college">College:</label>
          <input
            type="text"
            name="college"
            placeholder="Canara Engineering College"
            id="college"
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />
          <label htmlFor="degree">Course:</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="B.E"
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />
          <label htmlFor="branch">Branch:</label>
          <input
            type="text"
            name="branch"
            id="branch"
            placeholder="CSE"
            required
            className="rounded-md h-8 mb-4 text-black p-1"
          />
          <label htmlFor="address">Address:</label>
          <textarea
            name="address"
            id="address"
            required
            placeholder="Bantwal - 574219"
            rows={4}
            className="rounded-md mb-4 text-black p-1"
          />

          <div className="flex justify-center text-white w-max border-2 mx-auto mt-2">
            <Button text={"Submit"} bg="bg-black" />
          </div>
        </form>
        <div className="h-10"></div>
      </div>
    </div>
  );
}
