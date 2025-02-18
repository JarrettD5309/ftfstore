type itemIDToStripe = {
  itemID: string;
  priceID: string;
};

const stripPriceIDs: itemIDToStripe[] = [
  {itemID: 'ftf001', priceID: 'price_1QoXfKAthGHyEEe1h7ScHrT3'}
];

export const getStripePriceID = (itemID: string) => {
  return stripPriceIDs.find(item => item.itemID === itemID)?.priceID;
}