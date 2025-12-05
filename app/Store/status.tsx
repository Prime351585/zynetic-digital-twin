import { create } from 'zustand';
import type { ChargerStatusResponse } from '../Types/charger';

interface StatusStore {
  status: ChargerStatusResponse | null;
  isLoading: boolean;
  error: string | null;
  fetchStatus: (chargerId: string) => Promise<void>;
  clearError: () => void;
}

export const useStatusStore = create<StatusStore>((set) => ({
  status: null,
  isLoading: false,
  error: null,

  fetchStatus: async (chargerId: string) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/charger/${chargerId}/status`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch status: ${response.statusText}`);
      }

      const data: ChargerStatusResponse = await response.json();
      set({ status: data, isLoading: false });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      set({ error: errorMessage, isLoading: false });
      console.error('Error fetching charger status:', err);
    }
  },

  clearError: () => set({ error: null }),
}));
