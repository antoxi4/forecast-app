import axios, { AxiosInstance } from 'axios'

interface ApiParams {
  apiURL: string
  apiKey: string
}

export class Api {
  readonly apiURL: string
  readonly apiKey: string

  readonly adapter: AxiosInstance

  constructor( { apiURL, apiKey }: ApiParams ) {
    this.apiURL = apiURL
    this.apiKey = apiKey
    this.adapter = axios.create( {
      baseURL: apiURL,
      params: {
        appid: apiKey
      }
    } )
  }
}