import "./App.css";
import Chord from "./components/chord";

const chords = [
  {
    id: 0,
    strings: [
      { string: 0, finger: 2 },
      { string: 5, finger: 0 },
    ],
  },
  {
    id: 1,
    strings: [{ string: 0, finger: 0 }],
  },
  {
    id: 2,
    strings: [{ string: 0, finger: 0 }],
  },
  {
    id: 3,
    strings: [
      { string: 0, finger: 0 },
      { string: 3, finger: 0 },
    ],
  },
  {
    id: 4,
    strings: [{ string: 0, finger: 0 }],
  },
];

function App() {
  return (
    <div>
      {chords.map((chord) => {
        console.log(chord.id);
        return <Chord key={chord.id} strings={chord.strings}></Chord>;
      })}
    </div>
  );
}

export default App;
