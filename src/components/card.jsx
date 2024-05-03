import React from 'react';

function cardBody(props) {
    const { name, link, img, price, stars, ratingsCount } = props; // Destructure props to access specific properties
    const handleClick = () => {
        // Open the link in a new tab when the card body is clicked
        window.open(link, '_blank');
    };
    return (
        <div className="cardBody" onClick={handleClick}>
            <div className="cardBody-left">
                <img src={img} alt="product" /> {/* Use img prop for product image */}
            </div>
            <div className="cardBody-right">
                <div className="cardBody-right-top">
                    <div className="cardBody-name">{name}</div> {/* Use name prop for product name */}
                    <div className="cardBody-price"> {price}</div> {/* Use price prop for product price */}
                </div>
                <div className="cardBody-rating">
                    <div className="cardBody-rating-star">{stars}</div> {/* Use stars prop for product rating */}
                    <div className="cardBody-rating-count">({ratingsCount})</div> {/* Use ratingsCount prop for rating count */}
                </div>
            </div>
        </div>
    );
}

export default cardBody;
