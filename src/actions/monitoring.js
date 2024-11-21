import axiosInstance from '../../axiosConfig';
import { useMonitoring } from '../store/monitoring/useMonitoring';
import { ZONES_API } from '../api/monitoringAPI';

export const actionGetZones = async () => {
  const getZones = useMonitoring.getState().getZones;

  axiosInstance
    .get(ZONES_API)
    .then((response) => getZones(response.data))
    .catch((error) => {
      throw error;
    });
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
