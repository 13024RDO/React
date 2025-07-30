import { useState } from "react";
import { Title } from "./Title";
import menu from "./data"
import { Menu } from "./Menu";
import {Categories} from "./Categories"

const allCategories = ["all", ...new Set(menu.map((item) => item.category))]

const App = () => {
const [categories, setCategories] = useState(allCategories)
const [menuItems, setMenuItems] = useState(menu)

const filterItems = (category) => {
  if(category === "all"){
    setMenuItems(menu)
    return;
  }

  const newItem = menu.filter((item) => item.category === category)
  setMenuItems(newItem)
}

  return <main>
    <section className="menu">
      <Title text={"Menu"} />
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems} />
    </section>
  </main>
};
export default App;
