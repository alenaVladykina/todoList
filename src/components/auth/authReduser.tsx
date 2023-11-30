import React from 'react';
import {Dispatch} from "redux";
import {authMe} from "../../api/todolists-api";
import {
  SetAppErrorActionType, setAppStatusAC,
  SetAppStatusActionType
} from "../../app/app-reducer";


type initialLoginType = {
  isLogin: boolean
}
const initialLogin: initialLoginType = {
  isLogin: false
}


export type ActionsType = ReturnType<typeof authMeAC>


export const appReducer = (state: initialLoginType = initialLogin, action: ActionsType): initialLoginType => {
  switch (action.type) {
    case 'AUTH/ISLOGIN':
      return {...state, isLogin: action.isLogin}
    default:
      return {...state}
  }
}


export const authMeAC = (isLogin: boolean) => ({type: 'AUTH/ISLOGIN', isLogin} as const)

export const loginTC = () => (dispatch: Dispatch<ActionsType | SetAppErrorActionType | SetAppStatusActionType>) => {
  dispatch(setAppStatusAC('loading'))
  authMe.login()
    .then((res) => {
      const login = res.data
      authMeAC(true)
    })
}



export const authMeTC = () => (dispatch: Dispatch<ActionsType | SetAppErrorActionType | SetAppStatusActionType>) => {
  dispatch(setAppStatusAC('loading'))
  authMe.me()
    .then((res) => {
      const login = res.data
      authMeAC(true)
    })
}

export type dataType = {
  email: string,
  password: string
}


