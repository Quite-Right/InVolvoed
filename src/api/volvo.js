import axios from 'axios';

const config = {
    baseURL: 'https://api.volvocars.com/connected-vehicle/v1/vehicles',
    timeout: 2000,
}

export const instance = axios.create(config);

export const getCars = () => instance.get('/');

export const getCarInfo = id => instance.get(`/${id}`);

export const getCarWindows = id => instance.get(`/${id}/windows`);

export const getCarTyres = id => instance.get(`/${id}/tyres`);

export const getCarDoorsAndLockStatus = id => instance.get(`/${id}/doors`);

export const postEnableClimatization = id => instance.post(`/${id}/commands/climatization-start`);

export const postDisableClimatization = id => instance.post(`/${id}/commands/climatization-stop`);

export const postStartEngine = id => instance.post(`/${id}/commands/engine-start`);

export const postStopEngine = id => instance.post(`/${id}/commands/engine-stop`);

export const postLock = id => instance.post(`/${id}/commands/lock`);

export const postUnlock = id => instance.post(`/${id}/commands/unlock`);

export const postHonk = id => instance.post(`/${id}/commands/honk`);

export const postHonkAndFlash = id => instance.post(`/${id}/commands/honk-flash`);

export const postFlash = id => instance.post(`/${id}/commands/flash`);