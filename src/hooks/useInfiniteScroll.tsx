import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { PostData } from 'types';
import useConfigQuery from './useConfigQuery';

interface Props {
  selectedTag: string;
  posts: {
    node: PostData;
  }[];
}

export default function useInfiniteScroll({ selectedTag, posts }: Props) {
  const { countOfInitialPost } = useConfigQuery();
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null);

  const [count, setCount] = useState<number>(1);

  const postListByTag = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { tags },
          },
        }) => selectedTag === 'All' || tags.includes(selectedTag),
      ),
    [selectedTag],
  );

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        return;
      }
      setCount((value) => value + 1);
      observer.unobserve(entries[0].target);
    });
  }, []);

  useEffect(() => setCount(1), [selectedTag]);

  useEffect(() => {
    if (
      countOfInitialPost * count >= postListByTag.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current === null
    ) {
      return;
    }

    observer.current.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    );
  }, [count, selectedTag]);

  return {
    containerRef,
    postList: postListByTag.slice(0, count * countOfInitialPost),
  };
}
