import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
    cover: "",
    author: "",
    location: "",
    category: "",
    date: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.title ||
      !form.author ||
      !form.cover ||
      !form.location ||
      !form.category ||
      !form.date ||
      !form.content
    ) {
      return alert("Please fill in all fields");
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:3000/posts", {
        ...form,
        updatedAt: new Date().toISOString(),
      });
      navigate("/");
    } catch (err) {
      alert(`Failed to create post: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Create New Post
        </h2>
        {[
          { name: "title", placeholder: "Title" },
          { name: "author", placeholder: "Author" },
          { name: "cover", placeholder: "Cover Image URL" },
          { name: "location", placeholder: "Location" },
          { name: "category", placeholder: "Category" },
          { name: "date", placeholder: "Date (YYYY-MM-DD)", type: "date" },
        ].map(({ name, placeholder, type = "text" }) => (
          <input
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={form[name]}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        ))}
        <textarea
          name="content"
          placeholder="Content"
          rows="6"
          value={form.content}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
          >
            {loading ? "Saving..." : "Save"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
