export type FilterProp = {
  experimental?: boolean | undefined;
  search?: string;
  filterBy?: string;
  filterValue?: string | number;
  sorting?: string;
  sortDesc?: "desc" | "asc" | undefined;
};
