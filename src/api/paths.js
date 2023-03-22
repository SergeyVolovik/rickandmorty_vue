const MAIN_PATH = '/character';

export const paths = {
  CHARACTERS: MAIN_PATH,
  CHARACTER_BY_ID: characterId => `${MAIN_PATH}/${characterId}`,
  NAME_AND_SPECIES: (page, name, specie) =>
    `${MAIN_PATH}/?page=${page}&name=${name}&species=${specie}`,
  FAVORITES: favorites => `${MAIN_PATH}/${favorites}`
};
