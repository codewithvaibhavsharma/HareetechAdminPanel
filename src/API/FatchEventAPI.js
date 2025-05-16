import axios from "axios";



export const FatchEventAPI = async (title,sub_title,description ,notice,date,location,organizer,contact_no,image) => {
    const response = await axios.get(
      'https://unicorndevelopment.in/HR_management/API/fetch-event.php',
      {
        title,
        sub_title,
        description ,
        notice,
        date,
        location,
        organizer,
        contact_no,
        image 
      },
      {
        headers: {
          'Authorization': `Bearer  d4a87f6c93a0e0f8f3e2654c8279ab073e4a2e2d4b137a7b14ad8e91e7dcfa01`
        }
      }
    );
    return response.data;
  };
  