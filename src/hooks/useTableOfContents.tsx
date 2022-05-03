import { useState } from 'react';
import { Heading } from 'types';
import useScrollEvent from './useScrollEvent';
import { HEADER_HEIGHT_OFFSET, SAFETY_OFFSET } from 'constants/offset';

interface useTableOfContentsProps {
  headings: Heading[];
}

export default function useTableOfContents({
  headings,
}: useTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  const getHeadingElements = () => {
    const headingElements = headings.map((heading) =>
      document.getElementById(heading.id),
    );
    return headingElements;
  };

  const onScroll = () => {
    const currentScrollY = window.scrollY;
    const headingElements = getHeadingElements();
    let currentActiveId = '';
    for (const headingElement of headingElements) {
      if (headingElement) {
        const { top } = headingElement.getBoundingClientRect();
        const elementTop = top + currentScrollY;
        if (
          elementTop - (HEADER_HEIGHT_OFFSET + SAFETY_OFFSET) <=
          currentScrollY
        ) {
          currentActiveId = headingElement.id;
        }
      }
    }
    setActiveId(decodeURI(currentActiveId));
  };

  useScrollEvent(onScroll);

  return activeId;
}
