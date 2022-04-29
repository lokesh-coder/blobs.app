import generateName from 'project-name-generator';

const BLOBS_KEY = 'blobs';

export const getAllBlobs = () => {
  const blobs = localStorage.getItem(BLOBS_KEY);
  return JSON.parse(blobs || '[]');
};

export const saveBlob = (store) => {
  const {
    edges,
    growth,
    svgPath,
    seed,
    color,
    type,
    colors,
    isOutline,
    image,
    pattern,
  } = store;
  const newData = {
    edges,
    growth,
    svgPath,
    seed,
    color,
    type,
    colors,
    isOutline,
    image,
    pattern,
    size: 500,
    id: Date.now(),
    name: generateName({ words: 2 }).spaced,
    // eslint-disable-next-line no-restricted-globals
    url: location.href,
  };
  const allBlobs = getAllBlobs();
  const blobs = [...(allBlobs || []), newData];
  localStorage.setItem(BLOBS_KEY, JSON.stringify(blobs));
  return blobs;
};

export const deleteBlob = (id) => {
  const allBlobs = getAllBlobs();
  const blobs = allBlobs.filter((blob) => blob.id !== id);
  localStorage.setItem(BLOBS_KEY, JSON.stringify(blobs));
  return blobs;
};
