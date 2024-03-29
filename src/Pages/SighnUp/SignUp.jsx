import { useForm } from "react-hook-form";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import useAuth from "../../Hooks/useAuth";
import { axiosPublic } from "../../Hooks/useaxiosPublic";
// import AboutUsBanner from "../Services/AboutUsBanner";
// import Footer from "../Footer/Footer";

const SignUp = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const [bounce, setBounce] = useState('0');

  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const { createUser } = useAuth();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 


  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
 

   
    if (activeTab === "User") {
        const accountBlance = 10000;
        setBounce(accountBlance);
    } else {
        
            const accountBlance = 40 ;
            setBounce(accountBlance);
      
    }
   
    const userInfo = {
        data, bounce
    }
   
    console.log(userInfo)
  

    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result);
    //     navigate(from, { replace: true });
    //     alert("User Create SuccesFull");
    //     // const blance = bounce;
    //     // const userInfo = {
        
    //     //     email : data.email,
    //     //     password : data.password,
    //     //     mobileNumber :data.mobileNumber,
    //     //     firstName : data.firstName,
    //     //     lastName : data.lastName,
    //     //     NID : data.NID,
    //     //     blance

        
    //     // };
    //     // console.log(userInfo);
    //     axiosPublic.post("/users", userInfo).then((res) => console.log(res));
    //   })
    //   .then((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <section className="">
      {/* <AboutUsBanner></AboutUsBanner> */}
      <Navbar></Navbar>
      <div
        data-aos="zoom-in"
        className="mx-auto  w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
      >
        <div className="mt-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-roboto text-[#ED1B24] drop-shadow-md font-bold md:text-5xl">
              Sign Up
            </h2>
            <h3 className="font-roboto text-2xl text-[#ED1B24] drop-shadow-md font-semibold mt-3">
              Please Sign Up To Continue
            </h3>
            
          </div>

          <form


            onSubmit={handleSubmit(onSubmit)}
            className="mb-4 text-left sm:px-4 md:px-20"
            name="wf-form-name"
            method="get"
          >

<p className="mx-auto mb-12 font-roboto mt-4 max-w-xl text-[#ED1B24] drop-shadow-md">
              Create A User New Account and Get{" "}
              <span   id="userBounce" className="text-2xl font-bold">
                40
              </span>
              Tk Bounce Blance . Agent to get{" "}
              <span className="text-2xl font-bold">
                100000
              </span>
              Tk Cash In Blance.
            </p>

            <motion.div className="float-right  -mt-20 rounded-t-2xl     mb-5 bg-gray-200">
              <div role="tablist" className="tabs tabs-boxed ">
                {["Agent", "User"].map((tabIndex) => (
                  <a
                    id="role"
                    key={tabIndex}
                    role="tab"
                    className={`tab ${
                      activeTab === tabIndex
                        ? "tab-active font-roboto font-semibold  drop-shadow-md  text-white  "
                        : "font-roboto font-semibold  drop-shadow-md "
                    }`}
                    onClick={() => handleTabClick(tabIndex)}
                  >
                    {tabIndex}
                  </a>
                ))}
              </div>
            </motion.div>

            <div className="mb-4 grid grid-cols-2 gap-6">
              <div data-aos="fade-right">
                <input
                  type="text"
                  className="h-9 w-full rounded-md  border px-3 py-6 text-sm text-[#ED1B24]"
                  placeholder="First Name"
                  required=""
                  {...register("firstName", { required: true, maxLength: 20 })}
                />
                {errors.firstName && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>

              <div data-aos="fade-left">
                <input
                  type="text"
                  className="h-9 w-full border rounded-md px-3 py-6 text-sm text-[#ED1B24]"
                  placeholder="Last Name"
                  required=""
                  {...register("lastName", { required: true, maxLength: 20 })}
                />
                {errors.lastName && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>

              <div data-aos="fade-right">
                <input
                  type="text"
                  className="h-9 w-full rounded-md  border px-3 py-6 text-sm text-[#ED1B24]"
                  placeholder="Email"
                  required=""
                  {...register("email", { required: true, maxLength: 20 })}
                />
                {errors.email && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>

              <div data-aos="fade-left">
                <input
                  type="text"
                  className="h-9 w-full border rounded-md px-3 py-6 text-sm text-[#ED1B24]"
                  placeholder="Mobile Number"
                  required=""
                  {...register("mobileNumber", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.mobileNumber && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>

              <div data-aos="fade-right">
                <input
                  type="text"
                  className="h-9 w-full rounded-md  border px-3 py-6 text-sm text-[#ED1B24]"
                  placeholder="5 digit PIN"
                  required=""
                  {...register("password", { required: true, maxLength: 6 })}
                />
              </div>

              <div data-aos="fade-left">
                <input
                  type="text"
                  className="h-9 w-full border rounded-md px-3 py-6 text-sm text-[#ED1B24]"
                  placeholder="NID"
                  required=""
                  {...register("NID", {
                    required: true,
                    maxLength: 20,
                  })}
                />

                {errors.dateofBrith && (
                  <span className="text-red-600 font-roboto">
                    **This field is required
                  </span>
                )}
              </div>

            
            </div>

            <label className="mb-1 flex pb-4 font-medium">
              <input type="checkbox" name="checkbox-3" />
              <span
                className="ml-4 inline-block cursor-pointer text-sm "
                
              >
                I agree with the{" "}
                <a href="#" className="font-bold text-[#ED1B24]">
                  Terms &amp; Conditions
                </a>
              </span>
            </label>

            <input
              value="Regester"
              type="Submit"
              className="px-6 w-56 flex drop-shadow-md justify-center cursor-pointer mx-auto ease-in duration-300 py-2 bg-[#ED1B24] text-xl font-roboto font-semibold text-white rounded-xl mt-5"
            ></input>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
