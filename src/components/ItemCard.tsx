import { useEffect, useState } from "react";
import "../styles/ItemCard.css";
import loadingGIF from '../assets/loading.gif'
interface Product{
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
  }
interface Props{
    details:Product;
}

const ItemCard:React.FC<Props> = (props)=> {
    const {details} = props;
   const [image, setImage] = useState<null| string>(null);
   useEffect(()=>{
       import(details.image).then(image=>{
           setImage(image);
       })
   },[]);
  return (
    <div className="card">
        
        <img src={loadingGIF}></img>
    </div>
  );
}

export default ItemCard;
