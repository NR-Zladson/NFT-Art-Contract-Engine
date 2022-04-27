const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Nerdling";
const description = "It lives inside all of us.";
const baseUri = "ipfs://QmVPu2WnTxD5Xdq6yaxXKfqgLnLWg7tazEyNE1cazu6gE8";

const solanaMetadata = {
  symbol: "NR",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://nerdragermt.com",
  creators: [
    {
      address: "0xa774f308ad8173f4369b9a98284ca856e7598bb0",
      share: 100,
    },
  ],
};

const layerConfigurations = [
  {
    growEditionSizeTo: 100, //Number of images to create, add to this number to create more variations of already created collections
    layersOrder: [  //Change the Layer names below to match the names of the folders the layers are in
      { name: "Background" },
      { name: "Nerdling" },
      { name: "Bow Tie" },
      { name: "Hat" },
      { name: "Cane" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: true,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 32 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  Designer: "James Evanson",
  Programmer: "Zach Ladson"
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 20,
  thumbWidth: 30,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
