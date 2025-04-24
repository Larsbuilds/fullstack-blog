import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  // Get first 150 characters of content for snippet
  const contentSnippet = post.content.substring(0, 150) + '...';

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
      <div className="relative">
        <img 
          src={post.cover} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
            {post.category || 'General'}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={post.author?.avatar || 'https://via.placeholder.com/40'} 
            alt={post.author?.name || 'Author'} 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{post.author?.name || 'Anonymous'}</p>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{contentSnippet}</p>
        <Link 
          to={`/posts/${post.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Read More 
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PostCard; 