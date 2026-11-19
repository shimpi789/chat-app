import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: { messages: [] },
  reducers: {
    setMessages: (state, action) => {
      state.messages = Array.isArray(action.payload) ? action.payload : [];
    },
    addMessage: (state, action) => {
      const incoming = action.payload;
      if (!incoming?._id) return;

      // Avoid duplicates when an API response and a socket event overlap.
      const alreadyExists = state.messages.some(
        (message) => message._id === incoming._id
      );
      if (!alreadyExists) state.messages.push(incoming);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { setMessages, addMessage, clearMessages } = messageSlice.actions;
export default messageSlice.reducer;
