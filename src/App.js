import "./App.css";
import Song from "./components/song";

const chords = [
  {
    id: 0,
    strings: [
      { string: 2, finger: 1 },
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
  {
    id: 5,
    strings: [
      { string: 0, finger: 2 },
      { string: 1, finger: 0 },
      { string: 2, finger: 0 },
    ],
  },
];

const addChord = () => {
  console.log("adding chord");
  chords.push({ strings: [] });
  console.log(chords);
};

function App() {
  return <Song />;
}

export default App;
