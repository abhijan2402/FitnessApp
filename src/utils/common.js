import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataInAsyncStorage = async (key,value) => {
    return new Promise(async(resolve,reject)=>{
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
            resolve({[key]:value})
          } catch (e) {
            reject({message:'Something went wrong',error:e})
          }
    })
    
};

export const getDataFromAsyncStorage = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
};

export const removeFromAsyncStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    // remove error
  }
};
export function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}