import React from 'react';

const StreamRow = React.memo(({ children }: { children: React.ReactNode }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="bg-green-500 grid grid-cols-4 col-span-8">
      {childrenArray.map((child: React.ReactNode, index: number) => (
        <div key={index}>
          {child}
        </div>
      ))}
    </div>
  );
});
export default StreamRow;