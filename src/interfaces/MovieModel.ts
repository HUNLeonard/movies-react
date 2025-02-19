export interface MovieModel {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
}
