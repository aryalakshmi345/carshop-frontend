import { server_URL } from "./server_Url";
import { commonAPI } from "./commonAPI";

// register
export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${server_URL}/user/register`,user,"")
}