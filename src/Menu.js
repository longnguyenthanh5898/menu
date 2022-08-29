
const Menu = ({items}) =>{
    return (
        <div className="menu-center">
            {items.map((menuItem)=>{
                const {id, title,price,img,desc} = menuItem
                return(
                    <article key={id} className="menu-item">

                        <img src={img} className="menu-img"></img>

                        <div className="menu-infor">
                            <header>
                                <h4>{title}</h4>
                                <div className="menu-infor-price">${price}</div>
                            </header>
                            <div className="menu-infor-text">{desc}</div>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
export default Menu