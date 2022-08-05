import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: { page: 0, pokemons: [], isLoading: false },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    SetPokemons: (state, action) => {
      state.isLoading = false;
      state.pokemons = action.payload.pokemons;
      state.page = action.payload.page;
    },
  },
});

export const { startLoadingPokemons, SetPokemons } = pokemonSlice.actions;
