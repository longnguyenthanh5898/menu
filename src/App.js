
import { useState } from "react";
import Categories from "./Categories"
import Menu from "./Menu"
import items from "./Data"
const allCategories = ['all', ...new Set((items.map(item =>item.category)))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) =>{
    if(category==='all'){
      setMenuItems(items)
      return
    }
    const newItem = items.filter((item) =>item.category === category)
    setMenuItems(newItem)
  }

  return (
    <main>
     
      <section className="menu-section">

          <div className="menu-title">
              <h2>Menu</h2>
              <div className="menu-underline"></div>
          </div>

          <Categories filterItems={filterItems} categories={categories}/>
          <Menu items={menuItems}/>

      </section>

    </main>
  );
}

export default App;
