import axios from "axios";



const DOMAIN = "http://15.165.36.17:8000";  //backend server 01

axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
export const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

//localhost:8000/superuser_db/counsel_list?customer=a&phonenum=b&email=c&comment=d