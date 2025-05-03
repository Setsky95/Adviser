import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../../../context/CounterContext";
import "./Category.css";

import familyIcon from "../../../imgs/family-icon.png";
import workIcon from "../../../imgs/work-icon.png";
import loveIcon from "../../../imgs/love-icon.png";
import friendsIcon from "../../../imgs/friends-icon.png";

const Category = () => {
  const { setCategory } = useContext(CounterContext);
  const navigate = useNavigate();

  const categories = [
    { categoryName: "work", categoryIcon: workIcon, label: "Trabajo", position: "card-top" },
    { categoryName: "family", categoryIcon: familyIcon, label: "Familia", position: "card-left" },
    { categoryName: "love", categoryIcon: loveIcon, label: "Amor", position: "card-right" },
    { categoryName: "friends", categoryIcon: friendsIcon, label: "Amistad", position: "card-bottom" },
    
  ];

  return (
    <div className="category-container">
      {categories.map((cat) => (
        <div
          key={cat.categoryName}
          className={`category-card ${cat.position}`}
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
