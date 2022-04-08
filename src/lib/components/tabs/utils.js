
export const handleTokenSelection = (tokens, id) => {
  var isSelected = tokens[id].selected;
  tokens[id].selected = !isSelected;
};

export const handleCollectionSelection = (collections, id) => {
  var isSelected = collections[id].selected;
  collections[id].selected = !isSelected;
}

export const handleEvent = (event, id, dispatch) => {
  dispatch("message", {
    event,
    id,
  });
};
