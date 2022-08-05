import { pokemonApi } from "../../../api/pokemonApi";
import { SetPokemons, startLoadingPokemons } from "./pokemon";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(SetPokemons({ page: page + 1, pokemons: data.results }));
  };
};
