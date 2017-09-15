import React, { Component } from "react";
import { Rect, Group, Stage, Layer } from "react-konva";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 50,
            y: 50,
            x1: 100,
            y1: 100
        };
    }

    onDragEnd = evt => {
        const width = this.state.x1 - this.state.x;
        const height = this.state.y1 - this.state.y;

        const absolutePosition = this.rectRef.getAbsolutePosition();

        console.log("onDragEnd BoardRect", absolutePosition);

        this.setState({
            x: absolutePosition.x,
            y: absolutePosition.y,
            x1: absolutePosition.x + width,
            y1: absolutePosition.y + height
        });
    };
    render() {
        const width = this.state.x1 - this.state.x;
        const height = this.state.y1 - this.state.y;

        return (
            <div width={350} height={660}>
                <Stage
                    width={350}
                    height={660}
                    style={{ border: "1px solid black" }}
                >
                    <Layer>
                        <Group
                            onMouseOver={this.onMouseOver}
                            onDragEnd={this.onDragEnd}
                            draggable
                        >
                            <Rect
                                ref={node => {
                                    this.rectRef = node;
                                }}
                                x={this.state.x}
                                y={this.state.y}
                                width={width}
                                height={height}
                                stroke="red"
                                strokeWidth={4}
                            />
                        </Group>
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default App;
