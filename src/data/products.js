import capacity6to8 from "../assets/Untitled design (7).png";
import capacity10to12 from "../assets/Untitled design (8).png";
import capacity15to26 from "../assets/Untitled design (9).png";
import capacity30to35 from "../assets/Untitled design (6).png";
import compact6 from "../assets/6-L.png";
import compact75 from "../assets/7.5-L.png";
import compact85 from "../assets/8.5-L.png";

import standard10 from "../assets/10-L.png";
import standard12 from "../assets/12-L.png";

import heavy15 from "../assets/15-L.png";
import heavy20 from "../assets/20-L.png";
import heavy26 from "../assets/26-L.png";

export const categories = [
  {
    title: "Compact Buckets",
    capacity: "6L – 8.5L",
    image: capacity6to8,
    categoryId: "compact",
  },
  {
    title: "Standard Buckets",
    capacity: "10L – 12L",
    image: capacity10to12,
    categoryId: "standard",
  },
  {
    title: "Heavy Duty Buckets",
    capacity: "15L – 26L",
    image: capacity15to26,
    categoryId: "heavy",
  },
];

export const products = [

{
id:1,
name:"6L Lubricant Container",
slug:"6l-lubricant-container",
capacity:"6L",
categoryId:"compact",
image:compact6,

model:{containerModel:"07000C",lidModel:"07000U",handleModel:"BHG07200W"},

identification:{containerType:"Conical",lidType:"New spout design",handleType:"Metal"},

dimensions:{
brimfulVolumeML:7250,
grossVolumeML:7000,
diameterTopMM:243.5,
neckOpeningMM:217,
maxOuterDiameterMM:239,
diameterBottomMM:210,
heightMM:218.5,
maxHeightAfterLidMM:220,
lidHeightMM:31.9,
lidMaxODMM:240.5,
lidInnerProfileMM:217
},

material:{container:"PPCP",lid:"PPCP"},

thickness:{sideWallMM:1.25,bottomMM:1.4,lidTopMM:1},

stacking:{inStorage:"1+5",inTransit:"1+4"},

weight:{containerGram:285,lidGram:110,handleGram:25,totalGram:420},

artwork:{silkScreenArea:"135×615 mm"},

compressionStrengthKG:350
},

{
id:2,
name:"7.5L Lubricant Container",
slug:"7-5l-lubricant-container",
capacity:"7.5L",
categoryId:"compact",
image:compact75,

model:{containerModel:"85100C-4/5",lidModel:"8510U-4/5",handleModel:"BHG08400W"},

identification:{containerType:"Conical",lidType:"In mould spout lid",handleType:"Metal"},

dimensions:{
brimfulVolumeML:8780,
grossVolumeML:7810,
diameterTopMM:248,
neckOpeningMM:220.7,
maxOuterDiameterMM:243,
diameterBottomMM:200,
heightMM:264,
maxHeightAfterLidMM:266,
lidHeightMM:32.2,
lidMaxODMM:245.5,
lidInnerProfileMM:221.5
},

material:{container:"PPCP",lid:"PPCP"},

thickness:{sideWallMM:1.3,bottomMM:1.5,lidTopMM:1.2},

stacking:{inStorage:"1+5",inTransit:"1+3"},

weight:{containerGram:316,lidGram:110,handleGram:25,totalGram:451},

artwork:{silkScreenArea:"160×620 mm"},

compressionStrengthKG:380
},

{
id:3,
name:"8.5L Lubricant Container",
slug:"8-5l-lubricant-container",
capacity:"8.5L",
categoryId:"compact",
image:compact85,

model:{containerModel:"10400C",lidModel:"10400U",handleModel:"BHG12280W"},

identification:{containerType:"Conical",lidType:"New spout design",handleType:"Metal"},

dimensions:{
brimfulVolumeML:10400,
grossVolumeML:10300,
diameterTopMM:264,
neckOpeningMM:238,
maxOuterDiameterMM:264,
diameterBottomMM:221,
heightMM:261,
maxHeightAfterLidMM:262.5,
lidHeightMM:31,
lidMaxODMM:261,
lidInnerProfileMM:238
},

material:{container:"PPCP",lid:"PPCP"},

thickness:{sideWallMM:1.35,bottomMM:1.6,lidTopMM:1},

stacking:{inStorage:"1+4",inTransit:"1+3"},

weight:{containerGram:380,lidGram:130,handleGram:35,totalGram:545},

artwork:{silkScreenArea:"165×675 mm"},

compressionStrengthKG:400
},

{
id:4,
name:"10L Lubricant Container",
slug:"10l-lubricant-container",
capacity:"10L",
categoryId:"standard",
image:standard10,

model:{containerModel:"12410C-1/2",lidModel:"12410U-1/2",handleModel:"BHG12280W"},

identification:{containerType:"Conical",lidType:"In mould spout lid",handleType:"Metal"},

dimensions:{
brimfulVolumeML:12410,
grossVolumeML:11300,
diameterTopMM:279,
neckOpeningMM:252,
maxOuterDiameterMM:278,
diameterBottomMM:231.5,
heightMM:278.5,
maxHeightAfterLidMM:280,
lidHeightMM:32.6,
lidMaxODMM:274.5,
lidInnerProfileMM:254.5
},

material:{container:"PPCP",lid:"PPCP"},

thickness:{sideWallMM:1.45,bottomMM:1.6,lidTopMM:1.4},

stacking:{inStorage:"1+4",inTransit:"1+3"},

weight:{containerGram:450,lidGram:157,handleGram:40,totalGram:647},

artwork:{silkScreenArea:"170×715 mm"},

compressionStrengthKG:550
},

{
id:5,
name:"12L Lubricant Container",
slug:"12l-lubricant-container",
capacity:"12L",
categoryId:"standard",
image:standard12,

model:{containerModel:"14000C",lidModel:"12410L1",handleModel:"BHG12280W"},

identification:{containerType:"Conical",lidType:"In mould spout lid",handleType:"Metal"},

dimensions:{
brimfulVolumeML:14000,
grossVolumeML:13360,
diameterTopMM:278,
neckOpeningMM:254,
maxOuterDiameterMM:279,
diameterBottomMM:232,
heightMM:313.5,
maxHeightAfterLidMM:314.5,
lidHeightMM:32.6,
lidMaxODMM:275,
lidInnerProfileMM:253
},

material:{container:"PPCP",lid:"PPCP"},

thickness:{sideWallMM:1.5,bottomMM:1.7,lidTopMM:1.4},

stacking:{inStorage:"1+4",inTransit:"1+3"},

weight:{containerGram:480,lidGram:157,handleGram:40,totalGram:677},

artwork:{silkScreenArea:"210×730 mm"},

compressionStrengthKG:600
},

{
id:6,
name:"15L Lubricant Container",
slug:"15l-lubricant-container",
capacity:"15L",
categoryId:"heavy",
image:heavy15,

model:{containerModel:"16910C",lidModel:"16910U",handleModel:"BHG15600W"},

identification:{containerType:"Conical",lidType:"In mould spout lid",handleType:"Metal"},

dimensions:{
brimfulVolumeML:17250,
grossVolumeML:17000,
diameterTopMM:243.5,
neckOpeningMM:217,
maxOuterDiameterMM:239,
diameterBottomMM:201,
heightMM:218.5,
maxHeightAfterLidMM:220,
lidHeightMM:31.9,
lidMaxODMM:240.5,
lidInnerProfileMM:217
},

material:{container:"PPCP",lid:"PPCP"},

thickness:{sideWallMM:1.25,bottomMM:1.4,lidTopMM:1},

stacking:{inStorage:"1+4",inTransit:"1+3"},

weight:{containerGram:480,lidGram:157,handleGram:40,totalGram:677},

artwork:{silkScreenArea:"200×780 mm"},

compressionStrengthKG:700
},

{
id:7,
name:"20L Lubricant Container",
slug:"20l-lubricant-container",
capacity:"20L",
categoryId:"heavy",
image:heavy20,

model:{containerModel:"22100C-3/4/5/6",lidModel:"22100U-3/4/5/6",handleModel:"BHG19600W"},

identification:{containerType:"Conical",lidType:"New spout design",handleType:"Metal"},

dimensions:{
brimfulVolumeML:22500,
grossVolumeML:21000,
diameterTopMM:318,
neckOpeningMM:292,
maxOuterDiameterMM:316,
diameterBottomMM:264,
heightMM:380,
maxHeightAfterLidMM:382,
lidHeightMM:31.2,
lidMaxODMM:314,
lidInnerProfileMM:292
},

material:{container:"PPCP",lid:"PPCP"},

thickness:{sideWallMM:1.7,bottomMM:1.7,lidTopMM:1.6},

stacking:{inStorage:"1+3",inTransit:"1+2"},

weight:{containerGram:750,lidGram:210,handleGram:65,totalGram:1025},

artwork:{silkScreenArea:"230×825 mm"},

compressionStrengthKG:720
},

{
id:8,
name:"26L Lubricant Container",
slug:"26l-lubricant-container",
capacity:"26L",
categoryId:"heavy",
image:heavy26,

model:{containerModel:"29100C",lidModel:"29100U",handleModel:"BHG29100W"},

identification:{containerType:"Conical",lidType:"New spout design",handleType:"Metal"},

dimensions:{
brimfulVolumeML:29200,
grossVolumeML:27920,
diameterTopMM:345,
neckOpeningMM:318,
maxOuterDiameterMM:341,
diameterBottomMM:294.5,
heightMM:405,
maxHeightAfterLidMM:406.5,
lidHeightMM:30.7,
lidMaxODMM:342.6,
lidInnerProfileMM:318.5
},

material:{container:"PPCP",lid:"PPCP"},

thickness:{sideWallMM:1.78,bottomMM:1.9,lidTopMM:1.8},

stacking:{inStorage:"1+2",inTransit:"1+1"},

weight:{containerGram:867,lidGram:240,handleGram:75,totalGram:1182},

artwork:{silkScreenArea:"270×920 mm"},

compressionStrengthKG:850
}

];