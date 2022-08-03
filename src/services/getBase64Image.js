const getBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
  reader.readAsDataURL(file);
});

export default async ({ target }) => {
  const file = target.files[0];
  const imgAsFile = await getBase64(file);
  return imgAsFile;
};
