import { fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json'});
    }
    const authToken = localStorage.getItem('auth');
    if (authToken) {
        const { token } = JSON.parse(localStorage.getItem('auth'));
        options.headers.set('Authorization', `Bearer ${token}`);
        console.log('auth token')
        console.log(token);
    }
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('http://localhost:8080/ads/api', httpClient);

export const wrappedDataProvider = {
    getList: (resource, params) => {
        return dataProvider.getList(resource, params);
    },
    getOne: (resource, params) => {
        return new Promise((resolve, reject) => {
            dataProvider.getOne(resource, params).then(json => {
                resolve(json);
            }).catch(error => {
                reject(error);
            })
        })
    },
    getMany: (resource, params) => {
        return dataProvider.getMany(resource, params);
    },
    getManyReference: (resource, params) => {
        return dataProvider.getManyReference(resource, params);
    },
    create: (resource, params) => {
        return dataProvider.create(resource, params);
    },
    update: (resource, params) => {
        return dataProvider.update(resource, params);
    },
    updateMany: (resource, params) => {
        return dataProvider.updateMany(resource, params);
    },
    delete: (resource, params) => {
        return dataProvider.delete(resource, params);
    },
    deleteMany: (resource, params) => {
        return dataProvider.deleteMany(resource, params);
    },
}