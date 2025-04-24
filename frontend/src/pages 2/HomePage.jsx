import React from 'react';
import PostList from '../components/posts/PostList';

const HomePage = () => {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to BlogHub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
      </div>
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Latest Posts</h2>
        <div className="flex items-center space-x-4">
          <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
            <option>Most Recent</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>
      <PostList />
    </div>
  );
};

export default HomePage; 