import axios from 'axios';
const DASHBOARD_API_BASE_URL="/api/dashboard";
class dashboardService{
    getTotalUsers(){
        return axios.get(DASHBOARD_API_BASE_URL+'/totalusers');
    }

    getTotalOrders(){
        return axios.get(DASHBOARD_API_BASE_URL+'/totalorders');
    }

    getPendingOrders(){
        return axios.get(DASHBOARD_API_BASE_URL+'/pendingorders');
    }

    getPendingVideos(){
        return axios.get(DASHBOARD_API_BASE_URL+'/pendingvideos');
    }

    getUserStatics(){
        return axios.get(DASHBOARD_API_BASE_URL+'/userstatics');
    }

    getEarningImpression(){
        return axios.get(DASHBOARD_API_BASE_URL+'/earningimpression');
    }

    getTopUsers(){
        return axios.get(DASHBOARD_API_BASE_URL+'/topusers');
    }

    getOrderImpression(){
        return axios.get(DASHBOARD_API_BASE_URL+'/orderimpression');
    }
    
    
}
export default new dashboardService()