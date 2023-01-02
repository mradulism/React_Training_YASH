import './App.css';
import ParentComponent from './BrainTeaserSection/ParentComponent';
import ParentComponentFunction from './BrainTeaserSection/ParentComponentFunction';
import ColorPalette from './IntermediateSection/ColorPalette';
import Counter from './IntermediateSection/Counter';
import { Routes, Route } from "react-router-dom";
import ColouredText from './IntermediateSection/ColouredText';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="parentComponent" element={<ParentComponent />} />
        <Route path="parentComponentFunction" element={<ParentComponentFunction />} />
        <Route path="counter" element={<Counter />} />
        <Route path="colorPalatte" element={<ColorPalette />} />
        <Route path="colouredText" element={<ColouredText />} />

      </Routes>
      {/* 
       */}



    </div>
  );
}

export default App;
