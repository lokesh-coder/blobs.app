import React, { useEffect } from 'react';
import { dynamic } from '../state';
import {
  createFixedBlob,
  createInitialBlob,
  setBlobTheme,
} from '../utils/blob.utils';
import Blob from './Blob';

const BlobContainer = (props) => {
  const { edges, growth, color, colors, type, isOutline, svgPath } = props;

  useEffect(() => {
    createInitialBlob(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (svgPath) createFixedBlob(props);
  }, [growth]);

  useEffect(() => {
    if (svgPath) createFixedBlob(props, false);
  }, [edges]);

  useEffect(() => {
    if (svgPath) setBlobTheme(props);
  }, [color, colors, isOutline, type]);

  return <Blob {...props} />;
};

export default dynamic(BlobContainer, [
  'size',
  'color',
  'colors',
  'color',
  'type',
  'isOutline',
  'svgPath',
  'edges',
  'growth',
  'seed',
  'image',
  'pattern',
]);
