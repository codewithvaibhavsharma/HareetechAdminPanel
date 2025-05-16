import axios from "axios";



export const AdminSignup = async ( username, email, password, ) => {
    const response = await axios.post(
      'https://crud-e139.onrender.com/api/company/register',
      {
        username,  
        email,
        password,
        role: 'admin',                 
        status: 'Inactive'                
      },
      {
        headers: {
          'Authorization': `Bearer d4a87f6c93a0e0f8f3e2654c8279ab073e4a2e2d4b137a7b14ad8e91e7dcfa01 `,
          'Content-Type': 'application/json'
        }
      }
    );
  
    return response.data;
  };
  