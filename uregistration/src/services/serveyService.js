import axios from 'axios';
const SERVEY_API_BASE_URL="/api/servey";
class serveyService{
    getPackageMinMax(social,service){
        return axios.get(SERVEY_API_BASE_URL+'/minmax/'+social+'/'+service);
    }
    saveServeyQuestion(settings){
        return axios.post(SERVEY_API_BASE_URL,settings);
      
    }

    deleteServeyQuestion(servey,question){
        return axios.delete(SERVEY_API_BASE_URL+"/"+servey+"/"+question);
      
    }
    
    completeQuestion(settings){
        return axios.post(SERVEY_API_BASE_URL+"/complete",settings);
      
    }

    getServeyPrice(serveyno,price){
        return axios.get(SERVEY_API_BASE_URL+"/"+serveyno+"/"+price);
      
    }

    getQuestionCOunt(serveyno){
        return axios.get(SERVEY_API_BASE_URL+"/qcount/"+serveyno);
      
    }

    setQuestionPrice(price){
        return axios.post(SERVEY_API_BASE_URL+"/qprice",price);
      
    }

    getQuestionPrice(){
        return axios.get(SERVEY_API_BASE_URL+"/qprice");
      
    }

   
}
export default new serveyService()