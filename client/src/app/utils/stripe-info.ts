type itemIDToStripe = {
  itemID: string;
  priceID: string;
};

const stripPriceIDs: itemIDToStripe[] = [
  {itemID: 'ftf001', priceID: 'price_1R8mJEAthGHyEEe1N3ms1Gvz'},
];

export const getStripePriceID = (itemID: string) => {
  return stripPriceIDs.find(item => item.itemID === itemID)?.priceID;
}