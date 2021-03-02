import React, { Component } from "react";

import { Cell } from "./Cell";

interface Prop {
    cells?: number;
}

export class Field extends Component<Prop> {

    renderCell(i:number) {
        return <Cell children={i}/>;
    }

    render() {
        return (
            <div>
                {this.renderCell(0)}
                {this.renderCell(1)}
                {this.renderCell(2)}
                {this.renderCell(3)}
                {this.renderCell(4)}
                {this.renderCell(5)}
                {this.renderCell(6)}
                {this.renderCell(7)}
                {this.renderCell(8)}
                {this.renderCell(9)}
            </div>
        );
    }
}
