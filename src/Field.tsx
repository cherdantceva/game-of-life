import React from "react";

import { Cell } from "./Cell";
interface Prop {
  cells?: number;
}

export const Field: React.FC<Prop> = () => {
  return (
    <div>
      <Cell childrenNumber={0} />
      <Cell childrenNumber={1} />
      <Cell childrenNumber={2} />
      <Cell childrenNumber={3} />
      <Cell childrenNumber={4} />
      <Cell childrenNumber={5} />
      <Cell childrenNumber={6} />
      <Cell childrenNumber={7} />
      <Cell childrenNumber={8} />
      <Cell childrenNumber={9} />
      <Cell childrenNumber={10} />
    </div>
  );
};
