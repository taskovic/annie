import axiosInstance from './';

export async function getHospices() {
  await axiosInstance.get('/hospices');
}
