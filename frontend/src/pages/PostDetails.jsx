import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:3000/posts/${id}`);
        if (!res.ok) throw new Error("Post not found");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        alert(err.message);
      }
    };
    fetchPost();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete post");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  if (!post)
    return (
      <div className="text-center py-10 text-gray-500">
        {error || "Loading post..."}
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="bg-white shadow rounded-md overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-gray-500 mb-2">
            By {post.author} · {formatDate(post.date)} · {post.location}
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Last updated: {new Date(post.updatedAt).toLocaleString()}
          </p>
          <div className="text-gray-700 whitespace-pre-wrap mb-6">
            {post.content}
          </div>

          <div className="flex justify-end space-x-4">
            <Link
              to={`http://localhost:5173/edit/${post.id}`}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>

          <Link
            to="/"
            className="text-blue-600 hover:underline mb-4 inline-block"
          >
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
