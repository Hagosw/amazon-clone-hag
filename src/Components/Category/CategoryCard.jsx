import React from "react";
import classes from "./Category.module.css";
function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  )
}

export default CategoryCard; 



// function CategoryCard({ data }) {
//   return (
//     <div className={classes.category}>
//       {/* Link to the results page for the selected category */}
//       <Link to={`/results?category=${encodeURIComponent(data?.name)}`}>
//         <span>
//           {/* Rendering the title of the category */}
//           <h2>{data?.title}</h2>
//         </span>
//         {/* Rendering the category image */}
//         <img src={data?.imgLink} alt={data?.title} />
//         {/* 'Shop now' prompt below the image */}
//         <p>Shop now</p>
//       </Link>
//     </div>
//   )
// };

// export default CategoryCard; 

