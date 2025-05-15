import axios from 'axios';

const SERVICE_NAME = 'SERVICE-VM-HOST';


export const getVmHostHealthCheck = async()=>{

    const res = await axios.get(`/${SERVICE_NAME}/health`).catch((err)=>console.log(err));

     if (res.status !== 200){
        return console.log(`Failed to check health error code ${res.status}`);
    }

    const resData = await res.data;

    return resData;
}




export const getVms = async()=>{

    const res = await axios.get(`/${SERVICE_NAME}/vms`).catch((err)=>console.log(err));

     if (res.status !== 200){
        return console.log(`Failed to fetch vms error code ${res.status}`);
    }

    const resData = await res.data;

    return resData;
}



export const createVm = async(data)=>{

    const res = await axios.post(`/${SERVICE_NAME}/vm/create`,
    {
        name: data.name,
        user_id: data.user_id,
        service_cluster_id: data.service_cluster_id,
        cpu_count: data.cpu_count,
        memory_size_mib: data.memory_size_mib,
        disk_size_gb: data.disk_size_gb,
        os_type: data.os_type,
        ssh_public_key: data.ssh_public_key,
        root_password: data.root_password,
        tap_device: data.tap_device,
        tap_ip: data.tap_ip,
        vm_ip: data.vm_ip,
        vm_mac: data.vm_mac,
        vm_offer_id: data.vm_offer_id,
        system_image_id: data.system_image_id
    }
    ).catch((err)=>console.log(err));


    if (res.status !== 200){
        return console.log(`Failed to create vm error code ${res.status}`);
    }

    const resData = await res.data;

    return resData;

}


export const startVm = async(data)=>{

    const res = await axios.post(`/${SERVICE_NAME}/vm/start`,
        {
            name: data.name,
            user_id: data.user_id,
            cpu_count: data.cpu_count,
            os_type: data.os_type,
            memory_size_mib: data.memory_size_mib,
            disk_size_gb: data.disk_size_gb,
            vm_mac: data.vm_mac,
            tap_device: data.tap_device,
            tap_ip: data.tap_ip,
            vm_ip: data.vm_ip
        }
    ).catch((err)=>console.log(err));


    if (res.status !== 200){
        return console.log(`Failed to start vm vm error code ${res.status}`);
    }

    const resData = await res.data;

    return resData;
}



export const stopVm = async(data)=>{

    const res = await axios.post(`/${SERVICE_NAME}/vm/stop`,
        {
            name: data.name,
            user_id: data.user_id,
            tap_device: data.tap_device
           
        }
    ).catch((err)=>console.log(err));


    if (res.status !== 200){
        return console.log(`Failed to stop vm vm error code ${res.status}`);
    }

    const resData = await res.data;

    return resData;
}



export const deleteVm = async(data)=>{

    const res = await axios.post(`/${SERVICE_NAME}/vm/delete`,
        {
            name: data.name,
            user_id: data.user_id,
            tap_device: data.tap_device
           
        }
    ).catch((err)=>console.log(err));


    if (res.status !== 200){
        return console.log(`Failed to delete vm error code ${res.status}`);
    }

    const resData = await res.data;

    return resData;
}



export const statusVm = async(data)=>{

    const res = await axios.post(`/${SERVICE_NAME}/vm/status`,
        {
            name: data.name,
            user_id: data.user_id
            
        }
    ).catch((err)=>console.log(err));


    if (res.status !== 200){
        return console.log(`Failed to fetch vm status error code ${res.status}`);
    }

    const resData = await res.data;

    return resData;
}



export const getVmMetrics = async(user_id,vm_name)=>{

    const res = await axios.get(`/${SERVICE_NAME}/vm/${user_id}/${vm_name}/metrics`).catch((err)=>console.log(err));


    if (res.status !== 200){
        return console.log(`Failed to fetch vm metrics error code ${res.status}`);
    }

    const resData = await res.data;

    return resData;
}