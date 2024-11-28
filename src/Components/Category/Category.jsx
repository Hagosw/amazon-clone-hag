import React from "react";
import { categoryInfos } from "./categoryFullInfos"; 
import CategoryCard from "./CategoryCard"; 
import classes from "./category.module.css";


function Category() {
  return (
      <section className={classes.category__container}>
        {
          categoryInfos.map((infos) =>(
            <CategoryCard data= {infos} />
          ))
      }
      </section>
  
  )
}

export default Category; 


// function Category() {
//   return (
//     <>
//       {/* Container for the category section */}
//       <section className={classes.category__container}>
//         {/* Looping over categoryInfo array and rendering CategoryCard for each item */}
//         {categoryInfos.map((infos, index) => {
//           return <CategoryCard key={index} data={infos} />; // Passing each category's data to CategoryCard
//         })}
//       </section>
//     </>
//   )
// };

// export default Category; 