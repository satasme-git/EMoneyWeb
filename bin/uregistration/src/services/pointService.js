import axios from 'axios';
const POINT_API_BASE_URL="/api/points";
class pointService{
    getPoints(){
        return axios.get(POINT_API_BASE_URL);
    }

    addPoints(points){
        return axios.post(POINT_API_BASE_URL,points);
    }

    updatePoints(points){
        return axios.put(POINT_API_BASE_URL,points);
    }

    getDailyMaxEarning(){
        return axios.get(POINT_API_BASE_URL+"/max/daily");
    }

    getPayoutEarning(){
        return axios.get(POINT_API_BASE_URL+"/max/payout");
    }

    addMaxPoints(points){
        return axios.post(POINT_API_BASE_URL+"/max",points);
    }

    addPayLimit(points){
        return axios.post(POINT_API_BASE_URL+"/paylimit",points);
    }

    getServicePoints(source){
        return axios.get(POINT_API_BASE_URL+"/media/"+source);
    }
        
}
export default new pointService()