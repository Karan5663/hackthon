import axios from 'axios';


export const addReview = async (reviewData) => {
  try {
    const response = await axios.post('http://localhost:4000/review/addReview', reviewData);  
    return response.data;
    } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};