import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function CreateTicketForm({
  setIsOpen,
  setData,
  isEdit,
  data,
  setIsEdit,
}) {
  const initialState = {
    ticketRegisterID: "",
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

  useEffect(() => {
    if (isEdit) {
      const selectedTicket = data.find((item) => item.ticketRegisterID === isEdit);
      if (selectedTicket) {
        const previews = selectedTicket.images.map((file) => ({
          id: Date.now() + Math.random(),
          img: URL.createObjectURL(file),
          file,
        }));
        setFormData(selectedTicket);
        setImagePreviews(previews);
      }
    }
  }, [data, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => file.size <= 1 * 1024 * 1024); // 1MB limit

    if (validFiles.length + formData.images.length > 3) {
      alert("You can upload up to 3 images only.");
      return;
    }

    const newPreviews = validFiles.map((file) => ({
      id: Date.now() + Math.random(),
      img: URL.createObjectURL(file),
      file,
    }));

    setFormData((prev) => ({ ...prev, images: [...prev.images, ...validFiles] }));
    setImagePreviews((prev) => [...prev, ...newPreviews]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialState);
    setImagePreviews([]);
    setIsOpen(false);

    const ticketRegisterID = `${(new Date().getMonth() + 1)
      .toString()
      .padStart(2, "0")}${new Date().getFullYear().toString().slice(-2)}${(data.length + 1).toString().padStart(3, "0")}`;

    const newTicket = {
      ...formData,
      startDate: new Date().toISOString().split("T")[0],
      ticketRegisterID,
    };

    if (isEdit) {
      setData((prev) => prev.map((ticket) => (ticket.ticketRegisterID === isEdit ? newTicket : ticket)));
    } else {
      setData((prev) => [newTicket, ...prev]);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setFormData(initialState);
    setIsEdit(null);
  };

  return (
    <section className="fixed top-0 left-0 w-full h-screen flex justify-center items-center ">
      <div className="max-w-2xl bg-white border rounded-lg p-6 shadow-lg z-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Ticket</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["title", "category"].map((field) => (
              <div key={field} className="relative">
                <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter the ${field}`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            ))}
          </div>

          <div className="relative">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter the description"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Upload Images (Max 3, each ≤ 1MB)</label>
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {imagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {imagePreviews.map((preview) => (
                <div key={preview.id} className="relative cursor-pointer group" onClick={() => {
                  URL.revokeObjectURL(preview.img);
                  setImagePreviews((prev) => prev.filter((img) => img.id !== preview.id));
                  setFormData((prev) => ({
                    ...prev,
                    images: prev.images.filter((img) => img !== preview.file),
                  }));
                }}>
                  <img src={preview.img} alt="Uploaded preview" className="h-24 w-24 object-cover rounded-md border" />
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-end">
            <button type="submit" className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-md shadow hover:bg-indigo-700 focus:outline-none">Submit</button>
          </div>
        </form>
      </div>

      <span onClick={handleCloseModal} className="w-full h-full fixed top-0 left-0 bg-black opacity-50 z-10"></span>
    </section>
  );
}

CreateTicketForm.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  isEdit: PropTypes.oneOfType([PropTypes.string, PropTypes.null]),
  data: PropTypes.array.isRequired,
  setIsEdit: PropTypes.func.isRequired,
};
