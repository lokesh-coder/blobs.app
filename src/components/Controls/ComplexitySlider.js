import React from 'react';
import { dynamic } from '../../state';
import Slider from '../Common/Slider';

const ComplexitySlider = ({ edges, updateEdges }) => (
  <Slider
    name="Complexity"
    info="Total nodes to create a shape. Increasing this value will add complexity to the shape"
    value={edges}
    min={3}
    max={20}
    onChange={updateEdges}
  />
);

export default dynamic(ComplexitySlider, ['edges']);
