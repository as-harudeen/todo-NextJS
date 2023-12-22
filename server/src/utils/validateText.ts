export const validateText = (text: string) => {
  if (!text) throw new Error(`Text can't be empty`);
  const trimedText = text.trim();
  if (!trimedText) throw new Error(`Text can't be empty`);
  return trimedText;
};
