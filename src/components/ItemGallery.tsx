import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { InventoryContext } from "../contexts/InventoryContext";
import "../styles/ItemGallery.css";
import ItemCard from "./ItemCard";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

interface Props {
  display: string;
}
interface ParamTypes {
  categoryName: string;
}

const ItemGallery: React.FC<Props> = (props) => {
  const { categoryName } = useParams<ParamTypes>();
  const { display } = props;
  const [categoryItems, setCategoryItems] = useState<Product[]>([]);
  //console.log('itemgallery',display, items, categoryName);
  const items = useContext(InventoryContext);
  useEffect(() => {
    if (display === "all") {
      setCategoryItems(items);
    } else if (display === "filter") {
      setCategoryItems(
        items.reduce((acc: Product[], item) => {
          if (item.category.toLowerCase() === categoryName) acc.push(item);
          return acc;
        }, [])
      );
    }
    if (categoryName === "all") {
      setCategoryItems(items);
    }
  }, [items, categoryName, display]);
  return (
    <div className="item-card-container">
      {categoryItems.map((item, index) => {
        return <ItemCard key={`card-${index}`} details={item}></ItemCard>;
      })}
    </div>
  );
};

export default ItemGallery;
