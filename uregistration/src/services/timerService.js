import axios from 'axios';
const TIMER_API_BASE_URL="/api/link_timer";

class timerServices{
   
    editTimer(timer){
        return axios.put(TIMER_API_BASE_URL,timer);
    }

    getNewTime(){
        return axios.get(TIMER_API_BASE_URL+'/time/1');
    }
    
}
export default new timerServices()