import React, {useState} from 'react'; 
import axios from 'axios';
// import { useQuery } from 'react-query'; 
const SearchedFunc = (keyword) => {
  const useResults = (keyword) => {
    return getResultByKeyword(keyword)
  }
const [data,setData] =useState(null);
const getResultByKeyword = async keyword => {
  await axios
    .get('https://dev.papricacare.com/v3/api-app/drugs', {
      params: {
        q: `${keyword}`,
        kind: '%EC%9D%98%EC%95%BD%ED%92% 88',
        rows: 100000,
      },
      headers: {
        Accept: 'application/json',
        ServiceId: '85326991-3865-4224-8386-7b3fd045b7ca',
        DeviceId: '512',
        Authorization: 'Bearer CW2UeZmN7dYXUl-by*FHRcEQIKVX-ukxrv9diuZbhWc',
        'Content-Type': 'application/x-www-form-urlencod ed',
      },
    })
    .then(response => {
      setData(response.data);
    })
};
}
export default SearchedFunc;



// export const debounce = (callback, duration) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => callback(...args), duration);
//   };
// };
