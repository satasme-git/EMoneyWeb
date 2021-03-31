import axios from 'axios';
const PAYMENT_API_BASE_URL="/api/payments";
class paymentService{
   
    generatePayment(){
        var config = {
            responseType: 'blob'
          };
        return axios.get(PAYMENT_API_BASE_URL+'/topay',config);
    }

    getPending(){
        return axios.get(PAYMENT_API_BASE_URL+'/pending');
    }

    getPayed(){
        return axios.get(PAYMENT_API_BASE_URL+'/payed');
    }

    savePay(user){
        return axios.post(PAYMENT_API_BASE_URL,user);
    }

    getPayedAll(user){
        return axios.get(PAYMENT_API_BASE_URL+'/payedall/'+user);
    }

    getPayedList(user){
        return axios.get(PAYMENT_API_BASE_URL+'/payedlist/'+user);
    }
}
export default new paymentService()