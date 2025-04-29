import axios from 'axios';

const SERVICE_NAME = 'USER-SERVICE';

export const login = async (data)=>{

    const res = await axios.post('/api/login',{
        email: data.email,
        password: data.password
        
    }).catch((err)=>console.log(err));


    if (res.status !== 200 && res.status !== 201){
        return console.log(`Unable to authenticate ${res.status}`);
    }

    const resData = await res.data;

    return resData;
}

export const register = async (data)=>{

    const res = await axios.post('/api/signup',{
        name: data.name,
        email: data.email,
        password: data.password
        
    }).catch((err)=>console.log(err));


    if (res.status !== 200 && res.status !== 201){
        return console.log(`Unable to authenticate ${res.status}`);
    }

    const resData = await res.data;

    return resData;
}


export const createAdminUser = async (data)=>{

    const res = await axios.post(`/${SERVICE_NAME}/api/users/create-admin`,{
        name: data.name,
        email: data.email,
        password: data.password
        
    }).catch((err)=>console.log(err));


    if (res.status !== 200 && res.status !== 201){
        return console.log(`Unable to authenticate ${res.status}`);
    }

    const resData = await res.data;

    return resData;
}


export const getUsers = async ()=>{

    const res = await axios.get(`/${SERVICE_NAME}/users`).catch((err)=> console.log(err));

    if(res.status !== 200){
        return console.log("Unable to fetch users");
    }

    const data =  res.data;

    return data;
}




export const getUserById = async (id)=>{

    const res = await axios.get(`/${SERVICE_NAME}/users/${id}`).catch((err)=> console.log(err));

    if(res.status !== 200){
        return console.log("Unable to fetch users");
    }

    const data =  res.data;

    return data;
}




export const getLoggedInUser = async ()=>{

    let userId = parseInt(localStorage.getItem('iaas-userId'));

    const res = await axios.get(`/${SERVICE_NAME}/users/${userId}`).catch((err)=> console.log(err));

    if(res.status !== 200){
        return console.log("Unable to fetch users");
    }

    const data =  res.data;

    return data;
}






