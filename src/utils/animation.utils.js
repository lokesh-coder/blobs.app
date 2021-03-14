import dynamics from 'dynamics.js';

const animate = (path, id = 'blob') => {
  const element = document.getElementById(id);
  if (!element) return;
  const config = {
    type: dynamics.spring,
    frequency: 200,
    friction: 100,
    duration: 1200,
  };
  dynamics.animate(element, { d: path }, config);
};

export default animate;
