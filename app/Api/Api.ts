import axios, { AxiosInstance } from 'axios'

import { ApiSources, getApiResources } from './sources'

interface ApiParams {
  apiURL: string
  apiKey: string
}

export class Api {
  readonly apiURL: string
  readonly apiKey: string

  readonly adapter: AxiosInstance
  readonly source: ApiSources

  constructor( { apiURL, apiKey }: ApiParams ) {
    this.apiURL = apiURL
    this.apiKey = apiKey
    this.adapter = axios.create( {
      baseURL: apiURL,
      params: {
        key: apiKey
      }
    } )
    this.source = getApiResources( this.adapter )
  }
}