import { HttpError } from 'ra-core';
import jsonServerProvider from 'ra-data-json-server';
import englishMessages from 'ra-language-english';


const dataProvider = jsonServerProvider('http://localhost:8080/ads/api');

export const wrappedDataProvider = {
    getList: (resource, params) => {
        return dataProvider.getList(resource, params);
    },
    getOne: (resource, params) => {
        return new Promise((resolve, reject) => {
            dataProvider.getOne(resource, params).then(json => {
                resolve(json);
            }).catch(error => {
                console.log("ERROR");
                console.log(Object.keys(error));
                englishMessages.ra.notification.item_doesnt_exist = "CANNOT FIND";
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