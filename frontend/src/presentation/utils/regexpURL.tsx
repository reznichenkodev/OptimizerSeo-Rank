export const regexpURL = (url: string) => {
  const regex = /^(http|https):\/\/[^ "]+$/;
  return regex.test(url);
};
