import "./styles.css";
import { useState } from "react";
const App = () => {
  const [color, setColor] = useState(null);
  const [showReact, setShowReact] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [currentReact, setCurrentReact] = useState("Like");

  const changeLikeStatus = (reactions) => {
    if (likeCount == 1) {
      setColor(null);
      setLikeCount(0);
      setCurrentReact("Like");
    } else {
      setColor("red");
      setLikeCount(1);
      setCurrentReact(reactions);
    }
  };
  const showReactionDiv = () => {
    setShowReact(true);
  };

  return (
    <div>
      {showReact ? (
        <div>
          <button onClick={() => changeLikeStatus("Like")}>Like</button>
          <button onClick={() => changeLikeStatus("Hoho")}>Hoho</button>
          <button onClick={() => changeLikeStatus("Wow")}>Wow</button>
        </div>
      ) : null}
      <button
        onMouseOver={showReactionDiv}
        onClick={changeLikeStatus}
        style={{ backgroundColor: color }}
      >
        {currentReact}
      </button>
      {likeCount}
    </div>
  );
};

export default App;
