export const objectSameUnion = <T extends Record<string, any>>(
  arg0: T,
  arg1: T,
): boolean => {
  const matchingArray = Object.entries(arg0).filter(([entry, value]) => {
    const compareValue = arg1[entry as keyof T];
    if (
      (compareValue === "" || compareValue === null) &&
      (value === null || value === "")
    )
      return true;
    return arg1[entry as keyof T] === value;
  });
  const maxMatch = Math.min(
    Object.values(arg1).length,
    Object.values(arg0).length,
  );

  return maxMatch === matchingArray.length;
};
