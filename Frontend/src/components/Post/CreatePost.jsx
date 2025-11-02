import { useState } from 'react';
import { usePosts } from '../../hooks/usePosts';

export default function CreatePost({ onPostCreated }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const { createPost, loading, error } = usePosts();

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) return;

    const result = await createPost(selectedImage);
    if (result.success) {
      setSelectedImage(null);
      setPreviewUrl('');
      if (onPostCreated) {
        onPostCreated(result.data.post);
      }
    }
  };

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #dbdbdb',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px'
    }}>
      <h3 style={{ marginBottom: '15px' }}>Create New Post</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            style={{ display: 'none' }}
            id="image-upload"
          />
          <label htmlFor="image-upload" className="btn btn-secondary" style={{ display: 'block', textAlign: 'center' }}>
            Choose Image
          </label>
        </div>

        {previewUrl && (
          <div style={{ marginBottom: '15px', textAlign: 'center' }}>
            <img 
              src={previewUrl} 
              alt="Preview" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '300px', 
                borderRadius: '8px' 
              }} 
            />
          </div>
        )}

        {error && (
          <div style={{ 
            color: 'red', 
            textAlign: 'center', 
            marginBottom: '15px',
            fontSize: '14px'
          }}>
            {error}
          </div>
        )}

        <button 
          type="submit" 
          className="btn btn-primary"
          style={{ width: '100%' }}
          disabled={!selectedImage || loading}
        >
          {loading ? 'Creating Post...' : 'Create Post with AI Caption'}
        </button>
      </form>

      <div style={{ 
        marginTop: '15px', 
        fontSize: '12px', 
        color: '#8e8e8e',
        textAlign: 'center'
      }}>
        AI will automatically generate a caption for your image
      </div>
    </div>
  );
}