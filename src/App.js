// import logo from './logo.svg';
import "./App.css";
import { useEffect, useRef } from "react";
import Box1 from "./components/Box1/Box1";
function App() {
  const audioRef = useRef(null);
  const audioControl = () => {
    if (!audioRef.current) {
      return;
    }
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    audioControl();
  }, []);
  // const [isPageLoaded, setIsPageLoaded] = useState(false);
  // const [isPageLoaded, setIsPageLoaded] = useState(false);
  return (
    <div className="App">
      <>
        <audio ref={audioRef} id="audio" src="/music/bgMusic.mp3"></audio>
      </>
      <Box1 />
    </div>
  );
}

export default App;
