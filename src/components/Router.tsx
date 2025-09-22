import Home from 'pages/home';
import { Route, Routes, Navigate } from 'react-router-dom';
import PostNew from 'pages/posts/new';
import PostEdit from 'pages/posts/edit';
import PostsPage from 'pages/posts';
import PostDetailPage from 'pages/posts/detail';
import ProfilePage from 'pages/profile';
import Login from 'pages/login';
import Signup from 'pages/signup';

interface RouterProps {
  isAuth: boolean;
}

export default function Router({ isAuth }: RouterProps) {
  console.log(isAuth, 'isAuth');
  return (
    <>
      <Routes>
        {isAuth ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}
