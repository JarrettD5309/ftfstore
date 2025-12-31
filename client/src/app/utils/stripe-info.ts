type itemIDToStripe = {
  itemID: string;
  priceID: string;
};

const stripPriceIDs: itemIDToStripe[] = [
  {itemID: 'ftf001', priceID: 'price_1R8mJEAthGHyEEe1N3ms1Gvz'},
  {itemID: '34trolleyt001l', priceID: 'price_1SkRsxAthGHyEEe1jmIhsjXP'},
  {itemID: '34trolleyt001xl', priceID: 'price_1SkRsrAthGHyEEe1VgDbAFQS'},
];

export const getStripePriceID = (itemID: string) => {
  return stripPriceIDs.find(item => item.itemID === itemID)?.priceID;
}