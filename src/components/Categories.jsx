import React from 'react'

function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }
    return (
        <div className="categories">
                <ul>
                    <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>Все</li>
                        {items && items.map((item, itemId) => 
                            <li className={activeItem === itemId ? 'active' : ''} onClick={() => onSelectItem(itemId)} key={`${item}_${itemId}`}>
                                {item}
                            </li>
                        )}
                </ul>
        </div>
    )
}

export default Categories
