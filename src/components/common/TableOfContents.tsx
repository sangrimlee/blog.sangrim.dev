import React from 'react';

interface TableOfContentsProps {
  tableOfContents: string;
}

export default function TableOfContents({
  tableOfContents,
}: TableOfContentsProps) {
  return (
    <div className="toc-wrap">
      <div
        className="toc"
        dangerouslySetInnerHTML={{ __html: tableOfContents }}
      ></div>
    </div>
  );
}
