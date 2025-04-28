import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PostsList from "./components/posts/PostsList";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PostsList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
