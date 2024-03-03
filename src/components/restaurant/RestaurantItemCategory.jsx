import CardItem from "./CardItem";

const RestaurantItemCategory = ({ itemCategory, showItem, setShowIndex }) => {
  const items = itemCategory?.card?.card?.itemCards;

  const clickHandle = () => setShowIndex();

  return (
    <div className="py-4">
      <div
        onClick={clickHandle}
        className="flex justify-between items-center cursor-pointer"
      >
        <span className="font-bold px-3 text-[17px]">
          {itemCategory?.card?.card?.title} (
          {itemCategory?.card?.card?.itemCards.length})
        </span>
        <span className="text-2xl">
          {showItem ? (
            <i className="ri-arrow-up-s-line"></i>
          ) : (
            <i className="ri-arrow-down-s-line"></i>
          )}
        </span>
      </div>

      {showItem && (
        <div className="mt-10">
          <div className="item-container">
            {items.map((item) => {
              return <CardItem key={item.card.info.id} infoData={item} />;
            })}
          </div>
        </div>
      )}

      <div className="h-3 mt-3" style={{ backgroundColor: "#F1F1F6" }}></div>
    </div>
  );
};

export default RestaurantItemCategory;