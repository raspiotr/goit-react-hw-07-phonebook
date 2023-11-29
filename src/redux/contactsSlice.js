import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = () => {
  try {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      return JSON.parse(storedContacts);
    } else {
      return [];
    }
  } catch (error) {
    alert(error);
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(inputData) {
        return {
          payload: {
            id: nanoid(),
            name: inputData.name,
            number: inputData.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
