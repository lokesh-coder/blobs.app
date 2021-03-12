import { DownloadIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';

const DownloadSVG = ({ content, filename }) => {
  const downloadFile = () => {
    const url = window.URL.createObjectURL(new Blob([content]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
  };
  return (
    <Button
      variant="heavy"
      onClick={() => downloadFile()}
      leftIcon={<DownloadIcon fontSize="lg" />}
    >
      Download
    </Button>
  );
};

export default DownloadSVG;
