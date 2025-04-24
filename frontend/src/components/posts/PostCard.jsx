import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  // Get first 100 characters of content for snippet
  const contentSnippet = post.content.substring(0, 100) + '...';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={post.cover} 
        alt={post.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{contentSnippet}</p>
        <Link 
          to={`/posts/${post.id}`}
          className="text-blue-600 hover:text-blue-800"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default PostCard; 