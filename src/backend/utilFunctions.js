import { fetch } from "react-native-ssl-pinning";
import { storageKeyName } from "../constants/Data";
import { getDataFromAsyncStorage } from "../utils/common";


const baseURL = 'https://ec2-15-206-239-93.ap-south-1.compute.amazonaws.com/api';
async function getBaseHeaders(){
    const baseHeaders = {
        Accept: 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        e_platform: 'mobile',
    }
    const jwt = await getDataFromAsyncStorage(storageKeyName);
    baseHeaders['Authorization'] = `Bearer ${jwt}`;
    return baseHeaders;
}
export async function generateRequest(url,method,body,headers={}){
    const config = {
        method:method,
        sslPinning: {
            certs: ['certificat'],
        },
        headers:{...(await getBaseHeaders()),...headers}
    }
    if((method === 'POST' || method === 'PUT' || method === 'DELETE') && body)
        config.body = body;
    
    return new Promise(async(resolve,reject)=>{
        try{
            let result = await fetch(baseURL+url,config)
            const data = JSON.parse(result.bodyString)
            resolve(data);
        }
        catch(err){
            const error = JSON.parse(err.bodyString)
            reject(error)
        }
    })
}

export async function getOtp(phone) {
    const data = new FormData();
    data.append('phone', phone)
    return await generateRequest("/sendotp","POST",data)
}
export async function registerUser(user) {
    const data = new FormData();
    data.append('hash', user.hash)
    data.append('otp', user.otp)
    data.append('phone', user.phone)
    data.append('email', user.email)
    data.append('first_name', user.first_name)
    data.append('last_name', user.last_name)
    data.append('password', user.password)
    data.append('gender', user.gender)
    data.append('dob', user.dob)
    data.append('weight', user.weight)
    data.append('height', user.height)
    data.append('goal', 'improve shape')
    data.append("profile_image",user.image);
    return await generateRequest("/register-user","POST",data)
}
export async function loginUser(credentials) {
    const data = new FormData()
    data.append('email', credentials.email)
    data.append('password', credentials.password)
    return await generateRequest("/login","POST",data)
}
export async function getUser(){
    return await generateRequest("/get-user-detail","GET")
}
export async function updateUser(updateUser){
    // return console.log('test', updateUser)
    const data = new FormData()
    data.append('first_name',updateUser?.first_name)
    data.append('last_name',updateUser?.last_name)
    data.append('gender',updateUser?.gender)
    data.append('dob',updateUser?.dob)
    data.append('weight',updateUser?.weight?.toString())
    data.append('height',updateUser?.height?.toString())
    data.append('goal',updateUser?.goal)
    
    if(updateUser.image)
        data.append('profile_image',updateUser?.image)
    return await generateRequest("/update-user-profile","PUT",data)
}
export async function getUserRecommendedMeal(id){
    return await generateRequest("/get-assigned-Meal/","GET");
}
export async function getMealDetails(id){
 return await generateRequest("/fetch-meal/"+id)
}
export async function forgotPassword(info){
    const data = new FormData()
    data.append('phone',info.phone)
    data.append('hash',info.hash)
    data.append('otp',info.otp)
    data.append('email',info.email)
    data.append('password',info.password)
    data.append('confirm_password',info.confirmPassword)
    return await generateRequest("/forget-password","PUT",data)
}