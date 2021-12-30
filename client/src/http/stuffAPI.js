import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const createCode = async (id) => {
    const {data} = await $authHost.post('api/lesson/start', id)
    return data
}

export const getLessons = async () => {
    const {data} = await $authHost.get('api/lesson/')
    return data
}

export const getSubjects = async () => {
    const {data} = await $authHost.get('api/subject/')
    return data
}

export const getExams = async () => {
    const {data} = await $authHost.get('api/exam/')
    return data
}

export const getUsers = async () => {
    const {data} = await $authHost.get('api/user/')
    return data
}

export const getAtten = async () => {
    const {data} = await $authHost.get('api/attendancy_subject/')
    return data
}

export const markAttend = async (id, attendancyId, inputCode) => {
    const {data} = await $authHost.post('api/lesson/mark-attendance', {id, attendancyId, inputCode})
    return data
}