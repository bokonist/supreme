import React from "react";
interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

export const InventoryContext = React.createContext<Product[]>([
  {
    id: "jdnJnW",
    name: "Supreme®/Vanson Leathers® Spider Web (yellow)",
    description:
      "Cotton fleece with full zip closure and pouch pocket. Leather logo appliqué at chest and leather graphic appliqué at hood. Embroidered logo patches on sleeves.",
    category: "HOODIES",
    image: "hoodie1.png",
    price: 1000,
  },
  {
    id: "nlaLqX",
    name: "Supreme®/Vanson Leathers® Spider Web (black)",
    description:
      "Cotton fleece with full zip closure and pouch pocket. Leather logo appliqué at chest and leather graphic appliqué at hood. Embroidered logo patches on sleeves.",
    category: "HOODIES",
    image: "hoodie2.png",
    price: 2000,
  },
  {
    id: "tosKsB",
    name: "Cropped Logos Hooded Sweatshirt (red)",
    description:
      "Cotton fleece with pouch pocket. Knit logo rib at hood and hem.",
    category: "HOODIES",
    image: "hoodie3.png",

    price: 1500,
  },
  {
    id: "nlGXsQ",
    name: "Cropped Logos Hooded Sweatshirt (tan)",
    description:
      "Cotton fleece with pouch pocket. Knit logo rib at hood and hem.",
    category: "HOODIES",
    image: "hoodie4.png",

    price: 900,
  },
  {
    id: "cFGMaL",
    name: "Supreme®/Vanson Leathers® Cordura® Jacket",
    description:
      "Water resistant Cordura® nylon with mesh lining. Full zip closure with double welt zip hand pockets at lower front and interior zip pockets. Snap band closure at collar and velcro band closure at hem. Zip openings at cuffs. Leather logo appliqué at lower front, sleeves and back with leather graphic appliqué at back. Embroidered logo patches on chest and sleeves. Made exclusively for Supreme.",
    category: "JACKETS",
    image: "jacket1.png",

    price: 5000,
  },
  {
    id: "qoKDbR",
    name: "Reversible Tech Work Jacket",
    description:
      "Cotton blend canvas with fill and full zip closure. Zip hand pockets at lower front and zip patch pocket at chest. Knit rib collar and cuffs with embroidered logo on back. Water resistant quilted nylon reverse side with zip patch pockets at lower front. Embroidered logos on chest and back.",
    category: "JACKETS",
    image: "jacket2.png",

    price: 2000,
  },
  {
    id: "okXBlD",
    name: "Small Box Tee",
    description:
      "All cotton jersey crewneck with embroidered logo patch on chest.",
    category: "T-SHIRTS",
    image: "shirt1.png",

    price: 500,
  },
  {
    id: "bSIKfM",
    name: "Mesh Stripe Football Jersey",
    description:
      "Poly mesh with knit rib collar. Twill logo appliqué at chest with twill graphic appliqué at shoulders and back. Athletic label at lower front.",
    category: "T-SHIRTS",
    image: "shirt2.png",

    price: 800,
  },
  {
    id: "qqNClR",
    name: "Stripe S/S Rugby",
    description:
      "All cotton rugby with three-button placket, cotton twill collar and printed logo on chest.",
    category: "T-SHIRTS",
    image: "shirt3.png",

    price: 1000,
  },
]);
