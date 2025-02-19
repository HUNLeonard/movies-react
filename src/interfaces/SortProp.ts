export type SortValue = (typeof sortValues)[number];

export interface SortProp {
  name: SortValue;
}

export const sortValues = [
  "popularity",
  "original_title",
  "revenue",
  "primary_release_date",
  "title",
  "vote_average",
  "vote_count",
] as const;
