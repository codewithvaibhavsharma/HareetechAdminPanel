import axios from "axios";



export const AdminUserRegistration = async (username, email, password, role, employee_id, salary, joining_date) => {
    const response = await axios.post(
      'https://unicorndevelopment.in/HR_management/API/admin_signup.php',
      {
        username,  
        email,
        password,
        role,                 
        status: 'active',
        employee_id,
        salary,
        joining_date
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
  