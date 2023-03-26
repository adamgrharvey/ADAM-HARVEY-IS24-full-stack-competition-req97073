
// I used ChatGPT to help produce a function to give me all the data I wanted! It was much faster than doing it manually. Although there were some bugs in its code, which I had to address.

function generateProducts() {
  const productNames = ["NovaForge", "VaporQuest", "RazorCore", "ChromeSpark", "SolarHive", "LaserLance", "GalaxyPulse", "ThunderWave", "PixelBloom", "CyberPhoenix", "MagmaLuxe", "CosmoJolt", "NeonNexus", "TidalSurge", "TitanForge", "ArcaneFusion", "CrystalPeak", "ZenithX", "AstralBurst", "AtomicBlaze", "ChaosStorm", "EchoSphere", "RadiantHorizon", "EclipseVortex", "GalacticCrest", "PhoenixPulse", "NebulaFlash", "ShadowQuake", "SonicSprint", "StarForge", "Thunderbolt", "VoltageStrike", "PlasmaSurge", "MysticRift", "IcePulse", "InfernoSpark", "FusionFrenzy", "EnergyRush", "DreamScape", "CosmicNova", "BlazeFusion", "AtomForge", "InfinityBurst"];

  const developers = [
    { firstName: "Donnell", lastName: "Doe" },
    { firstName: "Trevor", lastName: "Smith" },
    { firstName: "Cameron", lastName: "Johnson" },
    { firstName: "Sasha", lastName: "Lee" },
    { firstName: "Kelsea", lastName: "Williams" },
    { firstName: "Gino", lastName: "Brown" },
    { firstName: "Shyla", lastName: "Davis" },
    { firstName: "Jessica", lastName: "Miller" },
    { firstName: "Justin", lastName: "Wilson" },
    { firstName: "Logan", lastName: "Taylor" },
    { firstName: "Crystal", lastName: "Anderson" },
    { firstName: "Jared", lastName: "Thomas" },
    { firstName: "Clay", lastName: "Jackson" },
    { firstName: "Devin", lastName: "Harris" },
    { firstName: "Jenna", lastName: "Martin" }
  ];
  const scrumMasters = [
    { name: "Julie Robinson" },
    { name: "Jason Chen" },
    { name: "Jennifer Garcia" }
  ];
  const products = {};
  let productId = 1;
  for (let i = 1; i < 44; i++) {
    const productName = productNames[i - 1];
    const developersCopy = [...developers];
    const developersCount = Math.floor(Math.random() * 5) + 2;
    const selectedDevelopers = [];
    for (let j = 0; j < developersCount; j++) {
      const index = Math.floor(Math.random() * developersCopy.length);
      selectedDevelopers.push(developersCopy[index]);
      developersCopy.splice(index, 1);
    }
    const productOwner = selectedDevelopers[0];
    let scrumDecider = Math.random();
    const startDate = new Date(new Date().setFullYear(new Date().getFullYear() - Math.floor(Math.random() * 4))).toISOString().split('T')[0];
    const methodology = Math.random() < 0.5 ? "Waterfall" : "Agile";
    const product = {
      productId,
      productName,
      productOwnerName: productOwner.firstName + " " + productOwner.lastName,
      Developers: selectedDevelopers.map(dev => dev.firstName + " " + dev.lastName),
      scrumMasterName: scrumDecider < 0.33 ? scrumMasters[0].name : scrumDecider < 0.66 ? scrumMasters[1].name : scrumMasters[2].name,
      startDate,
      methodology
    };
    products[i] = product;
    productId++;
  }
  return products;
}

// Used above function to produce an Object of products. I want to use a consistent list so that issues can be more easily noticed and fixed. We will use the below object for the data.

const returnPremadeProducts = function () {
  return ({
    1: {
      productId: 1,
      productName: "NovaForge",
      productOwnerName: "Jenna Martin",
      Developers: [
        "Jenna Martin",
        "Jared Thomas"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    2: {
      productId: 2,
      productName: "VaporQuest",
      productOwnerName: "Jared Thomas",
      Developers: [
        "Jared Thomas",
        "Cameron Johnson",
        "Trevor Smith",
        "Gino Brown",
        "Jessica Miller",
        "Jenna Martin"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    3: {
      productId: 3,
      productName: "RazorCore",
      productOwnerName: "Jessica Miller",
      Developers: [
        "Jessica Miller",
        "Trevor Smith",
        "Shyla Davis",
        "Jenna Martin"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    4: {
      productId: 4,
      productName: "ChromeSpark",
      productOwnerName: "Justin Wilson",
      Developers: [
        "Justin Wilson",
        "Crystal Anderson",
        "Clay Jackson",
        "Kelsea Williams"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    5: {
      productId: 5,
      productName: "SolarHive",
      productOwnerName: "Clay Jackson",
      Developers: [
        "Clay Jackson",
        "Logan Taylor",
        "Crystal Anderson",
        "Donnell Doe",
        "Kelsea Williams",
        "Jared Thomas"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    6: {
      productId: 6,
      productName: "LaserLance",
      productOwnerName: "Jenna Martin",
      Developers: [
        "Jenna Martin",
        "Jared Thomas",
        "Cameron Johnson",
        "Gino Brown"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    7: {
      productId: 7,
      productName: "GalaxyPulse",
      productOwnerName: "Clay Jackson",
      Developers: [
        "Clay Jackson",
        "Donnell Doe",
        "Crystal Anderson",
        "Shyla Davis"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    8: {
      productId: 8,
      productName: "ThunderWave",
      productOwnerName: "Cameron Johnson",
      Developers: [
        "Cameron Johnson",
        "Trevor Smith",
        "Clay Jackson",
        "Jenna Martin",
        "Crystal Anderson"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    9: {
      productId: 9,
      productName: "PixelBloom",
      productOwnerName: "Cameron Johnson",
      Developers: [
        "Cameron Johnson",
        "Shyla Davis"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    10: {
      productId: 10,
      productName: "CyberPhoenix",
      productOwnerName: "Shyla Davis",
      Developers: [
        "Shyla Davis",
        "Trevor Smith",
        "Jared Thomas",
        "Crystal Anderson",
        "Justin Wilson"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    11: {
      productId: 11,
      productName: "MagmaLuxe",
      productOwnerName: "Jessica Miller",
      Developers: [
        "Jessica Miller",
        "Trevor Smith",
        "Justin Wilson",
        "Kelsea Williams"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    12: {
      productId: 12,
      productName: "CosmoJolt",
      productOwnerName: "Cameron Johnson",
      Developers: [
        "Cameron Johnson",
        "Jessica Miller",
        "Clay Jackson",
        "Logan Taylor",
        "Justin Wilson",
        "Trevor Smith"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2020-03-26",
      methodology: "Waterfall"
    },
    13: {
      productId: 13,
      productName: "NeonNexus",
      productOwnerName: "Jared Thomas",
      Developers: [
        "Jared Thomas",
        "Sasha Lee"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    14: {
      productId: 14,
      productName: "TidalSurge",
      productOwnerName: "Trevor Smith",
      Developers: [
        "Trevor Smith",
        "Donnell Doe",
        "Shyla Davis",
        "Justin Wilson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    15: {
      productId: 15,
      productName: "TitanForge",
      productOwnerName: "Clay Jackson",
      Developers: [
        "Clay Jackson",
        "Shyla Davis",
        "Gino Brown",
        "Trevor Smith",
        "Sasha Lee"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    16: {
      productId: 16,
      productName: "ArcaneFusion",
      productOwnerName: "Devin Harris",
      Developers: [
        "Devin Harris",
        "Clay Jackson",
        "Kelsea Williams",
        "Logan Taylor",
        "Jessica Miller"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    17: {
      productId: 17,
      productName: "CrystalPeak",
      productOwnerName: "Jared Thomas",
      Developers: [
        "Jared Thomas",
        "Clay Jackson",
        "Shyla Davis",
        "Jessica Miller"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    18: {
      productId: 18,
      productName: "ZenithX",
      productOwnerName: "Donnell Doe",
      Developers: [
        "Donnell Doe",
        "Crystal Anderson",
        "Cameron Johnson",
        "Gino Brown"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2020-03-26",
      methodology: "Waterfall"
    },
    19: {
      productId: 19,
      productName: "AstralBurst",
      productOwnerName: "Jessica Miller",
      Developers: [
        "Jessica Miller",
        "Crystal Anderson",
        "Clay Jackson",
        "Justin Wilson"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    20: {
      productId: 20,
      productName: "AtomicBlaze",
      productOwnerName: "Jessica Miller",
      Developers: [
        "Jessica Miller",
        "Donnell Doe",
        "Kelsea Williams",
        "Crystal Anderson",
        "Jared Thomas"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    21: {
      productId: 21,
      productName: "ChaosStorm",
      productOwnerName: "Shyla Davis",
      Developers: [
        "Shyla Davis",
        "Justin Wilson",
        "Trevor Smith",
        "Crystal Anderson",
        "Jared Thomas"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    22: {
      productId: 22,
      productName: "EchoSphere",
      productOwnerName: "Donnell Doe",
      Developers: [
        "Donnell Doe",
        "Gino Brown",
        "Jared Thomas",
        "Jenna Martin",
        "Jessica Miller"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    23: {
      productId: 23,
      productName: "RadiantHorizon",
      productOwnerName: "Logan Taylor",
      Developers: [
        "Logan Taylor",
        "Clay Jackson",
        "Gino Brown"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Waterfall"
    },
    24: {
      productId: 24,
      productName: "EclipseVortex",
      productOwnerName: "Crystal Anderson",
      Developers: [
        "Crystal Anderson",
        "Kelsea Williams",
        "Jared Thomas"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    25: {
      productId: 25,
      productName: "GalacticCrest",
      productOwnerName: "Shyla Davis",
      Developers: [
        "Shyla Davis",
        "Crystal Anderson",
        "Gino Brown"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    26: {
      productId: 26,
      productName: "PhoenixPulse",
      productOwnerName: "Gino Brown",
      Developers: [
        "Gino Brown",
        "Donnell Doe"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    27: {
      productId: 27,
      productName: "NebulaFlash",
      productOwnerName: "Clay Jackson",
      Developers: [
        "Clay Jackson",
        "Sasha Lee",
        "Gino Brown"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    28: {
      productId: 28,
      productName: "ShadowQuake",
      productOwnerName: "Kelsea Williams",
      Developers: [
        "Kelsea Williams",
        "Logan Taylor",
        "Jenna Martin"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    29: {
      productId: 29,
      productName: "SonicSprint",
      productOwnerName: "Cameron Johnson",
      Developers: [
        "Cameron Johnson",
        "Shyla Davis"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Waterfall"
    },
    30: {
      productId: 30,
      productName: "StarForge",
      productOwnerName: "Kelsea Williams",
      Developers: [
        "Kelsea Williams",
        "Jessica Miller",
        "Devin Harris",
        "Jared Thomas"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    31: {
      productId: 31,
      productName: "Thunderbolt",
      productOwnerName: "Trevor Smith",
      Developers: [
        "Trevor Smith",
        "Gino Brown",
        "Jessica Miller",
        "Devin Harris",
        "Kelsea Williams"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    32: {
      productId: 32,
      productName: "VoltageStrike",
      productOwnerName: "Sasha Lee",
      Developers: [
        "Sasha Lee",
        "Cameron Johnson",
        "Donnell Doe",
        "Jenna Martin"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2020-03-26",
      methodology: "Waterfall"
    },
    33: {
      productId: 33,
      productName: "PlasmaSurge",
      productOwnerName: "Jessica Miller",
      Developers: [
        "Jessica Miller",
        "Justin Wilson",
        "Gino Brown",
        "Trevor Smith",
        "Kelsea Williams",
        "Jared Thomas"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    34: {
      productId: 34,
      productName: "MysticRift",
      productOwnerName: "Logan Taylor",
      Developers: [
        "Logan Taylor",
        "Clay Jackson",
        "Jenna Martin",
        "Crystal Anderson",
        "Jessica Miller"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    35: {
      productId: 35,
      productName: "IcePulse",
      productOwnerName: "Jenna Martin",
      Developers: [
        "Jenna Martin",
        "Justin Wilson"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    36: {
      productId: 36,
      productName: "InfernoSpark",
      productOwnerName: "Cameron Johnson",
      Developers: [
        "Cameron Johnson",
        "Donnell Doe"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    37: {
      productId: 37,
      productName: "FusionFrenzy",
      productOwnerName: "Clay Jackson",
      Developers: [
        "Clay Jackson",
        "Jessica Miller",
        "Shyla Davis"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    38: {
      productId: 38,
      productName: "EnergyRush",
      productOwnerName: "Kelsea Williams",
      Developers: [
        "Kelsea Williams",
        "Clay Jackson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    39: {
      productId: 39,
      productName: "DreamScape",
      productOwnerName: "Kelsea Williams",
      Developers: [
        "Kelsea Williams",
        "Cameron Johnson",
        "Jessica Miller",
        "Logan Taylor"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    40: {
      productId: 40,
      productName: "CosmicNova",
      productOwnerName: "Justin Wilson",
      Developers: [
        "Justin Wilson",
        "Sasha Lee",
        "Clay Jackson",
        "Logan Taylor"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    41: {
      productId: 41,
      productName: "BlazeFusion",
      productOwnerName: "Trevor Smith",
      Developers: [
        "Trevor Smith",
        "Jessica Miller",
        "Devin Harris",
        "Donnell Doe",
        "Kelsea Williams",
        "Gino Brown"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    42: {
      productId: 42,
      productName: "AtomForge",
      productOwnerName: "Kelsea Williams",
      Developers: [
        "Kelsea Williams",
        "Jared Thomas",
        "Justin Wilson",
        "Jessica Miller",
        "Jenna Martin"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    43: {
      productId: 43,
      productName: "InfinityBurst",
      productOwnerName: "Clay Jackson",
      Developers: [
        "Clay Jackson",
        "Justin Wilson",
        "Sasha Lee",
        "Shyla Davis",
        "Trevor Smith"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2020-03-26",
      methodology: "Agile"
    }
  });


}

module.exports = { generateProducts, returnPremadeProducts };