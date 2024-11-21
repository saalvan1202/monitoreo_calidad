import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_STATE = {
  idZone: 0,
  idArea: 0,
  idTanque: 0,
  zones: null,
  areas: null,
  tanks: null,
};

export const useMonitoring = create(
  persist(
    (set) => ({
      idZone: INITIAL_STATE.idZone,
      idArea: INITIAL_STATE.idArea,

      zones: INITIAL_STATE.zones,
      areas: INITIAL_STATE.areas,
      tanks: INITIAL_STATE.tanks,

      setIdZone: (idZone) => set({ idZone }),
      setIdArea: (idArea) => set({ idArea }),

      setZones: (zones) => set({ zones }),
      setAreas: (areas) => set({ areas }),
      setTanks: (tanks) => set({ tanks }),

      reset: () => set(INITIAL_STATE),
    }),
    {
      name: 'monitoring-storage',
    }
  )
);
