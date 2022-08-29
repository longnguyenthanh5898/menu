
const Categories = ({filterItems, categories}) =>{
    return(
        <div className="menu-button">
            {categories.map((category) =>{
                return(
                    <button className="menu-filter" onClick={() => filterItems(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
        
    
}
export default Categories