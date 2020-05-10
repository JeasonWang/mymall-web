import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import el from "element-ui/src/locale/lang/el";

// 创建axios实例
const service = axios.create({
    baseURL: 'localhost:8082', // api的base_url
    timeout: 15000 // 请求超时时间
})

service.interceptors.response.user(
    response => {
        const res = response.data;
        if(res.code !== 200){
            Message({
                message: res.message,
                type: 'error',
                duration: 3 * 1000
            })

        }else {
            return response.data
        }

    }
)

export default service