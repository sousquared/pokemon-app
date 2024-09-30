import React from "react";

// アロー関数でコンポーネントを定義
const PokemonThumbnails = ({ id, name, image, iconImage, type, jpName, jpType }) => {
  return (
    <div className="thumb-container grass">
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <img src={iconImage} alt={name} className="icon-image" />
      <div className="detail-wrapper">
      <h4>{jpName ?? name}</h4>
        <h3>タイプ: {jpType ?? type}</h3>
      </div>
    </div>
  );
};

// デフォルトエクスポートする
export default PokemonThumbnails;
