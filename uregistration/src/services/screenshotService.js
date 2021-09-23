import axios from 'axios';
const SS_API_BASE_URL="/api/ss";
class screenshotService{
    saveScreenshot(image_path,userId){
        let formData = new FormData();

        formData.append("image_path", image_path);

        return axios.post(SS_API_BASE_URL+'/uploadimage/'+userId,formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
      
    }

 
    
}

export default new screenshotService()