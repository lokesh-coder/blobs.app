import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import dart from "react-syntax-highlighter/dist/esm/languages/prism/dart";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
SyntaxHighlighter.registerLanguage("markup", markup);
SyntaxHighlighter.registerLanguage("dart", dart);

export default function Highlight({ code, lang }) {
  return (
    <SyntaxHighlighter language={lang} style={coy}>
      {code}
    </SyntaxHighlighter>
  );
}
