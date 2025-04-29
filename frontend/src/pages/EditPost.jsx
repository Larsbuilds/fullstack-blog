import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
    coverUrl: "",
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
      !form.coverUrl ||
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
        {["title", "author", "coverUrl", "location", "category", "date"].map(
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
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {loading ? "Updating..." : "Update Post"}
        </button>
      </form>
    </div>
  );
};

export default EditPost;
