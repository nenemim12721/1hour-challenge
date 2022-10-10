import React from "react";

const Card = () => {
    return  (
        <li className="bicycle__item">
            <img className="bicycle__image" src="https://placehold.jp/262x174.png" width="262" height="174" alt=""/>
            <div className="description">
            <h3 className="description__title">タイトルタイトル</h3>
            <p className="description__text">テキストテキストテキスト</p>
            </div>
        </li>
    );
};

export default Card;