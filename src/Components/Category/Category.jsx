import React from "react";
import { categoryInfo } from "./categoryFullInfos"; 
import CategoryCard from "./CategoryCard"; 
import classes from "./Category.module.css"; 


function Category() {
  return (
    <>
      {/* Container for the category section */}
      <section className={classes.category__container}>
        {/* Looping over categoryInfo array and rendering CategoryCard for each item */}
        {categoryInfo.map((infos, index) => {
          return <CategoryCard key={index} data={infos} />; // Passing each category's data to CategoryCard
        })}
      </section>
    </>
  );
}

export default Category; 
