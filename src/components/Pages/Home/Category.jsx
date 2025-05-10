import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../../../context/CounterContext";
import "./Category.css";

import familyIcon from "../../../imgs/family-icon.svg";
import workIcon from "../../../imgs/work-icon.svg";
import loveIcon from "../../../imgs/love-icon.svg";
import friendsIcon from "../../../imgs/friends-icon.svg";

const Category = () => {
  const { setCategory } = useContext(CounterContext);
  const navigate = useNavigate();

  const audioRef = useRef(null);

  const handleHover = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.log("Error reproduciendo sonido:", err);
      });
    }
  };

  const categories = [
    { categoryName: "work", categoryIcon: workIcon, label: "Trabajo" },
    { categoryName: "family", categoryIcon: familyIcon, label: "Familia" },
    { categoryName: "love", categoryIcon: loveIcon, label: "Amor" },
    { categoryName: "friends", categoryIcon: friendsIcon, label: "Amistad" },
  ];

  return (
    <div className="category-container">
      <audio ref={audioRef} src="src\music\hover.mp3" />
      {categories.map((cat) => (
        <div
          key={cat.categoryName}
          className={`category-card`}
          onMouseEnter={handleHover}
          onClick={() => {
            setCategory(cat.categoryName);
            navigate("/Q1");
          }}
        >
          <img src={cat.categoryIcon} alt={cat.label} />
          <div className="category-title">{cat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Category;
