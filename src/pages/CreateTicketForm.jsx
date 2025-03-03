import { useState } from "react";
import BackBtn from "../components/BackBtn";
import PropTypes from "prop-types";

export default function CreateTicketForm({ setIsOpen, setData }) {
  const initialState = {
    id: "",
    title: "",
    description: "",
    priority: "Medium",
    status: "Open",
    category: "",
    assignedTo: 2,
    startDate: "2023-10-01",
    images: [],
  };

  const [formData, setFormData] = useState(initialState);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const newImagePreviews = files.map((file) => ({
      id: Date.now() + Math.random(),
      img: URL.createObjectURL(file),
    }));

    setImagePreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...files],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData(initialState);
    setImagePreviews([]);
    setIsOpen(false);

    setData((prev) => [formData, ...prev]);
  };

  return (
    <section className="fixed top-0 left-0  w-full h-screen flex justify-center items-center">
      <BackBtn />
      <div className="max-w-2xl   bg-white  border rounded-lg p-6 shadow-lg  z-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create Ticket
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Status & Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter the title"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* priority */}
            {/* <div className="relative">
              <label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-700"
              >
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div> */}

            {/* Category */}
            <div className="relative">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Enter the category"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="relative">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter the description"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="relative">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Images
            </label>
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Image Previews */}
          {imagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {imagePreviews.map((preview) => (
                <div
                  key={preview.id}
                  className="relative cursor-pointer group"
                  onClick={() => {
                    setImagePreviews((prevPreviews) =>
                      prevPreviews.filter((img) => img.id !== preview.id)
                    );
                  }}
                >
                  <img
                    src={preview.img}
                    alt="Uploaded preview"
                    className="h-24 w-24 object-cover rounded-md border"
                  />

                  <i className="absolute top-0 left-0 transition-all text-red-500 group-hover:opacity-100 opacity-0 flex justify-center items-center h-full aspect-square text-8xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-14 z-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>

                    <span className="absolute w-full h-full bg-black opacity-50 rounded-md"></span>
                  </i>
                </div>
              ))}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-md shadow hover:bg-indigo-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <span
        onClick={() => setIsOpen(false)}
        className="w-full h-full bg-black opacity-50 absolute top-0 left-0  z-10 "
      ></span>
    </section>
  );
}

CreateTicketForm.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};
