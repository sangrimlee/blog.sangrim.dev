import React, { useCallback } from 'react';
import { Heading } from 'types';
import { HEADER_HEIGHT_OFFSET } from 'constants/offset';
import useTableOfContents from 'hooks/useTableOfContents';

interface TableOfContentsItemProps {
  heading: Heading;
  isActive: boolean;
}

function TableOfContentsItem({
  heading: { id, value, depth },
  isActive,
}: TableOfContentsItemProps) {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      const headingElement = document.getElementById(id);
      if (!headingElement) {
        return;
      }
      const { top } = headingElement.getBoundingClientRect();
      window.scrollTo({
        top: top + window.scrollY - HEADER_HEIGHT_OFFSET,
        behavior: 'smooth',
      });
    },
    [id],
  );

  return (
    <li
      className={`toc-item toc-item-${depth} ${isActive ? 'active' : ''} `}
      style={{ marginLeft: `${(depth - 2) / 2}rem` }}
    >
      <a href={`#${encodeURI(id)}`} onClick={handleClick}>
        {value}
      </a>
    </li>
  );
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const activeId = useTableOfContents({ headings });

  return (
    <div className="toc-wrap">
      <div className="toc">
        <ul>
          {headings.map((heading) => {
            if (heading.id) {
              return (
                <TableOfContentsItem
                  heading={heading}
                  isActive={activeId === heading.id}
                  key={heading.id}
                />
              );
            }
            return;
          })}
        </ul>
      </div>
    </div>
  );
}
