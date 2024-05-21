import axios, { AxiosRequestConfig } from 'axios';

export const baseUrl: string = process.env.NEXT_PUBLIC_API_URL || '';

export const fetcher = async (method: AxiosRequestConfig['method'], url: string, params: any, authRequired: boolean): Promise<any> => {

    console.log(method, url, params, authRequired);

    let bearerToken: string = '';
    if (authRequired) {
        bearerToken = localStorage.getItem('access_token') || '';
    }

    const options: AxiosRequestConfig = {
        url: `${baseUrl}${url}`,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
        data: params
    };

    return await axios(options);
}