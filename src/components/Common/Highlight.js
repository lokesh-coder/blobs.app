import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import dart from 'react-syntax-highlighter/dist/esm/languages/prism/dart';
import { coy, nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useColorModeValue } from '@chakra-ui/react';

SyntaxHighlighter.registerLanguage('markup', markup);
SyntaxHighlighter.registerLanguage('dart', dart);

export default function Highlight({ code, lang }) {
  const theme = useColorModeValue(coy, nord);
  return (
    <SyntaxHighlighter
      language={lang}
      style={{
        ...theme,
        'code[class*="language-"]': {
          ...theme['code[class*="language-"]'],
          fontSize: '15px',
        },
      }}
      customStyle={{
        marginBottom: 0,
        marginTop: 0,
        backgroundColor: 'transparent',
        padding: 0,
      }}
      wrapLines
    >
      {code}
    </SyntaxHighlighter>
  );
}
