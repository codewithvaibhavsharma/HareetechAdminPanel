import axios from "axios";



export const CompanyLogin = async (email, password) => {
  const response = await axios.post(
    'https://crudv2.onrender.com/api/company/login',
     {
        email,
        password,
     },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data;
};
