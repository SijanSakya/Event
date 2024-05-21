import axios from "axios";

const baseUrl = '/api/'

export const get = async (endpoint: string): Promise<any> => {
  let response = await axios.get(`${baseUrl}${endpoint}`, {
    headers: getHeader(),
  });
  return response.data;
};

export const post = async (endpoint: string, data: any): Promise<any> => {
  let response = await axios.post(`${baseUrl}${endpoint}`, data, {
    headers: getHeader(),
  });
  return response.data;
};

export const put = async (endpoint: string, data: any): Promise<any> => {
  let response = await axios.put(`${baseUrl}${endpoint}`, data, {
    headers: getHeader(),
  });
  return response.data;
};

export const remove = async (endpoint: string): Promise<any> => {
  let response = await axios.delete(`${baseUrl}${endpoint}`, {
    headers: getHeader(),
  });
  return response.data;
};

const getHeader = (): any => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Basic ${token}`,
  };
};
