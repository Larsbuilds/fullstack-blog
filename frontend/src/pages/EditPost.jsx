import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await res.json();
        setForm(data);
      } catch (err) {
        alert(err.message || "Failed to load post");
      }
    };
    fetchPost();
  }, [id]);

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
      const res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, updatedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Update failed");
      navigate(`/posts/${id}`);
    } catch (err) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["title", "author", "cover", "location", "category", "date"].map(
          (name) => (
            <input
              key={name}
              name={name}
              type={name === "date" ? "date" : "text"}
              placeholder={name}
              value={form[name]}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
          )
        )}
        <textarea
          name="content"
          rows="6"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
        />
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
          >
            {loading ? "Updating..." : "Update"}
          </button>
          <button
            type="button"
            onClick={() => navigate(`/posts/${id}`)}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
        <Link
          to={`http://localhost:5173/posts/${id}`}
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back
        </Link>
      </form>
    </div>
  );
};

export default EditPost;
