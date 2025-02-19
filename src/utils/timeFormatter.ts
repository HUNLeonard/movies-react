export const timeFormatter = (minutes: number): string => {
  return Math.floor(minutes / 60) + "h:" + (minutes % 60) + "m";
};
