export const dateFormatter = (date: string | Date): string => {
  return String(date).split("-")[0];
};
