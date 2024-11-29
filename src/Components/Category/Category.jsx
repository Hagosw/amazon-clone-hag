import React from "react";
import { categoryInfos } from "./categoryFullInfos"; 
import CategoryCard from "./CategoryCard"; 
import classes from "./category.module.css";


function Category() {  
  return (  
    <section className={classes.category__container}>  
      {  
        categoryInfos.map((infos, index) => {  
          return <CategoryCard key={index} data={infos} />  
        }) // Closing the map function here  
      }  
    </section>  
  );  
}  

export default Category;  
