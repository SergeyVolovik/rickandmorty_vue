export const getEpisodeNumFromStr = episodes => {
  if (!episodes) return;
  const findWord = 'episode';
  return episodes.map(episode => episode.split(`${findWord}/`)[1] + ` ${findWord}`).join(', ');
};

export const removeFromArrayById = (arrayIds, id) => {
  if (!arrayIds?.length) return;
  return arrayIds.filter(el => {
    if (el?.id) return el.id !== id;
    return el !== id;
  });
};

export const scrollToTop = () => window.scrollTo(0, 0);

export const trimValue = value => {
  if (typeof value !== 'string') return;
  return value.trim();
};
