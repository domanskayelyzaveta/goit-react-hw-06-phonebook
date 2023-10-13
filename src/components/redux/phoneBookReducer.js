import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      // return { ...state, contacts: [...state.contacts, action.payload] };
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
      //return { ...state, contacts: [...state.contacts, action.payload] };
    },
    onFilterChange: (state, action) => {
      state.filter = action.payload;
      //  return { ...state, contacts: [...state.contacts, action.payload] };
    },
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
export const { deleteContact, addContact, onFilterChange } =
  phoneBookSlice.actions;
