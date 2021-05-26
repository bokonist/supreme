import "../styles/Shop.css";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import ItemDetail from "./ItemDetail"
import ItemGallery from "./ItemGallery"
import { useCallback, useEffect, useState } from "react";
import {Switch, Route} from 'react-router-dom'

interface Props{

}
interface Product{
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
}

const Shop:React.FC<Props> = ()=> {

  const [items , setItems] = useState([
    {
      id:'jdnJnW',
      name: "Supreme®/Vanson Leathers® Spider Web (yellow)",
      description:"Cotton fleece with full zip closure and pouch pocket. Leather logo appliqué at chest and leather graphic appliqué at hood. Embroidered logo patches on sleeves.",
      category: "HOODIES",
      image: '../assets/items/hoodie1.png'
    },{
      id:'nlaLqX',
    name: "Supreme®/Vanson Leathers® Spider Web (black)",
    description:"Cotton fleece with full zip closure and pouch pocket. Leather logo appliqué at chest and leather graphic appliqué at hood. Embroidered logo patches on sleeves.",
    category: "HOODIES",
    image: '../assets/items/hoodie2.png'},
    {
      id:'tosKsB',
      name: "Cropped Logos Hooded Sweatshirt (red)",
      description:"Cotton fleece with pouch pocket. Knit logo rib at hood and hem.",
      category: "HOODIES",
      image: '../assets/items/hoodie3.png'
    },
    {
      id:'nlGXsQ',
      name: "Cropped Logos Hooded Sweatshirt (tan)",
      description:"Cotton fleece with pouch pocket. Knit logo rib at hood and hem.",
      category: "HOODIES",
      image: '../assets/items/hoodie4.png'
    },
    {
      id:'cFGMaL',
      name: "Supreme®/Vanson Leathers® Cordura® Jacket",
      description:"Water resistant Cordura® nylon with mesh lining. Full zip closure with double welt zip hand pockets at lower front and interior zip pockets. Snap band closure at collar and velcro band closure at hem. Zip openings at cuffs. Leather logo appliqué at lower front, sleeves and back with leather graphic appliqué at back. Embroidered logo patches on chest and sleeves. Made exclusively for Supreme.",
      category: "JACKETS",
      image: '../assets/items/jacket1.png'
    },
    {
      id:'qoKDbR',
      name: "Reversible Tech Work Jacket",
      description:"Cotton blend canvas with fill and full zip closure. Zip hand pockets at lower front and zip patch pocket at chest. Knit rib collar and cuffs with embroidered logo on back. Water resistant quilted nylon reverse side with zip patch pockets at lower front. Embroidered logos on chest and back.",
      category: "JACKETS",
      image: '../assets/items/jacket2.png'
    },
    {
      id:'okXBlD',
      name: "Small Box Tee",
      description:"All cotton jersey crewneck with embroidered logo patch on chest.",  
      category: "T-SHIRTS",
      image: '../assets/items/shirt1.png'
    },
    {
      id:'bSIKfM',
      name: "Mesh Stripe Football Jersey",
      description:"Poly mesh with knit rib collar. Twill logo appliqué at chest with twill graphic appliqué at shoulders and back. Athletic label at lower front.",  
      category: "T-SHIRTS",
      image: '../assets/items/shirt2.png'
    },
    {
      id:'qqNClR',
      name: "Stripe S/S Rugby",
      description:"All cotton rugby with three-button placket, cotton twill collar and printed logo on chest.",  
      category: "T-SHIRTS",
      image: '../assets/items/shirt3.png'
    },
  ]);
  
  const [categories, setCatgories] = useState(items.map(item=>{
    return item.category;
  }).reduce((acc:string[],item)=>{
    if(!acc.includes(item))
    {
      acc.push(item);
    }
      return acc;
  },[]));
  return (
    <>
    <Navigation/>
    <Sidebar categories={categories}/>
    <div className="main-body-container">
      <Switch>
        <Route exact path="/shop/item/:id"> <ItemDetail/> </Route>
        <Route exact path="/shop/category/:categoryName"> <ItemGallery display="filter" items={items}/> </Route>
        <Route exact path="/shop"> <ItemGallery display="all" items={items} /> </Route>
      </Switch>
    </div>
    </>
  );
}

export default Shop;
