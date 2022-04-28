import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'NerdBitzS1',
  tokenName: 'Nerdbitz Season 1',
  tokenSymbol: 'NBZ1',
  hiddenMetadataUri: 'ipfs://QmbgCfUksZ8wdecFX5Kp27gcjtoWyZ1Gs7vtbXjKrtP8f2/hidden.json',
  maxSupply: 100,
  whitelistSale: {
    price: 5,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 10,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 20,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x59Efaa11f9871178CE55742dB7F43Bb8cDcCa63f",
  marketplaceIdentifier: 'nerdbitz-season-1',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
