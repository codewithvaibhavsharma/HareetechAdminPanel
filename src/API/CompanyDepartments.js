import axios from "axios";



export const CompanyDepartments = async (companyId, departmentName) => {
  const response = await axios.post(
    'https://crudv2.onrender.com/api/department',
    {
      companyId,
      departmentName,
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data;
};
