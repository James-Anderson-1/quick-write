import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'https://james-anderson-quick-write-backend.up.railway.app'
  });
};

