import axiosInstance from './';

export async function getHospices() {
  return await axiosInstance.get('/todos');
}
