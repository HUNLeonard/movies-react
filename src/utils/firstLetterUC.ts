export const firstLetterUC = (arg: string) => {
  return arg.split("")[0].toLocaleUpperCase() + arg.slice(1, arg.length);
};
