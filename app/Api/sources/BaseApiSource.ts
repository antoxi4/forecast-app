import { AxiosInstance } from 'axios'

export class BaseApiSource {
  constructor (readonly adapter: AxiosInstance) {}
}