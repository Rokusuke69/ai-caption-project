export default function PostList({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '40px',
        color: '#8e8e8e'
      }}>
        No posts yet. Create your first post!
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <div 
          key={post._id}
          style={{
            backgroundColor: 'white',
            border: '1px solid #dbdbdb',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px'
          }}
        >
          <div style={{ marginBottom: '15px' }}>
            <img 
              src={post.image} 
              alt="Post" 
              style={{ 
                width: '100%', 
                borderRadius: '8px',
                maxHeight: '500px',
                objectFit: 'cover'
              }} 
            />
          </div>
          
          <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
            {post.caption}
          </div>
          
          <div style={{ 
            marginTop: '10px',
            fontSize: '12px',
            color: '#8e8e8e'
          }}>
            Posted by {post.user?.username}
          </div>
        </div>
      ))}
    </div>
  );
}