import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion"; 

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [email, setEmail] = useState("");
  const [docImg, setDocImg] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [degree, setDegree] = useState("");
  const [about, setAbout] = useState("");
  const [fees, setFees] = useState("");
  const [loading, setLoading] = useState(false);

  const { backendUrl, adminToken } = useContext(AdminContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }
      setLoading(true);

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("fees", Number(fees));
      formData.append("experience", experience);
      formData.append("speciality", speciality);
      formData.append("about", about);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      const { data } = await axios.post(
        `${backendUrl}/api/admin/add-doctor`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      if (data.success) {
        toast.success(data.message);
        // Reset form
        setDocImg(false);
        setName("");
        setAbout("");
        setAddress1("");
        setAddress2("");
        setDegree("");
        setEmail("");
        setDegree("");
        setFees("");
        setPassword("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
      console.error("Error adding doctor:", error);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.form
      onSubmit={submitHandler}
      className="m-5 w-full"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div
        className="text-center mb-12"
        variants={fadeIn}
      >
        <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent text-sm font-extrabold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4 inline-block bg-indigo-50 shadow-sm border border-indigo-100">Admin Dashboard</span>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
          <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
            Add Doctor
          </span>
          <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full opacity-70"></div>
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-6">
          Fill in the details below to add a new doctor to the platform—enhance healthcare services effortlessly.
        </p>
      </motion.div>

      <motion.div
        className="p-8 bg-white w-full rounded-3xl shadow-xl border border-gray-100 max-w-4xl max-h-[80vh] overflow-y-auto scrollbar-hide"
        variants={staggerContainer}
      >
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="w-12 h-12 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
          </div>
        )}

        <motion.div
          className="flex gap-4 text-gray-500 items-center mb-8"
          variants={scaleUp}
        >
          <label htmlFor="doc-img">
            <motion.img
              className="w-20 bg-gray-100 rounded-full cursor-pointer hover:shadow-md transition-all duration-300"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Upload Doctor Picture"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            name=""
            id="doc-img"
            hidden
          />
          <p className="text-sm font-medium">
            Upload Doctor <br /> Picture
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-start gap-10 text-gray-600"
          variants={staggerContainer}
        >
          <motion.div
            className="w-full flex flex-col gap-4 lg:flex-1"
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-1 flex-col gap-1"
              variants={scaleUp}
            >
              <p className="mt-4 mb-2 text-sm font-medium">Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border border-gray-200 rounded-full px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                type="text"
                placeholder="Name"
                required
              />
            </motion.div>
            <motion.div
              className="flex flex-1 flex-col gap-1"
              variants={scaleUp}
            >
              <p className="mt-4 mb-2 text-sm font-medium">Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-gray-200 rounded-full px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                type="email"
                placeholder="Email"
                required
              />
            </motion.div>
            <motion.div
              className="flex flex-1 flex-col gap-1"
              variants={scaleUp}
            >
              <p className="mt-4 mb-2 text-sm font-medium">Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border border-gray-200 rounded-full px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                type="password"
                required
                placeholder="Password"
              />
            </motion.div>
            <motion.div
              className="flex flex-1 flex-col gap-1"
              variants={scaleUp}
            >
              <p className="mt-4 mb-2 text-sm font-medium">Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border border-gray-200 rounded-full px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                name="experience"
                id="experience"
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
                <option value="9 Years">9 Years</option>
                <option value="10 Years">10 Years</option>
              </select>
            </motion.div>
            <motion.div
              className="flex flex-1 flex-col gap-1"
              variants={scaleUp}
            >
              <p className="mt-4 mb-2 text-sm font-medium">Doctor Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border border-gray-200 rounded-full px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                type="number"
                required
                placeholder="Fees"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full flex flex-col gap-4 lg:flex-1"
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-1 flex-col gap-1"
              variants={scaleUp}
            >
              <p className="mt-4 mb-2 text-sm font-medium">Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border border-gray-200 rounded-full px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                name="speciality"
                id="speciality"
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </motion.div>
            <motion.div
              className="flex flex-1 flex-col gap-1"
              variants={scaleUp}
            >
              <p className="mt-4 mb-2 text-sm font-medium">Degree</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border border-gray-200 rounded-full px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                type="text"
                required
                placeholder="Degree"
              />
            </motion.div>
            <motion.div
              variants={scaleUp}
            >
              <p className="mt-4 mb-2 text-sm font-medium">Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border border-gray-200 rounded-full px-4 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                type="text"
                placeholder="Address 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border border-gray-200 rounded-full px-4 py-2 mt-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                type="text"
                placeholder="Address 2"
                required
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col gap-1 mt-6"
          variants={scaleUp}
        >
          <p className="mt-4 mb-2 text-sm font-medium">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
            rows={5}
            placeholder="Write about doctor"
            required
          ></textarea>
        </motion.div>
        <motion.button
          type="submit"
          className="rounded-full text-white bg-gradient-to-r from-indigo-600 to-blue-600 px-10 py-2 mt-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          variants={scaleUp}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Add Doctor
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default AddDoctor;
