import axios from 'axios';
import {
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,USER_LOGOUT,
    USER_REGISTER_REQUEST, USER_REGISTER_RESET, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL,
    } from "../constants/userConstants";



export const login = (email, password, type) => async (dispacth,getState) => {
    try {
        dispacth({type:USER_LOGIN_REQUEST})
        const config = {headers: {'Content-Type' : 'application/json'}}
        const {data} = await axios.post(`/api/v1/${type}/login`, {email, password, config})
        dispacth({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })
        
        
    localStorage.setItem('userInfo',JSON.stringify(getState().userLogin.userInfo))
    } catch (error) {
        dispacth({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message: error.message
        })
    }
}

export const logout = () => dispacth => {
    dispacth({
        type: USER_LOGOUT,
        payload:{}
    })
}

export const register = (name, email, password, type) => async dispacth => {
    try {
        dispacth({type:USER_REGISTER_REQUEST})
        const config = {headers: {'Content-Type' : 'application/json'}}
        const {data} = await axios.post(`/api/v1/${type}`, {name,email, password,config})
        dispacth({
            type: USER_REGISTER_SUCCESS,
            payload:data,
        })
        dispacth({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })
        
    localStorage.setItem('userInfo',JSON.stringify(data))
    } catch (error) {
        dispacth({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message: error.message
        })
    }
}

export const getUserDetails = (companyName, studentID) => async (dispacth, getState )=> {
    try {
        dispacth({
            type: USER_DETAILS_REQUEST,
        })
        console.log(companyName, studentID);
        const {data} = await axios.post(`api/v1/students/apply`, companyName,  `${studentID}`)
        
        dispacth({
            type: USER_DETAILS_SUCCESS,
            payload : data
        })
        
    } catch (error) {
        dispacth({
            type:USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message: error.message
        })
    }
};
