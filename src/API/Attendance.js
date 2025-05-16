import axios from "axios";



export const Attendance = async (date, day, checkInTime, checkOutTime, duration ) => {
  const response = await axios.post(
    'https://crud-e139.onrender.com/api/attendance',
     {
        date,
        day,
        checkInTime,
        checkOutTime,
        duration
     },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data;
};
