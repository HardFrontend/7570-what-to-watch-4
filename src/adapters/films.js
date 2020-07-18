const adapter = (film) => {
  return {
    id: film.id,
    title: film.name,
    img: film.preview_image,
    posterSrc: film.background_image,
    movieCoverSrc: film.poster_image,
    genre: film.genre,
    yearRelease: film.released,
    description: film.description,
    rating: film.rating,
    numberVotes: film.scores_count,
    producer: film.director,
    actors: film.starring,
    runTime: film.run_time,
    videosrc: film.video_link,
    previewVideoLink: film.preview_video_link,
    backgroundColor: film.background_color,
    isFavorite: film.is_favorite,
  };
};

const adapterForArray = (backendData) => {
  return backendData.map((film) => {
    return adapter(film);
  });
};

export {adapter, adapterForArray};
