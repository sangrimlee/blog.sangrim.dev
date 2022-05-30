import React from 'react';
import InfinitePostList from './InfinitePostList';
import TopTagList from './TopTagList';

export default function AllPostList() {
  return (
    <div className="flex flex-col xl:flex-row-reverse">
      <div className="mb-10 xl:mb-0 xl:w-1/4">
        <TopTagList />
      </div>
      <div className="xl:w-3/4 xl:pr-10">
        <section>
          <h1 className="title">모든 포스트</h1>
          <InfinitePostList selectedTag="All" />
        </section>
      </div>
    </div>
  );
}
