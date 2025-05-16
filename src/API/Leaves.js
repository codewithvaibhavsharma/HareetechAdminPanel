import axios from "axios";



export const Leaves = async (formData ) => {
  const response = await axios.post(
    'https://crud-e139.onrender.com/api/leave',
    formData,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data;
};
