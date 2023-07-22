import axios from "axios";


export const api = axios.create({
    baseURL: 'http://ec2-15-206-239-93.ap-south-1.compute.amazonaws.com/api',
    headers: { "Content-Type": "multipart/form-data" },
});

export async function getOtp(phone){
    const data = new FormData();
    data.append('phone',phone)
    return await api.post('/sendotp',data)
}