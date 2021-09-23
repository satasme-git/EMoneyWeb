import axios from 'axios';
const USERREF_API_BASE_URL="/api/userref";
class referalService{
    getUserById(userId){
        return axios.get(USERREF_API_BASE_URL+'/'+userId);
    }
    
    getTotalRefers(userId){
        return axios.get(USERREF_API_BASE_URL+'/total/'+userId);
    }
}
export default new referalService()