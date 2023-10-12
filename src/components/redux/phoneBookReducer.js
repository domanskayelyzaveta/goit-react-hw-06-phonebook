import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    deleteContact: (state, action) => {},
    addContact: (state, action) => {},
    onFilterChange: (state, action) => {},
  },
});

export const phoneBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'phoneBook/deleteContact': {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }
    case 'phoneBook/addContact': {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }
    case 'phoneBook/onFilterChange': {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }
    default:
      return state;
  }
};

// addContacts;//handleFormSubmit
// deleteContacts;
// onFilterChange;
