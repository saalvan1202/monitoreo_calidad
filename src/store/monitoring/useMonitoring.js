import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_STATE = {
  idZone: 0,
  idArea: 0,
  idTanque: 0,
  zones: [],
};

export const useMonitoring = create(
  persist(
    (set) => ({
      idZone: INITIAL_STATE.idZone,
      idArea: INITIAL_STATE.idArea,
      zones: INITIAL_STATE.zones,

      setIdZone: (idZone) => set({ idZone }),
      setIdArea: (idArea) => set({ idArea }),
      getZones: (zones) => set({ zones }),

      reset: () => set(INITIAL_STATE),
    }),
    {
      name: 'monitoring-storage',
    }
  )
);
