import React from 'react';
import PostList from '../components/posts/PostList';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      <PostList />
    </div>
  );
};

export default HomePage; 