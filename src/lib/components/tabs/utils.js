
export const handleTokenSelection = (tokens, id) => {
  var isSelected = tokens[id].selected;
  tokens[id].selected = !isSelected;
  console.log("new tokens", tokens);
};

export const handleCollectionSelection = (collections, id) => {
  var isSelected = collections[id].selected;
  collections[id].selected = !isSelected;
  console.log("new collections", collections);
}

export const handleEvent = (event, id, dispatch) => {
  dispatch("message", {
    event,
    id,
  });
};
