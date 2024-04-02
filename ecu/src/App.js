import { Stage, Layer, Rect, Line, Text } from "react-konva";

class Dimin {
  constructor(height, width, color) {
    this.height = height;
    this.width = width;
    this.color = color;
  }
}
let Chip = new Dimin(200, 200);
let Pins = new Dimin(Chip.width / 20, Chip.height / 20);

let x = window.innerWidth / 2 - Chip.width / 2,
  y = window.innerHeight / 2 - Chip.height / 2,
  strokeWidth = 50;
console.log(window);
function App() {
  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            width={Chip.width + strokeWidth}
            height={Chip.height + strokeWidth}
            x={x - strokeWidth / 2}
            y={y - strokeWidth / 2}
            fill="#d9d9d9"
            stroke="black"
            cornerRadius={5}
          />

          <Rect
            width={Chip.width}
            height={Chip.height}
            x={x}
            y={y}
            fill="white"
            stroke="black"
            cornerRadius={5}
          />

          <Text
            x={x + Chip.width / 2 - 70}
            y={y + Chip.height / 2 - 30}
            fontSize={60}
            text="E"
            fontFamily="Calibri"
          />
          <Text
            x={x + Chip.width / 2 - 20}
            y={y + Chip.height / 2 - 30}
            fontSize={60}
            fontFamily="Calibri"
            text="C"
          />
          <Text
            x={x + Chip.width / 2 + 40}
            y={y + Chip.height / 2 - 30}
            fontFamily="Calibri"
            fontSize={60}
            text="U"
          />
          {/* top */}

          <Line
            points={[
              x + 55,
              y - strokeWidth / 2 - Chip.height / 20,
              x + 55,
              y - strokeWidth / 2 - Chip.height / 20 - 40,
              x,
              y - strokeWidth / 2 - Chip.height / 20 - 60,
              x,
              y - strokeWidth / 2 - Chip.height / 20 - 100,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
          />
          <Line
            points={[
              x + 105,
              y - strokeWidth / 2 - Chip.height / 20,
              x + 105,
              y - strokeWidth / 2 - Chip.height / 20 - 100,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
          />
          <Line
            points={[
              x + 155,
              y - strokeWidth / 2 - Chip.height / 20,
              x + 155,
              y - strokeWidth / 2 - Chip.height / 20 - 40,
              x + 205,
              y - strokeWidth / 2 - Chip.height / 20 - 60,
              x + 205,
              y - strokeWidth / 2 - Chip.height / 20 - 100,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
          />

          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x + 50}
            y={y - strokeWidth / 2 - Chip.height / 20}
            fill="black"
          />
          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x + 100}
            y={y - strokeWidth / 2 - Chip.height / 20}
            fill="black"
          />
          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x + 150}
            y={y - strokeWidth / 2 - Chip.height / 20}
            fill="black"
          />
          {/* left */}

          <Line
            points={[
              x - strokeWidth / 2 - Chip.width / 20,
              y + 55,
              x - strokeWidth / 2 - Chip.width / 20 - 40,
              y + 55,
              x - strokeWidth / 2 - Chip.width / 20 - 50,
              y,
              x - strokeWidth / 2 - Chip.width / 20 - 100,
              y,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
          />
          <Line
            points={[
              x - strokeWidth / 2 - Chip.width / 20,
              y + 105,
              x - strokeWidth / 2 - Chip.width / 20 - 100,
              y + 105,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
          />

          <Line
            points={[
              x - strokeWidth / 2 - Chip.width / 20,
              y + 155,
              x - strokeWidth / 2 - Chip.width / 20 - 40,
              y + 155,
              x - strokeWidth / 2 - Chip.width / 20 - 50,
              y + 210,
              x - strokeWidth / 2 - Chip.width / 20 - 100,
              y + 210,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
          />

          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x - strokeWidth / 2 - Chip.width / 20}
            y={y + 50}
            fill="black"
          />
          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x - strokeWidth / 2 - Chip.width / 20}
            y={y + 100}
            fill="black"
          />
          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x - strokeWidth / 2 - Chip.width / 20}
            y={y + 150}
            fill="black"
          />
          {/* right */}

          <Line
            points={[
              x + Chip.width + strokeWidth / 2,
              y + 55,
              x + Chip.width + strokeWidth / 2 + 40,
              y + 55,
              x + Chip.width + strokeWidth / 2 + 50,
              y,
              x + Chip.width + strokeWidth / 2 + 100,
              y,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
          />
          <Line
            points={[
              x + Chip.width + strokeWidth / 2,
              y + 105,
              x + Chip.width + strokeWidth / 2 + 100,
              y + 105,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
          />

          <Line
            points={[
              x + strokeWidth / 2 + Chip.width,
              y + 155,
              x + strokeWidth / 2 + Chip.width + 40,
              y + 155,
              x + strokeWidth / 2 + Chip.width + 50,
              y + 210,
              x + strokeWidth / 2 + Chip.width + 100,
              y + 210,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
          />

          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x + Chip.width + strokeWidth / 2}
            y={y + 50}
            fill="black"
          />
          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x + Chip.width + +strokeWidth / 2}
            y={y + 100}
            fill="black"
          />
          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x + Chip.width + strokeWidth / 2}
            y={y + 150}
            fill="black"
          />
          {/* bottom */}

          <Line
            points={[
              x + 55,
              y + Chip.height + strokeWidth / 2,
              x + 55,
              y + Chip.height + strokeWidth / 2 + 40,
              x,
              y + Chip.height + strokeWidth / 2 + 50,
              x,
              y + Chip.height + strokeWidth / 2 + 100,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
            fill="green"
          />
          <Line
            points={[
              x + 105,
              y + Chip.height + strokeWidth / 2,
              x + 105,
              y + Chip.height + strokeWidth / 2 + 100,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
          />

          <Line
            points={[
              x + 155,
              y + Chip.height + strokeWidth / 2,
              x + 155,
              y + Chip.height + strokeWidth / 2 + 40,
              x + 210,
              y + Chip.height + strokeWidth / 2 + 50,
              x + 210,
              y + Chip.height + strokeWidth / 2 + 100,
            ]}
            stroke="black"
            strokeWidth={2}
            lineCap="square"
            lineJoin="bevel"
            tension={0}
          />
          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x + 50}
            y={y + Chip.height + strokeWidth / 2}
            fill="black"
          />
          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x + 100}
            y={y + Chip.height + strokeWidth / 2}
            fill="black"
          />
          <Rect
            cornerRadius={3}
            width={Pins.width}
            height={Pins.height}
            x={x + 150}
            y={y + Chip.height + strokeWidth / 2}
            fill="black"
          />
        </Layer>
      </Stage>
    </>
  );
}

export default App;
