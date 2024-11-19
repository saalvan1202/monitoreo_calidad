import axiosInstance from '../../axiosConfig';
import { useMonitoring } from '../store/monitoring/useMonitoring';
import { ZONES_API } from '../api/monitoringAPI';

export const actionGetZones = async () => {
  const getZones = useMonitoring.getState().getZones;

  try {
    const response = await axiosInstance.get(ZONES_API);
    getZones(response.data);
  } catch (error) {
    console.log('Error', error);
  }
};

export const actionPostZone = async (values, setConfirmLoading) => {
  setConfirmLoading(true);

  try {
    await axiosInstance.post(ZONES_API, values);
    setConfirmLoading(false);
  } catch (error) {
    setConfirmLoading(false);
    throw error;
  }
};
