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

    const res = await axios.get(`/${SERVICE_NAME}/api/users`).catch((err)=> console.log(err));

    if(res.status !== 200){
        return console.log("Unable to fetch users");
    }

    const data =  res.data;

    return data;
}




export const getUserById = async (id)=>{

    const res = await axios.get(`/${SERVICE_NAME}/api/users/${id}`).catch((err)=> console.log(err));

    if(res.status !== 200){
        return console.log("Unable to fetch users");
    }

    const data =  res.data;

    return data;
}




export const getLoggedInUser = async ()=>{

    let userId = parseInt(localStorage.getItem('iaas-userId'));

    const res = await axios.get(`/${SERVICE_NAME}/api/users/${userId}`).catch((err)=> console.log(err));

    if(res.status !== 200){
        return console.log("Unable to fetch users");
    }

    const data =  res.data.data;

    return data;
}



// Add these to your user-backend.js file

export const updateUser = async (userId, data) => {
  const res = await axios.patch(`/${SERVICE_NAME}/api/users/${userId}`, {
    name: data.name,
    email: data.email,
    role: data.role,
    status: data.status
  }).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log(`Failed to update user ${userId} error code ${res.status}`);
  }

  const resData = await res.data;
  return resData;
};

export const deleteUser = async (userId) => {
  const res = await axios.delete(`/${SERVICE_NAME}/api/users/${userId}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log(`Failed to delete user ${userId} error code ${res.status}`);
  }

  const resData = await res.data;
  return resData;
};

export const resetUserPassword = async (userId, data) => {
  const res = await axios.post(`/${SERVICE_NAME}/api/users/${userId}/reset-password`, {
    password: data.password
  }).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log(`Failed to reset password for user ${userId} error code ${res.status}`);
  }

  const resData = await res.data;
  return resData;
};






