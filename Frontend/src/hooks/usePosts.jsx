import { useState } from 'react';
import { postService } from '../services/posts';

export function usePosts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPost = async (imageFile) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await postService.createPost(imageFile);
      setLoading(false);
      return { success: true, data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to create post';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  return {
    createPost,
    loading,
    error,
    clearError: () => setError(null)
  };
}