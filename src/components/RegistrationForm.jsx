import { useForm } from "react-hook-form";
import { parseUserData } from "../utils/parser";
import axios from "axios";
import { useNavigate } from "react-router";
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate=useNavigate()

  
  const onSubmit = async (data) => {
    console.log("data", data);
    const registerPayload=parseUserData(data);
    try {
      const response = await axios.post(
        "http://ec2-3-7-71-6.ap-south-1.compute.amazonaws.com:8080/api/users/register",
        registerPayload
      );
      console.log("response", response.data);
      if (response.data) {
      
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Registration failed", error);
      
    }
  };

  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-5xl bg-white p-6 shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Bank Account Registration
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <section>
            <h3 className="text-xl font-semibold mb-4">1. Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-semibold">Full Name</label>
                <input
                  className="border p-2 rounded w-full mt-1"
                  placeholder="Full Name"
                  {...register("personalInformation.fullName", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">Date Of Birth</label>
                <input
                  className="border p-2 rounded w-full mt-1"
                  type="date"
                  {...register("personalInformation.dob", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">Gender</label>
                <select
                  className="border p-2 rounded w-full mt-1"
                  {...register("personalInformation.gender")}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="font-semibold">Nationality</label>
                <input
                  className="border p-2 rounded w-full mt-1"
                  placeholder="Nationality"
                  {...register("personalInformation.nationality")}
                />
              </div>
            </div>
          </section>

          {/* Contact Details */}
          <section>
            <h3 className="text-xl font-semibold mb-4">2. Contact Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-semibold">Email Address</label>
                <input
                  className="border p-2 rounded w-full"
                  type="email"
                  placeholder="Email Address"
                  {...register("contactInformation.email", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">Mobile Number</label>
                <input
                  className="border p-2 rounded w-full"
                  type="tel"
                  placeholder="Mobile Number"
                  {...register("contactInformation.mobile", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">State</label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="State"
                  {...register("contactInformation.state", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">City</label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="City"
                  {...register("contactInformation.city", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">Country</label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="country"
                  {...register("contactInformation.country", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">Street</label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="street"
                  {...register("contactInformation.street", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">ZipCode</label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="ZipCode"
                  {...register("contactInformation.zipcode", { required: true })}
                />
              </div>
            </div>
          </section>

          {/* Account Details */}
          <section>
            <h3 className="text-xl font-semibold mb-4">3. Account Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-semibold">Account Type</label>
                <select
                  className="border p-2 rounded w-full mt-1"
                  {...register("accountDetails.accountType", { required: true })}
                >
                  <option>Savings</option>
                  <option>Current</option>
                  <option>Joint</option>
                </select>
              </div>
              <div>
                <label className="font-semibold">Account Opening Balance</label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Initial Balance"
                  {...register("accountDetails.initialBalance", { required: true })}
                />
               
              </div>
              
            </div>
          </section>

          {/* Security & Login Details */}
          <section>
            <h3 className="text-xl font-semibold mb-4">4. Security & Login Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-semibold">Username</label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Username"
                  {...register("security.username", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">Password</label>
                <input
                  className="border p-2 rounded w-full"
                  type="password"
                  placeholder="Password"
                  {...register("security.password", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">Confirm Password</label>
                <input
                  className="border p-2 rounded w-full"
                  type="password"
                  placeholder="Confirm Password"
                  {...register("security.confirmPassword", { required: true })}
                />
              </div>
             
            </div>
          </section>

         

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default RegistrationForm;
