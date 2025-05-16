import axios from "axios";

export const CompanyRegistration = async (companyName, ownerName, username, email, phoneNo, password, industryType, website, address) => {
  const response = await axios.post(
    'https://crudv2.onrender.com/api/company/register',
    {
      companyName,
      ownerName,
      username,
      email,
      phoneNo,
      password,
      industryType,
      website,
      address: {
        addressline1: address.addressline1,
        addressline2: address.addressline2,
        city: address.city,
        state: address.state,
        country: address.country,
        pincode: address.pincode,
      }
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data;
};
