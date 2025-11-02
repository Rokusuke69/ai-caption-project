import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import CreatePost from '../components/Post/CreatePost';
import PostList from '../components/Post/PostList';

export default function Dashboard() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  const handlePostCreated = (newPost) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  return (
    <div className="container">
      <div style={{ padding: '40px 0' }}>
        <h1 style={{ marginBottom: '30px' }}>
          Welcome back, {user?.username}!
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 2fr', 
          gap: '40px',
          alignItems: 'start'
        }}>
          <div>
            <CreatePost onPostCreated={handlePostCreated} />
          </div>
          
          <div>
            <h2 style={{ marginBottom: '20px' }}>Your Posts</h2>
            <PostList posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}