import "../styles/Sidebar.css";


import {Link} from 'react-router-dom'

interface Props{
  categories: string[];
}

const Sidebar:React.FC<Props> = (props)=> {
  const {categories} = props;
  return (
    <div className="sidebar-container">
      {
        categories.map((category,index) =>{
          return(<Link to={`/shop/category/${category.toLowerCase()}`} key={index} className="category-item">
            {category}
          </Link>);
        })
      }
    </div>
  );
}

export default Sidebar;
