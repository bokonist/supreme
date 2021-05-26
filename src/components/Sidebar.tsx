import "../styles/Sidebar.css";

import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { InventoryContext } from "../contexts/InventoryContext";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const items = useContext(InventoryContext);
  const [myCategories, setCategories] = useState(
    items.reduce((acc: string[], item) => {
      if (!acc.includes(item.category)) acc.push(item.category);
      return acc;
    }, [])
  );
  useEffect(() => {
    setCategories((prevCategories) => {
      return ["All", ...prevCategories];
    });
  }, []);
  return (
    <div className="sidebar-container">
      {myCategories.map((category, index) => {
        return (
          <Link
            to={`/shop/category/${category.toLowerCase()}`}
            key={index}
            className="category-item"
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
