export const cn = (...input: string[]) => {
  const formatter = {
    join: (joinValue = " ") =>
      input
        .filter(Boolean)
        .map((str) => str.trim())
        .join(joinValue),
  };
  return Object.assign(formatter.join(), formatter);
};
