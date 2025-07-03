import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy loading cho PostList
const PostList = lazy(() => import("./components/PostList"));

const App = () => {
  return (
    <Router>
      <div>
        <h1>Quản lý Bài Viết</h1>
        <Routes>
          {/* Trang login làm trang chủ */}
          <Route path="/" element={<Login />} />
          {/* Sau đăng nhập thành công, chuyển đến trang PostList */}
          <Route 
            path="/posts" 
            element={
              <Suspense fallback={<div>Đang tải...</div>}>
                <PostList />
              </Suspense>
            } 
          />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
