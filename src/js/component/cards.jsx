import React from "react";

const Cards = () => {
    const cardData = [
        { id: 1, title: "Card 1", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://via.placeholder.com/150" },
        { id: 2, title: "Card 2", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://via.placeholder.com/150" },
        { id: 3, title: "Card 3", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://via.placeholder.com/150" },
        { id: 4, title: "Card 4", text: "Some quick example text to build on the card title and make up the bulk of the card's content.", imgSrc: "https://via.placeholder.com/150" },
    ];

    return (
        <div className="row">
            {cardData.map(card => (
                <div className="col-md-3 mb-4" key={card.id}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={card.imgSrc} className="card-img-top" alt={`Image for ${card.title}`} />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.text}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
