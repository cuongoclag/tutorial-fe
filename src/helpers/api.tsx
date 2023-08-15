import axios from "axios"
import { RequestMethods } from "../enums/RequestMethod.enum"

const requestApi = (endpoint:string, method: RequestMethods.GET | RequestMethods.POST | RequestMethods.PUT | RequestMethods.DELETE, body?: any) => {
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }

  const instance = axios.create({ headers })

  instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        const originConfig = error.config
        if (error.response && error.response.status === 419) {
            try {
                const result = await instance.post(`${import.meta.env.VITE_API_URL}/auth/refresh-token`, {
                    refresh_token: localStorage.getItem('refresh-token')
                })
                const { access_token, refresh_token } = result.data;
                localStorage.setItem('access_token', access_token)
                localStorage.setItem('refresh_token', refresh_token)
                originConfig.headers['Authorization'] = `Bearer ${access_token}`

                return instance(originConfig)
            } catch (err: any) {
                if (err.response && err.response.status === 401) {
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('refresh_token')
                    window.location.href = '/login'
                }
                return Promise.reject(err)
            }
        }
        return Promise.reject(error)
    }
  )

  return instance.request({
    method: method,
    url: `${import.meta.env.VITE_API_URL}${endpoint}`,
    data: body,
    responseType: "json"
  })
}

export default requestApi
