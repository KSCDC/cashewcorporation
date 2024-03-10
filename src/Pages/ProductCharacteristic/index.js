const gradeAData = {
  title: "A - Cashew Kernels White Wholes",
  headers: [
    "Grade Designation",
    "Trade Name",
    "Colour/Characteristics",
    "Count/454gms Size Description",
    "Maximum Moisture %",
    "Broken Max %",
    "NLSG NLG Max %",
  ],
  rows: [
    [
      "W180",
      "White Wholes",
      "White/pale ivory/Light ash/Characteristic shape",
      "170-180",
      "5",
      "5",
      "5 (NLSG & SW together)",
    ],
    ["W210", "Do", "Do", "200-210", "5", "5", "Do"],
    ["W240", "Do", "Do", "220-240", "5", "5", "Do"],
    ["W320", "Do", "Do", "300-320", "5", "5", "Do"],
    ["W450", "Do", "Do", "400-450", "5", "5", "Do"],
    ["W500", "Do", "Do", "450-500", "5", "5", "5(SW)"],
  ],
  remark:
    "Remarks: Kernels shall be completely free from infestation, insect damage, mould, rancidity, adhering testa and objectionable extraneous matter. Scraped and partially shriveled kernels also permitted provided such scraping/shriveling does not affect the characteristic shape of the kernel.",
};

const gradeBData = {
  title: "B - CASHEW KERNELS SCORCHED WHOLES",
  headers: [
    "Grade Designation",
    "Trade Name",
    "Colour/Characteristics",
    "Count/454gms Size Description",
    "Maximum Moisture %",
    "Broken Max %",
    "NLSG NLG Max %",
  ],
  rows: [
    [
      "SW",
      "Scorched Wholes",
      "Kernels may be scorched/slightly darkened due to Over-heating while roasting or drying in drier/borma",
      "N.A",
      "5",
      "5",
      "7.5(SSW)",
    ],
    ["SW 180", "Do", "Do", "170-180", "5", "5", "7.5(NLSG & SSW togeth.)"],
    ["SW 210", "Do", "Do", "200-210", "5", "5", "Do"],
    ["SW 240", "Do", "Do", "220-240", "5", "5", "Do"],
    ["SW 320", "Do", "Do", "300-320", "5", "5", "Do"],
    ["SW 450", "Do", "Do", "400-450", "5", "5", "Do"],
    ["SW 500", "Do", "Do", "450-500", "5", "5", "7.5(SSW)"],
  ],
  remark:
    "Remarks: Kernels shall be completely free from infestation, insect damage, mould, rancidity, adhering testa and objectionable extraneous matter. Scraped and partially shriveled kernels also permitted provided such scraping/shriveling does not affect the characteristic shape of the kernel.",
};
const gradeCData = {
  title: "C - CASHEW KERNELS DESSERT WHOLES",
  headers: [
    "Grade Designation",
    "Trade Name",
    "Colour/Characteristics",
    "Count/454gms Size description",
    "Maximum Moisture %",
    "Broken Max %",
    "NLSG NLG Max %",
  ],
  rows: [
    [
      "SSW",
      "Scorched Wholes Seconds",
      "Kernels may be over scorched, immature, Shriveled (pirival), Speckled (karaniram), Discoloured and light blue",
      "NA",
      "5",
      "5",
      "7.5",
    ],
    [
      "DW",
      "Desert Wholes",
      "Kernels may be deep scorched, deep brown, deep blue, speckled, dis-coloured and black Spotted.",
      "NA",
      "5",
      "5",
      "--",
    ],
  ],
  remark:
    "Remarks: Kernels shall be completely free from infestation, insect damage, mould, rancidity, adhering testa and objectionable extraneous matter.",
};

const gradeDData = {
  title: "D - CASHEW KERNELS WHITE PIECES",
  headers: [
    "Grade Designation",
    "Trade Name",
    "Colour/Characteristics",
    "Count/454gms size description",
    "Maximum Moisture %",
    "Broken Max %",
    "NLSG NLG Max %",
  ],
  rows: [
    [
      "B",
      "Butts",
      "White/pale ivory or light ash. Kernels broken cross-wise (evenly or unevenly) naturally attached.",
      "NA",
      "5",
      "5",
      "5 (SB)",
    ],
    [
      "S",
      "Splits",
      "White/pale ivory or light ash. Kernels split naturally lengthwise.",
      "NA",
      "5",
      "5",
      "5(SS)",
    ],
    [
      "LWP",
      "Large White Pieces",
      "White/pale ivory or light ash",
      "Kernels broken into more than two pieces and not passing through 4 mesh 16 SWG sieve/4.75mm. I.S.Sieve",
      "5",
      "Nil",
      "5 (SW & SP together)",
    ],
  ],
  remark:
    "Remarks: Kernels shall be completely free from infestation, insect damage, mould, rancidity, adhering testa and objectionable extraneous matter. Scraped and partially shriveled kernels also permitted provided such scraping/shriveling does not affect the characteristic shape of the kernel.",
};
const gradeDContData = {
  title: "D - CASHEW KERNELS WHITE PIECES (Contd.)",
  headers: [
    "Grade Designation",
    "Trade Name",
    "Colour Characteristics",
    "Count 454 gms size description",
    "Maximum Moisture %",
    "Broken Max %",
    "NLSG NLG Max %",
  ],
  rows: [
    [
      "SWP",
      "Small white pieces",
      "White/pale ivory or light ash",
      "Broken kernels smaller than those described on LWP but not passing through 6 mesh 20 SWG sieve/2.80mm I.S Sieve",
      "5",
      "Nil",
      "5 (BB & SSP Together)",
    ],
    [
      "BB",
      "Baby Bits",
      "Do",
      "Plemules & broken kernels smaller than those described as SWP but not passing through a 10 mesh 24 SWG Sieve/1.70 mm I.S.Sieve",
      "5",
      "Nil",
      "1% (Cashew Powder)",
    ],
  ],
  remark:
    "Remarks: Kernels shall be completely free from infestation, insect damage, mould, rancidity, adhering testa and objectionable extraneous matter.",
};
const gradeEData = {
  title: "E - CASHEW KERNELS SCORCHED PIECES",
  headers: [
    "Grade Designation",
    "Trade Name",
    "Colour/Characteristic",
    "Count/454gms Size Description",
    "Maximum Moisture %",
    "Broken Max %",
    "NLSG NLG Max %",
  ],
  rows: [
    [
      "SB",
      "Scorched Butts",
      "Kernels broken crosswise (evenly or unevenly & naturally attached). Kernels may be scorched/slightly darkened due to over-heating while roasting or drying in the drier/borma.",
      "NA",
      "5",
      "5",
      "7.5 (DB)",
    ],
    [
      "SS",
      "Scorched Splits",
      "Kernels split naturally lengthwise. Kernels may be scorched/slightly darkened due to over-heating while roasting or drying in drier/borma.",
      "NA",
      "5",
      "5",
      "7.5 (DS)",
    ],
    [
      "SP",
      "Scorched Pieces",
      "Kernels may be scorched/slightly darkened due to over-heating while roasting or drying in drier/borma.",
      "Pieces not passing through a 4 mesh 16 SWG sieve/4.75 mm I.S. Sieve",
      "5",
      "Nil",
      "7.5 (SSP & SPS together)",
    ],
    [
      "SSP",
      "Scorched Small Pieces",
      "Kernels may be scorched/slightly darkened due to over-heating while roasting or drying in drier/borma.",
      "Pieces smaller than SP but not passing through a 6 mesh 20 SWG Sieve/2.80 mm I.S. Sieve",
      "5",
      "Nil",
      "5 (DSP)",
    ],
  ],
  remark:
    "Remarks: Kernels shall be completely free from infestation, insect damage, mould, rancidity, adhering testa and objectionable extraneous matter. Scraped and partially shriveled kernels also permitted provided such scraping/shriveling does not affect the characteristic shape of the kernel.",
};

const gradeFData = {
  title: "Scorched Pieces Second & Dessert Pieces",
  headers: [
    "Grade Designation",
    "Trade Name",
    "Colour/Characteristic",
    "Count/454gms Size description",
    "Maximum Moisture %",
    "Broken Max %",
    "NLSG NLG Max %",
  ],
  rows: [
    [
      "SPS",
      "Scorched Pieces Second",
      "Kernels may be over scorched, immature, shriveled (Pirival), speckled (Karaniram), discoloured and light blue.",
      " Kernels broken into pieces but not passing through a 4 mesh 16 SWG sieve/4.75 mm I.S. Sieve.",
      "5",
      "Nil",
      "7.5 (DP & DSP together)",
    ],
    [
      "DP",
      "Dessert Pieces",
      "Kernels may be deep scorched, deep brown, deep blue, speckled, discoloured & black spotted.",
      " Kernels broken into pieces but not passing through a 4 mesh 16 SWG sieve/4.75 mm I.S. Sieve.",
      "5",
      "Nil",
      "7.5 (DSP)",
    ],
  ],
  remark:
    "Remarks: Kernels shall be completely free from infestation, insect damage, mould, rancidity, adhering testa and objectionable extraneous matter.\n\nNLSG denotes: Next Lower Size Grade, NLG denotes: Next Lower Grade",
};

export {
  gradeAData,
  gradeBData,
  gradeCData,
  gradeDContData,
  gradeDData,
  gradeEData,
  gradeFData,
};
