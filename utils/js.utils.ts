export const editArrayDate = <T>(
  arr: T[],
  identifier: keyof T,
  id: T[keyof T],
  editFn: (item: T) => T
) => {
  return arr.map((item) => {
    if (item[identifier] === id) {
      return editFn(item);
    }
    return item;
  });
};
