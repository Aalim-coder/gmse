import React from "react";
import useSearchContext from "../hooks/useSearchContext.jsx"
import CARD from "./card.jsx";
import Spinner from "./Spinner.jsx";

function CreateArea() {
    const {data,setData,loading} = useSearchContext();

    const renderCardMaker = () => {
        return data?.map((item) => (
            <CARD
                key={item.id}
                name={item.name}
                link={item.link}
                img={item.img}
                price={item.price}
                stars={item.stars}
                ratingsCount={item.ratingsCount}
            />
        ));
    };

    return (
        <div className="cardMaker">
            {loading && <Spinner/>}
            {data && renderCardMaker()}
        </div>
    );
}

export default CreateArea;
