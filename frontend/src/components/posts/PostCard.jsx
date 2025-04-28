import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {post.cover && (
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          <Link to={`/posts/${post.id}`} className="text-gray-800 hover:text-blue-600">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 line-clamp-3">{post.content}</p>
      </div>
    </article>
  );
};

export default PostCard; 