import axios from 'axios';
const SS_API_BASE_URL = "/api/ss";
class screenshotService {
    getAll() {
        // return axios.get(SS_API_BASE_URL + '/all');
        return axios.get(' https://app.emoneytag.live/api/getAllImages');
        
    }
    saveScreenshot(image_path, userId) {
     
        let formData = new FormData();

        formData.append("image_path", image_path);
        formData.append("user_id", userId);
        const category = {
            image: formData,
            user_id: userId
        }

        // return axios.post(SS_API_BASE_URL+'/uploadimage/'+userId,formData, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     }
        // });

        return axios.post("https://app.emoneytag.live/api/test", formData, {
                           
            headers: {
                "Content-Type": "multipart/form-data",
            }
       

        });
    }
}

export default new screenshotService()