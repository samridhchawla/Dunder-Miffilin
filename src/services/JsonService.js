import http from '../http-common.js'

class JsonService{
    getJson(){
        return http.get('data/MOCK_DATA.json');
    }
}



export default new JsonService();
