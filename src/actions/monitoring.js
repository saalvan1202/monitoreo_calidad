import axiosInstance from '../../axiosConfig';
import { useMonitoring } from '../store/monitoring/useMonitoring';
import { AREAS_API, TANKS_API, ZONES_API } from '../api/monitoringAPI';

export const actionGetZones = async () => {
  const setZones = useMonitoring.getState().setZones;

  try {
    const response = await axiosInstance.get(ZONES_API);
    setZones(response.data);
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

export const actionGetAreas = async () => {
  const setAreas = useMonitoring.getState().setAreas;

  try {
    const response = await axiosInstance.get(AREAS_API);
    setAreas(response.data);
  } catch (error) {
    console.log('Error', error);
  }
};

export const actionGetAreasByIdZone = async (idZone) => {
  const setAreas = useMonitoring.getState().setAreas;

  try {
    const response = await axiosInstance.get(`${AREAS_API}/zone/${idZone}`);
    setAreas(response.data);
  } catch (error) {
    console.log('Error', error);
  }
};

export const actionPostArea = async (values, setConfirmLoading) => {
  setConfirmLoading(true);

  try {
    await axiosInstance.post(AREAS_API, values);
    setConfirmLoading(false);
  } catch (error) {
    setConfirmLoading(false);
    throw error;
  }
};

export const actionGetTanksByIdArea = async (idArea) => {
  const setTanks = useMonitoring.getState().setTanks;

  try {
    const response = await axiosInstance.get(`${TANKS_API}/area/${idArea}`);
    setTanks(response.data);
  } catch (error) {
    console.log('Error', error);
  }
};
