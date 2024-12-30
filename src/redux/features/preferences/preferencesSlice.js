import { createSlice } from '@reduxjs/toolkit';

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Export the action
export const { toggleDarkMode } = preferencesSlice.actions;

// Export the reducer
export default preferencesSlice.reducer;
