import { axiosClient } from '../axiosClient';

const testApi = {
  getProduct: () => {
    const url = 'products';
    const params = 'page=1';
    return axiosClient.get(`${url}?${params}`);
  },
};

export default testApi;
