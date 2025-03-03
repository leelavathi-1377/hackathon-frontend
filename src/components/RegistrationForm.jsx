import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                <label className="font-semibold">Date</label>
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
                  {...register("personalInformation.gender", { required: true })}
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
                  {...register("personalInformation.nationality", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">Marital Status</label>
                <select
                  className="border p-2 rounded w-full mt-1"
                  {...register("personalInformation.maritalStatus", { required: true })}
                >
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                </select>
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
                <label className="font-semibold">Residential Address</label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Residential Address"
                  {...register("contactInformation.residentialAddress", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">Permanent Address</label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Permanent Address"
                  {...register("contactInformation.permanentAddress", { required: true })}
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
                <label className="font-semibold">Nominee Name</label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Nominee Name"
                  {...register("accountDetails.Nominee_name", { required: true })}
                />
              </div>
              <div>
                <label className="font-semibold">Nominee Contact No</label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Nominee Contact No"
                  {...register("accountDetails.Nominee_name", { required: true })}
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
              <div>
                <label className="font-semibold">Transaction PIN</label>
                <input
                  className="border p-2 rounded w-full"
                  type="password"
                  placeholder="Transaction PIN"
                  {...register("security.transactionPin", { required: true })}
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
