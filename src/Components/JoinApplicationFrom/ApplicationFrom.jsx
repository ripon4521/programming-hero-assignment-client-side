import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosPublic } from "../../Hooks/useaxiosPublic";

const ApplicationForm = () => {
  const { user } = useUser();
  const [selectedOption, setSelectedOption] = useState("");
  const [bounce, setBounce] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Event handler to update the selected value

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const onSubmit = (data) => {
    const applicationInfo = {
      data,
      selectedOption,
    };
    axiosPublic.post();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold  mb-4 font-jost text-red-500">
          Join Us Appication Form
        </h2>
        <p className="font-jost mb-5">
          You can Join a User get{" "}
          <span className="text-xl text-red-500 "> 40</span> Tk Bounus and Join
          Agent Bouns <span className="text-xl text-red-500">100000</span>Tk
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            defaultValue={user?.fullName}
            readOnly
            type="text"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Full Name"
            {...register("fulltName")}
          />
          <input
            defaultValue={user?.emailAddresses[0]?.emailAddress}
            readOnly
            type="email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email"
            {...register("email")}
          />
          <input
            type="text"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Phone Number"
            {...register("phoneNumber", { required: true, maxLength: 11 })}
          />

          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="select select-bordered w-full  bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          >
            <option value="">Select Your Role</option>
            <option required value="User">
              User
            </option>
            <option required value="Agent">
              Agent
            </option>
          </select>
          <textarea
            name="cover_letter"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Cover Letter"
            {...register("coverLetter", { required: true, maxLength: 120 })}
          ></textarea>

          <input
            type="submit"
            value={"Apply"}
            className="bg-gradient-to-r from-red-500 to-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-600 hover:to-red-600 transition ease-in-out duration-150"
          />
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
