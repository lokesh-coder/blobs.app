import React from 'react';
import { dynamic } from '../../state';
import Slider from '../Common/Slider';

const RandomnessSlider = ({ growth, updateGrowth }) => (
  <Slider
    name="Randomness"
    info="Minimum size of the blob in percentage. More the smaller more the randomness"
    value={growth}
    min={2}
    max={9}
    onChange={updateGrowth}
  />
);

export default dynamic(RandomnessSlider, ['growth']);
