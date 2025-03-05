import { useState } from "react";
import PropTypes from "prop-types";

export default function CreateTicketForm({ setIsOpen, setData }) {
  const initialState = {
    id: "",
    title: "",
    description: "",
    priority: "Low",
    status: "Open",
    category: "",
    assignedTo: "",
    startDate: "",
    images: [],
  };

  const [formData, setFormData] = useState(initialState);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    if (!e.target.files) return;

    const maxSize = 1 * 1024 * 1024; // 1MB limit
    const maxImages = 3; // Maximum 3 images

    const files = Array.from(e.target.files);

    // Prevent exceeding max image count
    if (formData.images.length >= maxImages) {
      alert(`You can upload up to ${maxImages} images only.`);
      return;
    }

    // Filter files by size
    const validFiles = files.filter((file) => {
      if (file.size > maxSize) {
        alert(`File "${file.name}" exceeds the 1MB limit.`);
        return false;
      }
      return true;
    });

    // Convert valid images to previews
    const newImagePreviews = validFiles.map((file) => ({
      id: Date.now() + Math.random(),
      img: URL.createObjectURL(file),
    }));

    setImagePreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...validFiles],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData(initialState);
    setImagePreviews([]);
    setIsOpen(false);

    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // MM
    const year = currentDate.getFullYear().toString().slice(-2); // YY
    const ticketCount = 1; // Example ticket count, replace with your actual count logic
    const ticketNum = ticketCount.toString().padStart(3, "0"); // XXX

    // Create ticket registration number in MMYYXXX format
    const ticketRegisterNumber = `${month}${year}${ticketNum}`;

    console.log(ticketRegisterNumber); // Example output: 022001

    setData((prev) => [
      { ...formData, startDate: new Date().toISOString().split("T")[0] },
      ...prev,
    ]);
  };

  return (
    <section className="fixed top-0 py-10 left-0 overflow-auto w-full h-screen flex justify-center items-center">
      <div className="max-w-2xl bg-white border rounded-lg p-6 shadow-lg z-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create Ticket
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title & Category */}
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
              Upload Images (Max 3, each ≤ 1MB)
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
                    setFormData((prev) => ({
                      ...prev,
                      images: prev.images.filter(
                        (img) => img.name !== preview.img
                      ),
                    }));
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
        className="w-full h-full bg-black opacity-50 fixed top-0 left-0 z-10"
      ></span>
    </section>
  );
}

CreateTicketForm.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};
