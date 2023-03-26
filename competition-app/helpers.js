
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
    const productOwner = developers[Math.floor(Math.random() * developers.length)];
    const developersCopy = [...developers];
    const developersCount = Math.floor(Math.random() * 5) + 2;
    const selectedDevelopers = [];
    for (let j = 0; j < developersCount; j++) {
      const index = Math.floor(Math.random() * developersCopy.length);
      selectedDevelopers.push(developersCopy[index]);
      developersCopy.splice(index, 1);
    }
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
      productOwnerName: "Devin Harris",
      Developers: [
        "Logan Taylor",
        "Jared Thomas"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    2: {
      productId: 2,
      productName: "VaporQuest",
      productOwnerName: "Clay Jackson",
      Developers: [
        "Clay Jackson",
        "Kelsea Williams",
        "Gino Brown",
        "Crystal Anderson"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    3: {
      productId: 3,
      productName: "RazorCore",
      productOwnerName: "Cameron Johnson",
      Developers: [
        "Gino Brown",
        "Jenna Martin",
        "Justin Wilson"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    4: {
      productId: 4,
      productName: "ChromeSpark",
      productOwnerName: "Devin Harris",
      Developers: [
        "Donnell Doe",
        "Kelsea Williams"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    5: {
      productId: 5,
      productName: "SolarHive",
      productOwnerName: "Sasha Lee",
      Developers: [
        "Logan Taylor",
        "Jenna Martin",
        "Kelsea Williams",
        "Donnell Doe",
        "Devin Harris"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    6: {
      productId: 6,
      productName: "LaserLance",
      productOwnerName: "Cameron Johnson",
      Developers: [
        "Jessica Miller",
        "Shyla Davis",
        "Devin Harris",
        "Clay Jackson",
        "Gino Brown"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    7: {
      productId: 7,
      productName: "GalaxyPulse",
      productOwnerName: "Donnell Doe",
      Developers: [
        "Gino Brown",
        "Justin Wilson",
        "Logan Taylor",
        "Jared Thomas",
        "Devin Harris",
        "Cameron Johnson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    8: {
      productId: 8,
      productName: "ThunderWave",
      productOwnerName: "Sasha Lee",
      Developers: [
        "Kelsea Williams",
        "Cameron Johnson",
        "Donnell Doe"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    9: {
      productId: 9,
      productName: "PixelBloom",
      productOwnerName: "Cameron Johnson",
      Developers: [
        "Logan Taylor",
        "Gino Brown"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    10: {
      productId: 10,
      productName: "CyberPhoenix",
      productOwnerName: "Trevor Smith",
      Developers: [
        "Logan Taylor",
        "Kelsea Williams",
        "Jessica Miller",
        "Donnell Doe",
        "Crystal Anderson",
        "Devin Harris"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    11: {
      productId: 11,
      productName: "MagmaLuxe",
      productOwnerName: "Justin Wilson",
      Developers: [
        "Kelsea Williams",
        "Logan Taylor",
        "Gino Brown",
        "Shyla Davis",
        "Cameron Johnson"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    12: {
      productId: 12,
      productName: "CosmoJolt",
      productOwnerName: "Sasha Lee",
      Developers: [
        "Shyla Davis",
        "Kelsea Williams",
        "Trevor Smith"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    13: {
      productId: 13,
      productName: "NeonNexus",
      productOwnerName: "Justin Wilson",
      Developers: [
        "Justin Wilson",
        "Devin Harris",
        "Clay Jackson",
        "Donnell Doe",
        "Logan Taylor",
        "Trevor Smith"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Waterfall"
    },
    14: {
      productId: 14,
      productName: "TidalSurge",
      productOwnerName: "Jenna Martin",
      Developers: [
        "Jessica Miller",
        "Jenna Martin"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Waterfall"
    },
    15: {
      productId: 15,
      productName: "TitanForge",
      productOwnerName: "Donnell Doe",
      Developers: [
        "Clay Jackson",
        "Sasha Lee"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    16: {
      productId: 16,
      productName: "ArcaneFusion",
      productOwnerName: "Clay Jackson",
      Developers: [
        "Donnell Doe",
        "Shyla Davis",
        "Justin Wilson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    17: {
      productId: 17,
      productName: "CrystalPeak",
      productOwnerName: "Sasha Lee",
      Developers: [
        "Jared Thomas",
        "Crystal Anderson"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    18: {
      productId: 18,
      productName: "ZenithX",
      productOwnerName: "Sasha Lee",
      Developers: [
        "Trevor Smith",
        "Clay Jackson",
        "Gino Brown",
        "Jenna Martin",
        "Crystal Anderson"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    19: {
      productId: 19,
      productName: "AstralBurst",
      productOwnerName: "Shyla Davis",
      Developers: [
        "Jenna Martin",
        "Cameron Johnson"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    20: {
      productId: 20,
      productName: "AtomicBlaze",
      productOwnerName: "Devin Harris",
      Developers: [
        "Trevor Smith",
        "Logan Taylor",
        "Jenna Martin",
        "Gino Brown",
        "Clay Jackson",
        "Donnell Doe"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    21: {
      productId: 21,
      productName: "ChaosStorm",
      productOwnerName: "Sasha Lee",
      Developers: [
        "Jenna Martin",
        "Shyla Davis",
        "Logan Taylor",
        "Crystal Anderson",
        "Donnell Doe",
        "Trevor Smith"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    22: {
      productId: 22,
      productName: "EchoSphere",
      productOwnerName: "Shyla Davis",
      Developers: [
        "Jared Thomas",
        "Crystal Anderson",
        "Logan Taylor",
        "Donnell Doe"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    23: {
      productId: 23,
      productName: "RadiantHorizon",
      productOwnerName: "Clay Jackson",
      Developers: [
        "Jenna Martin",
        "Cameron Johnson",
        "Donnell Doe",
        "Logan Taylor",
        "Justin Wilson",
        "Clay Jackson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    24: {
      productId: 24,
      productName: "EclipseVortex",
      productOwnerName: "Donnell Doe",
      Developers: [
        "Jared Thomas",
        "Cameron Johnson",
        "Sasha Lee"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    25: {
      productId: 25,
      productName: "GalacticCrest",
      productOwnerName: "Jenna Martin",
      Developers: [
        "Cameron Johnson",
        "Kelsea Williams",
        "Gino Brown",
        "Jessica Miller",
        "Jared Thomas",
        "Trevor Smith"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    26: {
      productId: 26,
      productName: "PhoenixPulse",
      productOwnerName: "Kelsea Williams",
      Developers: [
        "Jenna Martin",
        "Shyla Davis",
        "Gino Brown",
        "Clay Jackson",
        "Crystal Anderson"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    27: {
      productId: 27,
      productName: "NebulaFlash",
      productOwnerName: "Kelsea Williams",
      Developers: [
        "Crystal Anderson",
        "Jessica Miller",
        "Trevor Smith",
        "Donnell Doe"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    28: {
      productId: 28,
      productName: "ShadowQuake",
      productOwnerName: "Kelsea Williams",
      Developers: [
        "Kelsea Williams",
        "Logan Taylor",
        "Trevor Smith",
        "Sasha Lee",
        "Devin Harris",
        "Crystal Anderson"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    29: {
      productId: 29,
      productName: "SonicSprint",
      productOwnerName: "Devin Harris",
      Developers: [
        "Gino Brown",
        "Justin Wilson",
        "Crystal Anderson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    30: {
      productId: 30,
      productName: "StarForge",
      productOwnerName: "Crystal Anderson",
      Developers: [
        "Shyla Davis",
        "Jenna Martin",
        "Donnell Doe"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    31: {
      productId: 31,
      productName: "Thunderbolt",
      productOwnerName: "Cameron Johnson",
      Developers: [
        "Logan Taylor",
        "Donnell Doe",
        "Devin Harris"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    32: {
      productId: 32,
      productName: "VoltageStrike",
      productOwnerName: "Logan Taylor",
      Developers: [
        "Crystal Anderson",
        "Trevor Smith",
        "Jenna Martin"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    33: {
      productId: 33,
      productName: "PlasmaSurge",
      productOwnerName: "Clay Jackson",
      Developers: [
        "Crystal Anderson",
        "Jared Thomas",
        "Kelsea Williams",
        "Clay Jackson",
        "Logan Taylor"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2020-03-26",
      methodology: "Waterfall"
    },
    34: {
      productId: 34,
      productName: "MysticRift",
      productOwnerName: "Shyla Davis",
      Developers: [
        "Gino Brown",
        "Jessica Miller",
        "Justin Wilson",
        "Crystal Anderson",
        "Shyla Davis"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Waterfall"
    },
    35: {
      productId: 35,
      productName: "IcePulse",
      productOwnerName: "Trevor Smith",
      Developers: [
        "Cameron Johnson",
        "Kelsea Williams",
        "Clay Jackson",
        "Justin Wilson",
        "Jessica Miller"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    36: {
      productId: 36,
      productName: "InfernoSpark",
      productOwnerName: "Crystal Anderson",
      Developers: [
        "Clay Jackson",
        "Logan Taylor",
        "Gino Brown",
        "Sasha Lee",
        "Devin Harris",
        "Donnell Doe"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    37: {
      productId: 37,
      productName: "FusionFrenzy",
      productOwnerName: "Sasha Lee",
      Developers: [
        "Crystal Anderson",
        "Jared Thomas",
        "Jenna Martin",
        "Clay Jackson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    38: {
      productId: 38,
      productName: "EnergyRush",
      productOwnerName: "Trevor Smith",
      Developers: [
        "Donnell Doe",
        "Kelsea Williams",
        "Shyla Davis"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    39: {
      productId: 39,
      productName: "DreamScape",
      productOwnerName: "Shyla Davis",
      Developers: [
        "Sasha Lee",
        "Cameron Johnson",
        "Justin Wilson",
        "Jessica Miller",
        "Kelsea Williams",
        "Jared Thomas"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    40: {
      productId: 40,
      productName: "CosmicNova",
      productOwnerName: "Donnell Doe",
      Developers: [
        "Gino Brown",
        "Donnell Doe"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    41: {
      productId: 41,
      productName: "BlazeFusion",
      productOwnerName: "Kelsea Williams",
      Developers: [
        "Cameron Johnson",
        "Donnell Doe"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    42: {
      productId: 42,
      productName: "AtomForge",
      productOwnerName: "Devin Harris",
      Developers: [
        "Crystal Anderson",
        "Clay Jackson",
        "Shyla Davis",
        "Devin Harris",
        "Justin Wilson"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    43: {
      productId: 43,
      productName: "InfinityBurst",
      productOwnerName: "Jenna Martin",
      Developers: [
        "Crystal Anderson",
        "Shyla Davis",
        "Sasha Lee",
        "Donnell Doe"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Agile"
    }
  });


}

module.exports = { generateProducts, returnPremadeProducts };