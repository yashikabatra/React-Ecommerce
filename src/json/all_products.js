const all_products = {
  filters: {
    categories: ["Sweatshirts", "Sweaters"],
    brands: [
      "Allen Solly Junior",
      "Gini and Jony",
      "Monte Carlo",
      "Kids Ville",
      "Kanvin",
      "YK",
      "Lil Lollipop",
    ],
    price:[
        "Rs. 229 to Rs. 1869",
"Rs. 1869 to Rs. 3509",
"Rs. 3509 to Rs. 5149",
"Rs. 5149 to Rs. 6789"
    ],
    color:[
        "Pink",
"Blue",
"Navy Blue",
"Black",
"Red",
"Grey",
"White"
    ]
  },

  allproducts_data:[{
      photo:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15181556/2021/8/18/40e663eb-b19d-45ec-a6db-7329e6b558811629272914645Printedhoodie1.jpg",
      brand:"H&M",
      title:"Boys Printed Hoodie",
      price:"Rs 1199"
  },
  {
    photo:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11982044/2021/1/25/145444b0-b9c6-4a94-91c4-360037930ca21611567813092-YK-Girls-Red--Black-Santa-Claus--Penguin-Patterned-Pullover--1.jpg",
    brand:"YK",
    title:"Santa Claus Hoodie",
    price:"Rs 804"

},
{
    photo:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11982044/2021/1/25/145444b0-b9c6-4a94-91c4-360037930ca21611567813092-YK-Girls-Red--Black-Santa-Claus--Penguin-Patterned-Pullover--1.jpg",
    brand:"YK2",
    title:"Santa Claus Girl Hoodie",
    price:"Rs 1804"

},

{
    photo:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15181556/2021/8/18/40e663eb-b19d-45ec-a6db-7329e6b558811629272914645Printedhoodie1.jpg",
brand:"Zara",
title:"Boys Printed Hoodie",
price:"Rs 1009"
},
{
    photo:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16057646/2021/11/25/d07c8f4b-af20-4173-ba46-066087c8957f1637832403791-United-Colors-of-Benetton-Unisex-Kids-Pink-Grey-Melange-Reve-1.jpg",
    brand:"United Colors of Benetton",
    title:"Kids Reversible Padded Jacket",
    price:"Rs 1750"
},
{
    photo:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15181556/2021/8/18/40e663eb-b19d-45ec-a6db-7329e6b558811629272914645Printedhoodie1.jpg",
    brand:"H&M",
    title:"Boys Printed Hoodie",
    price:"Rs 1199"
},
{
  photo:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11982044/2021/1/25/145444b0-b9c6-4a94-91c4-360037930ca21611567813092-YK-Girls-Red--Black-Santa-Claus--Penguin-Patterned-Pullover--1.jpg",
  brand:"YK",
  title:"Santa Claus Hoodie",
  price:"Rs 804"

},
{
  photo:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11982044/2021/1/25/145444b0-b9c6-4a94-91c4-360037930ca21611567813092-YK-Girls-Red--Black-Santa-Claus--Penguin-Patterned-Pullover--1.jpg",
  brand:"YK2",
  title:"Santa Claus Girl Hoodie",
  price:"Rs 1804"

},

{
  photo:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15181556/2021/8/18/40e663eb-b19d-45ec-a6db-7329e6b558811629272914645Printedhoodie1.jpg",
brand:"Zara",
title:"Boys Printed Hoodie",
price:"Rs 1009"
},
{
    photo:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16057646/2021/11/25/d07c8f4b-af20-4173-ba46-066087c8957f1637832403791-United-Colors-of-Benetton-Unisex-Kids-Pink-Grey-Melange-Reve-1.jpg",
    brand:"United Colors of Benetton",
    title:"Kids Reversible Padded Jacket",
    price:"Rs 1750"
}

]
}
export default function getAllProducts() {
  return all_products;
}
