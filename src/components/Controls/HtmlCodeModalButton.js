/* eslint-disable react/jsx-wrap-multilines */
import { Button, IconButton, Tooltip, useClipboard } from '@chakra-ui/react';
import React, { useState } from 'react';
import { dynamic } from '../../state';
import DownloadSVG from '../Common/DownloadSVG';
import Highlight from '../Common/Highlight';
import Modal from '../Common/Modal';
import { HtmlIcon, CopyIcon } from '../Common/Icons';
import { formatCode } from '../../utils/code.utils';

const HtmlCodeModalButton = ({ seed, edges, growth }) => {
  const ID = `${edges}-${growth}-${seed}`;
  const [code, setCode] = useState(null);

  const { hasCopied, onCopy } = useClipboard(code);

  const Actions = () => (
    <>
      <DownloadSVG content={code} filename={`blob_${ID}.svg`} />
      <Button
        onClick={onCopy}
        leftIcon={<CopyIcon fontSize="18px" />}
        variant="heavy"
      >
        {hasCopied ? 'Copied' : 'Copy code'}
      </Button>
    </>
  );

  const Content = () => {
    const svgEl = document.getElementById('blobSvg');
    const markup = svgEl ? formatCode(svgEl.outerHTML) : '';

    setCode(markup.replace(/^\s+|\s+$/g, ''));
    return <Highlight code={markup} lang="markup" />;
  };

  return (
    <Modal
      title="Get the code"
      src={
        <Tooltip
          label="View SVG code"
          aria-label="View SVG code"
          hasArrow
          variant="default"
        >
          <IconButton variant="ghost">
            <HtmlIcon w={6} h={6} color="gray.400" />
          </IconButton>
        </Tooltip>
      }
      actions={<Actions />}
    >
      {() => <Content />}
    </Modal>
  );
};
export default dynamic(HtmlCodeModalButton, [
  'seed',
  'edges',
  'growth',
  'svgPath',
]);
