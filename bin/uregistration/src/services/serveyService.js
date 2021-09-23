import axios from 'axios';
const SERVEY_API_BASE_URL = "/api/servey";
class serveyService {
    getPackageMinMax(social, service) {
        return axios.get(SERVEY_API_BASE_URL + '/minmax/' + social + '/' + service);
    }
    saveServeyQuestion(settings) {
        return axios.post(SERVEY_API_BASE_URL, settings);

    }

    deleteServeyQuestion(servey, question) {
        return axios.delete(SERVEY_API_BASE_URL + "/" + servey + "/" + question);

    }

    completeQuestion(settings) {
        return axios.post(SERVEY_API_BASE_URL + "/complete", settings);

    }

    getServeyPrice(serveyno, price) {
        return axios.get(SERVEY_API_BASE_URL + "/" + serveyno + "/" + price);

    }

    getQuestionCOunt(serveyno) {
        return axios.get(SERVEY_API_BASE_URL + "/qcount/" + serveyno);

    }

    setQuestionPrice(price) {
        return axios.post(SERVEY_API_BASE_URL + "/qprice", price);

    }

    getQuestionPrice() {
        return axios.get(SERVEY_API_BASE_URL + "/qprice");

    }

    getPendingServey() {
        return axios.get(SERVEY_API_BASE_URL + "/pending");

    }

    getPendingServeyQuestions() {
        return axios.get(SERVEY_API_BASE_URL + "/pendingquestions");

    }

    approveServey(serveyid) {
        return axios.get(SERVEY_API_BASE_URL + "/approve/" + serveyid);

    }

    deleteServey(serveyid) {
        return axios.get(SERVEY_API_BASE_URL + "/delete/" + serveyid);

    }

    getServeyById(serveyid) {
        return axios.get(SERVEY_API_BASE_URL + "/load/" + serveyid);

    }

    getQuestionCount(serveyid) {
        return axios.get(SERVEY_API_BASE_URL + "/loadcount/" + serveyid);

    }

    saveAnswers(user,sid,qid,answers) {
        return axios.get(SERVEY_API_BASE_URL + "/saveanswer/"+sid+"/"+qid+"/"+user+"/"+answers);
    }

    redeemPoints(user,sid,qid,answers) {
        return axios.get(SERVEY_API_BASE_URL + "/redeempoints/"+sid+"/"+qid+"/"+user+"/"+answers);
    }

    getServeys(user) {
        return axios.get(SERVEY_API_BASE_URL + "/serveylist/"+user);
    }

    getSocialEarning() {
        return axios.get(SERVEY_API_BASE_URL + "/history/");
    }

    getUserSocialEarning() {
        return axios.get(SERVEY_API_BASE_URL + "/history/user");
    }


}
export default new serveyService()