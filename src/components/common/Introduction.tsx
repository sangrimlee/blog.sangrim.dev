import React, { useMemo } from 'react';

interface IntroductionProps {
  introduction: string;
}

export default function Introduction({ introduction }: IntroductionProps) {
  const lines = useMemo(() => introduction.split(/\r?\n/), [introduction]);
  return (
    <section>
      <h2 className="title">소개</h2>
      <p className="text-base text-secondary break-words">
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line} {index < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </section>
  );
}
