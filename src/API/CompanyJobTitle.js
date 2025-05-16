import axios from "axios";



export const CompanyJobTitle = async (companyId, departmentId, jobTitle) => {
  const response = await axios.post(
    'https://crudv2.onrender.com/api/job-title',
    {
      companyId,
      departmentId,
      jobTitle
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data;
};
