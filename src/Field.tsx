import React from "react";

import { Cell } from "./Cell";
interface Props {
  width?: number;
  height?: number;
}

// export const Field: React.FC<Prop> = () => {
//   return (
//     <div>
//       <Cell childrenNumber={0} />
//       <Cell childrenNumber={1} />
//       <Cell childrenNumber={2} />
//       <Cell childrenNumber={3} />
//       <Cell childrenNumber={4} />
//       <Cell childrenNumber={5} />
//       <Cell childrenNumber={6} />
//       <Cell childrenNumber={7} />
//       <Cell childrenNumber={8} />
//       <Cell childrenNumber={9} />
//       <Cell childrenNumber={10} />
//     </div>
//   );
// };

export class Field extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    const fieldCells: any[] = [...Array(10)].map(() => Array(5).fill(0));
    this.state = fieldCells;
  }

  render() {
    return (
      <div>
        <Cell />
      </div>
    );
  }
}
