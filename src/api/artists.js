import axios from "axios";

const apiUrl = "https://rest.bandsintown.com";
const app_ID = "test";

  // Fetch Artist Profile
export const getArtistsData = async (name) => {
    try{

      const path =  `${apiUrl}/artists/${name}`;
        const response = await axios.get(path, {
                                  params: {
                                    app_id: app_ID
                                  }
                                });
        return response;
    }
    catch(error){
      console.log("error",error);
    }
};

// Fetch Artist Event Details
export const getEventsData = async (name) => {
    try{

      const path =  `${apiUrl}/artists/${name}/events`;
      const response = await axios.get(path, {
                                          params: {
                                            app_id: app_ID,
                                            date: 'upcoming'
                                          }
                                        });
      return response;
    }
 
    catch(error){
      console.log("error",error);
    }
};

