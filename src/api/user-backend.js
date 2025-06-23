import axios from 'axios';

const SERVICE_NAME = 'USER-SERVICE';

export const login = async (data) => {
  try {
    const res = await axios.post('/api/login', {
      email: data.email,
      password: data.password
    });

    if (res.status !== 200 && res.status !== 201) {
      throw new Error(`Unable to authenticate. Status code: ${res.status}`);
    }

    return res.data;
  } catch (err) {
    //console.error('Login API error:', err);
    throw err;
  }
}

export const register = async (data)=>{

    const res = await axios.post('/api/signup',{
        name: data.name,
        email: data.email,
        password: data.password
        
    }).catch((err)=>{ console.log(err); return err;});
    
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



// User management routes
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

// USER PROFILE ROUTES
export const updateProfile = async (data) => {
  const res = await axios.patch(`/${SERVICE_NAME}/api/users/current/update-profile`, {
    name: data.name,
    email: data.email,
  }).catch((err) => console.log(err));

  if (res.status !== 200 && res.status !== 201) {
    return console.log(`Failed to update your profile. Error code ${res.status}`);
  }

  const resData = await res.data;
  return resData;
};

export const deleteProfile = async () => {
  const res = await axios.delete(`/${SERVICE_NAME}/api/users/current/delete-profile`)
    .catch((err) => console.log(err));

  if (res.status !== 200 && res.status !== 201) {
    return console.log(`Failed to delete your profile. Error code ${res.status}`);
  }

  const resData = await res.data;
  return resData;
};

export const changeUserPassword = async (data) => {
  const res = await axios.patch(`/${SERVICE_NAME}/api/users/current/change-password`, {
    password: data.password,
    newPassword: data.newPassword
  })
    .catch((err) => console.log(err));

  if (res.status !== 200 && res.status !== 201) {
    return console.log(`Failed to change user password. Error code ${res.status}`);
  }

  const resData = await res.data;
  return resData;
};

// PASSWORD RESET ROUTES
export const sendResetCode = async (data) => {
  try
  {
      const res = await axios.post(`/api/send-reset-code`, {
        email: data.email
      })
    
      if (res.status !== 200) {
        return console.log(`Failed to send code to email ${data.email} error code ${res.status}`);
      }
    
      return res;
  } catch (err) {
      console.log("RESULT", err);
      return err;
  }
};

export const verifyResetCode = async (data) => {
  const res = await axios.post(`/api/verify-code`, {
    email: data.email,
    code: data.code
  }).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log(`Failed to verify code sent to your email ${data.email} error code ${res.status}`);
  }

  const resData = await res.data;
  return resData;
};

export const resetUserPassword = async (data) => {
  const res = await axios.post(`/api/reset-password`, {
    email: data.email,
    code: data.code,
    newPassword: data.newPassword,
  }).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log(`Failed to reset password for user email ${data.email} error code ${res.status}`);
  }

  const resData = await res.data;
  return resData;
};







