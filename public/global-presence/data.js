/* Geographic references for potential technology collaboration.
   Coordinates are representative GeoNames city points, not office addresses. */
window.CW_DATA = {
  regions: [
    {id:'all', en:'All regions', zh:'全部地區'},
    {id:'china', en:'Hong Kong & Mainland China', zh:'香港及中國內地'},
    {id:'sea', en:'Southeast Asia', zh:'東南亞'},
    {id:'pacific', en:'Oceania & Pacific', zh:'大洋洲及太平洋'},
    {id:'east', en:'East Asia', zh:'東亞'},
    {id:'southamerica', en:'South America', zh:'南美洲'},
    {id:'middleeast', en:'Middle East', zh:'中東'}
  ],
  markets: [
    {id:'hong-kong',en:'Hong Kong',zh:'香港',city:'Hong Kong',city_zh:'香港',lat:22.27832,lon:114.17469,region:'china',status:'active',core:'hk',label:[-40,7]},
    {id:'shenzhen',en:'Shenzhen',zh:'深圳',city:'Shenzhen',city_zh:'深圳',lat:22.54554,lon:114.06830,region:'china',status:'exploring',label:[0,0]},
    {id:'suzhou',en:'Suzhou',zh:'蘇州',city:'Suzhou',city_zh:'蘇州',lat:31.30408,lon:120.59538,region:'china',status:'exploring',label:[0,0]},
    {id:'dongguan',en:'Dongguan',zh:'東莞',city:'Dongguan',city_zh:'東莞',lat:23.01797,lon:113.74866,region:'china',status:'exploring',label:[0,0]},
    {id:'singapore',en:'Singapore',zh:'新加坡',city:'Singapore',city_zh:'新加坡',lat:1.28967,lon:103.85007,region:'sea',status:'exploring',label:[-72,69]},
    {id:'philippines',en:'Philippines',zh:'菲律賓',city:'Manila',city_zh:'馬尼拉',lat:14.6042,lon:120.9822,region:'sea',status:'partner',label:[30,19]},
    {id:'malaysia',en:'Malaysia',zh:'馬來西亞',city:'Kuala Lumpur',city_zh:'吉隆坡',lat:3.1412,lon:101.68653,region:'sea',status:'exploring',label:[-105,28]},
    {id:'vietnam',en:'Vietnam',zh:'越南',city:'Ho Chi Minh City',city_zh:'胡志明市',lat:10.82302,lon:106.62965,region:'sea',status:'exploring',label:[-109,-24]},
    {id:'png',en:'Papua New Guinea',zh:'巴布亞新幾內亞',city:'Port Moresby',city_zh:'莫爾茲比港',lat:-9.47723,lon:147.15089,region:'pacific',status:'exploring',label:[25,-31]},
    {id:'australia',en:'Australia',zh:'澳洲',city:'Sydney',city_zh:'悉尼',lat:-33.86785,lon:151.20732,region:'pacific',status:'exploring',label:[-35,35]},
    {id:'brunei',en:'Brunei',zh:'文萊',city:'Bandar Seri Begawan',city_zh:'斯里巴加灣市',lat:4.89035,lon:114.94006,region:'sea',status:'exploring',label:[70,32]},
    {id:'tonga',en:'Tonga',zh:'湯加',city:"Nuku'alofa",city_zh:'努庫阿洛法',lat:-21.13683,lon:-175.20114,region:'pacific',status:'exploring',label:[26,-11]},
    {id:'suriname',en:'Suriname',zh:'蘇里南',city:'Paramaribo',city_zh:'帕拉馬裏博',lat:5.86638,lon:-55.16682,region:'southamerica',status:'exploring',label:[-78,-21]},
    {id:'japan',en:'Japan',zh:'日本',city:'Tokyo',city_zh:'東京',lat:35.6895,lon:139.69171,region:'east',status:'exploring',label:[31,-24]},
    {id:'dubai',en:'Dubai',zh:'迪拜',city:'Dubai',city_zh:'迪拜',lat:25.07725,lon:55.30927,region:'middleeast',status:'partner',label:[-18,-28]}
  ]
};
