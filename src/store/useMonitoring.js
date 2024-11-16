import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
  idZone: 0,
  idArea: 0,
  idTanque: 0,
};

export const useMonitoring = create(
  persist(
    (set) => ({
      idZone: initialState.idZone,
      idArea: initialState.idArea,

      setIdZone: (idZone) => set({ idZone }),
      setIdArea: (idArea) => set({ idArea }),

      reset: () => set(initialState),
    }),
    {
      name: 'monitoring-storage',
    }
  )
);
