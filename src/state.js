import createStore from 'redux-zero';
import { connect as connectStore } from 'redux-zero/react';
import { bindActions } from 'redux-zero/utils';
import { deleteBlob, getAllBlobs, saveBlob } from './utils/manageBlobs';

const START_COLOR = '#d1d8e0';
const END_COLOR = '#4a5568';

const initialState = {
  edges: 6,
  growth: 6,
  size: 500,
  svgPath: '',
  seed: null,
  color: START_COLOR,
  type: 'solid',
  colors: [START_COLOR, END_COLOR],
  isOutline: false,
  pattern: 'cross',
  image: 'https://source.unsplash.com/5PVXkqt2s9k/500x500',
  playSound: true,
  savedBlobs: null,
};

const store = createStore(initialState);

const actions = (_store) => ({
  updateEdges: (_, value) => ({ edges: value }),
  updateGrowth: (_, value) => ({ growth: value }),
  updatePath: (_, { svgPath, seed }) => ({ svgPath, seed }),
  switchToSolidColor: (_, color) => ({
    color,
    type: 'solid',
    colors: [START_COLOR, END_COLOR],
    pattern: null,
  }),
  switchToGradientColors: (_, colors) => ({
    colors,
    type: 'gradient',
    color: START_COLOR,
    pattern: null,
  }),
  switchToImage: (_, url) => ({
    image: url,
    type: 'image',
    color: START_COLOR,
    colors: [START_COLOR, END_COLOR],
    pattern: null,
  }),
  switchToPattern: (_, name) => ({
    pattern: name,
    type: 'pattern',
    color: START_COLOR,
    colors: [START_COLOR, END_COLOR],
    image: '',
  }),
  updateGradientStartColor: (state, color) => ({
    colors: [color, state.colors[1]],
    type: 'gradient',
    color: START_COLOR,
  }),
  updateGradientEndColor: (state, color) => ({
    colors: [state.colors[0], color],
    type: 'gradient',
    color: START_COLOR,
  }),
  toggleOutline: (state) => ({ isOutline: !state.isOutline }),
  updateSize: (_, size) => ({ size }),
  blobLoaded: (_, status) => ({ blobCode: status }),
  toggleSound: (state) => ({
    playSound: !state.playSound,
  }),
  saveBlob: (state) => {
    const blobs = saveBlob(state);
    return { savedBlobs: blobs };
  },
  deleteBlob: (_, id) => {
    const blobs = deleteBlob(id);
    return { savedBlobs: blobs };
  },
  loadBlobs: () => {
    const blobs = getAllBlobs();
    return { savedBlobs: blobs };
  },
  resetStore: () => _store.reset(),
  setStaticBlobData: (_, data) => _store.setState(data),
});

const dynamic = (Component, deps = []) => {
  const props = (state) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Object.keys(state)
      .filter((y) => deps.includes(y))
      .reduce((acc, arr) => {
        acc[arr] = state[arr];
        return acc;
      }, {});
  return connectStore(props, actions)(Component);
};

const boundActions = bindActions(actions, store);

export { store, actions, dynamic, boundActions };
