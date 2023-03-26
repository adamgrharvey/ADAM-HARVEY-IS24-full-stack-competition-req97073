
// I used ChatGPT to help produce a function to give me all the data I wanted! It was much faster than doing it manually. Although there were some bugs in its code, which I had to address.

function generateProducts() {
  const productNames = ["NovaForge", "VaporQuest", "RazorCore", "ChromeSpark", "SolarHive", "LaserLance", "GalaxyPulse", "ThunderWave", "PixelBloom", "CyberPhoenix", "MagmaLuxe", "CosmoJolt", "NeonNexus", "TidalSurge", "TitanForge", "ArcaneFusion", "CrystalPeak", "ZenithX", "AstralBurst", "AtomicBlaze", "ChaosStorm", "EchoSphere", "RadiantHorizon", "EclipseVortex", "GalacticCrest", "PhoenixPulse", "NebulaFlash", "ShadowQuake", "SonicSprint", "StarForge", "Thunderbolt", "VoltageStrike", "PlasmaSurge", "MysticRift", "IcePulse", "InfernoSpark", "FusionFrenzy", "EnergyRush", "DreamScape", "CosmicNova", "BlazeFusion", "AtomForge", "InfinityBurst"];

  const developers = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "James", lastName: "Johnson" },
    { firstName: "Jasmine", lastName: "Lee" },
    { firstName: "Jake", lastName: "Williams" },
    { firstName: "Julia", lastName: "Brown" },
    { firstName: "Jason", lastName: "Davis" },
    { firstName: "Jessica", lastName: "Miller" },
    { firstName: "Justin", lastName: "Wilson" },
    { firstName: "Jennifer", lastName: "Taylor" },
    { firstName: "Jordan", lastName: "Anderson" },
    { firstName: "Jared", lastName: "Thomas" },
    { firstName: "Jocelyn", lastName: "Jackson" },
    { firstName: "Jack", lastName: "Harris" },
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
  return {
    1: {
      productId: 1,
      productName: "NovaForge",
      productOwnerName: "James Johnson",
      Developers: [
        "Jessica Miller",
        "Jennifer Taylor",
        "Jane Smith",
        "John Doe"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    2: {
      productId: 2,
      productName: "VaporQuest",
      productOwnerName: "Jasmine Lee",
      Developers: [
        "Justin Wilson",
        "Jason Davis",
        "James Johnson",
        "Jane Smith",
        "Jordan Anderson"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    3: {
      productId: 3,
      productName: "RazorCore",
      productOwnerName: "Jenna Martin",
      Developers: [
        "Jordan Anderson",
        "Jared Thomas"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    4: {
      productId: 4,
      productName: "ChromeSpark",
      productOwnerName: "Jenna Martin",
      Developers: [
        "Jordan Anderson",
        "Jenna Martin"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    5: {
      productId: 5,
      productName: "SolarHive",
      productOwnerName: "Jocelyn Jackson",
      Developers: [
        "Jordan Anderson",
        "Jennifer Taylor",
        "Jasmine Lee"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    6: {
      productId: 6,
      productName: "LaserLance",
      productOwnerName: "Julia Brown",
      Developers: [
        "Julia Brown",
        "John Doe",
        "Jared Thomas",
        "Jane Smith"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    7: {
      productId: 7,
      productName: "GalaxyPulse",
      productOwnerName: "Jennifer Taylor",
      Developers: [
        "Julia Brown",
        "John Doe",
        "Jocelyn Jackson",
        "Justin Wilson",
        "Jared Thomas"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    8: {
      productId: 8,
      productName: "ThunderWave",
      productOwnerName: "Jennifer Taylor",
      Developers: [
        "Jake Williams",
        "Jasmine Lee",
        "John Doe",
        "Jocelyn Jackson",
        "Jared Thomas",
        "Jenna Martin"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    9: {
      productId: 9,
      productName: "PixelBloom",
      productOwnerName: "Jake Williams",
      Developers: [
        "Julia Brown",
        "Jessica Miller",
        "Jordan Anderson",
        "Jake Williams",
        "Jack Harris"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    10: {
      productId: 10,
      productName: "CyberPhoenix",
      productOwnerName: "Jasmine Lee",
      Developers: [
        "Jared Thomas",
        "Julia Brown",
        "John Doe",
        "James Johnson",
        "Jennifer Taylor"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    11: {
      productId: 11,
      productName: "MagmaLuxe",
      productOwnerName: "Jared Thomas",
      Developers: [
        "Jane Smith",
        "James Johnson",
        "Jordan Anderson",
        "Justin Wilson",
        "Jared Thomas"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    12: {
      productId: 12,
      productName: "CosmoJolt",
      productOwnerName: "Jake Williams",
      Developers: [
        "James Johnson",
        "Jenna Martin",
        "Julia Brown"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    13: {
      productId: 13,
      productName: "NeonNexus",
      productOwnerName: "Jenna Martin",
      Developers: [
        "Jordan Anderson",
        "Jane Smith",
        "Jack Harris",
        "Jasmine Lee"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    14: {
      productId: 14,
      productName: "TidalSurge",
      productOwnerName: "Jack Harris",
      Developers: [
        "Jasmine Lee",
        "Jessica Miller",
        "Jack Harris",
        "James Johnson",
        "Jared Thomas",
        "Jason Davis"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    15: {
      productId: 15,
      productName: "TitanForge",
      productOwnerName: "Jared Thomas",
      Developers: [
        "John Doe",
        "Jenna Martin",
        "Jason Davis",
        "Jocelyn Jackson"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    16: {
      productId: 16,
      productName: "ArcaneFusion",
      productOwnerName: "Jenna Martin",
      Developers: [
        "Jane Smith",
        "Jack Harris",
        "James Johnson",
        "Jenna Martin",
        "Justin Wilson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    17: {
      productId: 17,
      productName: "CrystalPeak",
      productOwnerName: "John Doe",
      Developers: [
        "John Doe",
        "Julia Brown",
        "Jack Harris",
        "Jenna Martin"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    18: {
      productId: 18,
      productName: "ZenithX",
      productOwnerName: "Jenna Martin",
      Developers: [
        "Jocelyn Jackson",
        "Jasmine Lee",
        "Jenna Martin",
        "Jessica Miller",
        "Jake Williams",
        "Justin Wilson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    19: {
      productId: 19,
      productName: "AstralBurst",
      productOwnerName: "Jack Harris",
      Developers: [
        "Jake Williams",
        "Jennifer Taylor"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    20: {
      productId: 20,
      productName: "AtomicBlaze",
      productOwnerName: "Jane Smith",
      Developers: [
        "Jessica Miller",
        "Justin Wilson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    21: {
      productId: 21,
      productName: "ChaosStorm",
      productOwnerName: "Jordan Anderson",
      Developers: [
        "Jocelyn Jackson",
        "John Doe"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    22: {
      productId: 22,
      productName: "EchoSphere",
      productOwnerName: "Jessica Miller",
      Developers: [
        "James Johnson",
        "Jane Smith",
        "Jake Williams",
        "Jason Davis",
        "Jennifer Taylor",
        "Jordan Anderson"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    23: {
      productId: 23,
      productName: "RadiantHorizon",
      productOwnerName: "Jessica Miller",
      Developers: [
        "Jack Harris",
        "Jane Smith",
        "Jared Thomas",
        "Jocelyn Jackson"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    24: {
      productId: 24,
      productName: "EclipseVortex",
      productOwnerName: "Jordan Anderson",
      Developers: [
        "Jocelyn Jackson",
        "Jasmine Lee"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Waterfall"
    },
    25: {
      productId: 25,
      productName: "GalacticCrest",
      productOwnerName: "Jennifer Taylor",
      Developers: [
        "Jenna Martin",
        "James Johnson",
        "Jordan Anderson",
        "Jocelyn Jackson",
        "Jared Thomas"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    26: {
      productId: 26,
      productName: "PhoenixPulse",
      productOwnerName: "Jessica Miller",
      Developers: [
        "Julia Brown",
        "Jessica Miller",
        "Jenna Martin"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2023-03-26",
      methodology: "Agile"
    },
    27: {
      productId: 27,
      productName: "NebulaFlash",
      productOwnerName: "Jocelyn Jackson",
      Developers: [
        "Jordan Anderson",
        "John Doe"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    28: {
      productId: 28,
      productName: "ShadowQuake",
      productOwnerName: "James Johnson",
      Developers: [
        "Jane Smith",
        "Jake Williams"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    29: {
      productId: 29,
      productName: "SonicSprint",
      productOwnerName: "Jessica Miller",
      Developers: [
        "Jane Smith",
        "Jake Williams",
        "Jenna Martin",
        "Jared Thomas"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    30: {
      productId: 30,
      productName: "StarForge",
      productOwnerName: "John Doe",
      Developers: [
        "James Johnson",
        "Justin Wilson",
        "Jason Davis",
        "John Doe",
        "Jake Williams",
        "Jared Thomas"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    31: {
      productId: 31,
      productName: "Thunderbolt",
      productOwnerName: "Jason Davis",
      Developers: [
        "Jessica Miller",
        "Jocelyn Jackson",
        "Jenna Martin"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    32: {
      productId: 32,
      productName: "VoltageStrike",
      productOwnerName: "Jennifer Taylor",
      Developers: [
        "John Doe",
        "Jared Thomas",
        "Jordan Anderson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    },
    33: {
      productId: 33,
      productName: "PlasmaSurge",
      productOwnerName: "James Johnson",
      Developers: [
        "Jessica Miller",
        "Jenna Martin",
        "Jack Harris",
        "James Johnson",
        "Jennifer Taylor",
        "Jason Davis"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    34: {
      productId: 34,
      productName: "MysticRift",
      productOwnerName: "Jennifer Taylor",
      Developers: [
        "Jenna Martin",
        "Jennifer Taylor",
        "Julia Brown",
        "Justin Wilson"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2022-03-26",
      methodology: "Agile"
    },
    35: {
      productId: 35,
      productName: "IcePulse",
      productOwnerName: "Justin Wilson",
      Developers: [
        "Jake Williams",
        "Jordan Anderson",
        "Justin Wilson",
        "John Doe",
        "Jane Smith",
        "Jenna Martin"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    36: {
      productId: 36,
      productName: "InfernoSpark",
      productOwnerName: "Jocelyn Jackson",
      Developers: [
        "James Johnson",
        "John Doe",
        "Jenna Martin",
        "Jane Smith"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    37: {
      productId: 37,
      productName: "FusionFrenzy",
      productOwnerName: "Jake Williams",
      Developers: [
        "Jared Thomas",
        "Jack Harris",
        "Jenna Martin"
      ],
      scrumMasterName: "Julie Robinson",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    38: {
      productId: 38,
      productName: "EnergyRush",
      productOwnerName: "Julia Brown",
      Developers: [
        "Jake Williams",
        "Jane Smith"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2020-03-26",
      methodology: "Agile"
    },
    39: {
      productId: 39,
      productName: "DreamScape",
      productOwnerName: "Jared Thomas",
      Developers: [
        "Justin Wilson",
        "John Doe",
        "Jason Davis"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2020-03-26",
      methodology: "Waterfall"
    },
    40: {
      productId: 40,
      productName: "CosmicNova",
      productOwnerName: "Jenna Martin",
      Developers: [
        "John Doe",
        "Jessica Miller",
        "Jenna Martin",
        "Justin Wilson"
      ],
      scrumMasterName: "Jennifer Garcia",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    41: {
      productId: 41,
      productName: "BlazeFusion",
      productOwnerName: "Jake Williams",
      Developers: [
        "Jane Smith",
        "Jessica Miller",
        "Jared Thomas",
        "Jennifer Taylor",
        "Jake Williams",
        "Jason Davis"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2023-03-26",
      methodology: "Waterfall"
    },
    42: {
      productId: 42,
      productName: "AtomForge",
      productOwnerName: "Jack Harris",
      Developers: [
        "John Doe",
        "Jack Harris",
        "Jordan Anderson",
        "Julia Brown",
        "Jessica Miller"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2021-03-26",
      methodology: "Agile"
    },
    43: {
      productId: 43,
      productName: "InfinityBurst",
      productOwnerName: "Jack Harris",
      Developers: [
        "Jessica Miller",
        "Justin Wilson",
        "Jake Williams",
        "Jared Thomas"
      ],
      scrumMasterName: "Jason Chen",
      startDate: "2021-03-26",
      methodology: "Waterfall"
    }
  };

}



module.exports = { generateProducts, returnPremadeProducts };