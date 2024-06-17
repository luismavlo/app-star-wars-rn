import { AxiosAdapter } from './http/axios.adapter';



export const starWarsFetcher = new AxiosAdapter({
  baseURL: 'https://www.swapi.tech/api',
});