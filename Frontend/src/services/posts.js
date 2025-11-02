import api from './api';

export const postService = {
  async createPost(imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const response = await api.post('/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async getPosts() {
    const response = await api.get('/posts');
    return response.data;
  }
};