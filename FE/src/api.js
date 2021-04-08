
import { create } from 'apisauce';

const api = create({
  crossDomain: true,
  baseURL: 'localhost:3001',
  headers: {
    'Access': '*',
    'Access-Control-Allow-Origin': '*'
  }
});

export const getList = async () => await api.get(`/api/books`);