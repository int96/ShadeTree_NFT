const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "ST_[]_SDS";
const description = "Your Descriptin Here";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
//external_url: "https://www.youtube.com/c/hashlipsnft",
  external_url: "https://www.twitch.tv/deedee_lighthouse",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAIN 

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 33, // How many you want 
    layersOrder: [
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BackGround Check 

  // knowledge givin
  {name: "Background"}, 
  {
    name: "Background" ,
    options: {
      blend: MODE.lighter,
      opacity: 1.0,
      displayName: "Background lighter",
    },
    },
    {
      name: "Background" ,
      options: {
        blend: MODE.exclusion,
        opacity: 1.0,
        displayName: "Background exclusion",
      },
      },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 10perfect  
  {name: "10percent"}, // needs a good starting TOP layer. :: Painted layers with opacity :: 
  {
    name: "10percent",
    options: {
      blend: MODE.exclusion,
      opacity: 1.0,
      displayName: "10 exclusion",
    },
  },
  {
    name: "10percent",
    options: {
      blend: MODE.multiply,
      opacity: 1.0,
      displayName: "10 multiply",
    },
  },
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  // background revisit ???
  {
    name: "Background",
    options: {
      blend: MODE.difference,
      opacity: .3,
      displayName: "BGDIFF.3OPC",
    },
  },
  {
    name: "Background2",
    options: {
      blend: MODE.difference,
      opacity: 1.0,
      displayName: "BG2DIFF.3OPC",
    },
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // BLOBS ?????
  {
    name: "blobs",
    options: {
      blend: MODE.difference,
      opacity: .3,
      displayName: "blobs:difference",
    },
  },
  {
    name: "blobs",
    options: {
      blend: MODE.multiply,
      opacity: .3,
      displayName: "blobs:difference",
    },
  },

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Signatures 

{name: "Signature"},
],
},
];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OPTION GLOBAL 
const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width:  1080,
  height: 1080,
  smoothing: false,
};

const gif = {
  export: false,
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
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
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
