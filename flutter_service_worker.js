'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "af5cb0facdebbeabe1f46fed12d84a88",
".git/config": "8e9d6c83e12f515eadaef7fd508e7adb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dd6aa47119c0f409a26d7dcd5742af8f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b78597966631502e8483231c072df39c",
".git/logs/refs/heads/main": "b78597966631502e8483231c072df39c",
".git/logs/refs/remotes/origin/main": "1ff08c249ec40f955841524b4fd8dddf",
".git/objects/01/141ab4cd18326e2bc63d40d565946017c3cea4": "bdb513caeba07e92026fba97a6afe5f6",
".git/objects/01/261df9f94ccb857727551f45ebfa6cd07de7f2": "cef89d6b8cd1108407c76989ddf8ef24",
".git/objects/01/d27cbe34464f6ed7fbc1abc09acc215e9bb74a": "efdf85bd3797dfd53491d3f1b3a47446",
".git/objects/03/13a122b98ff0cb8edd488bf611ba8f24321cbc": "591172c2ab1a16cd3eae2d2543841a07",
".git/objects/03/fda641d29fd524ee216a47b326245f56f979c7": "158614599f4aa82fe594a26db5c7002f",
".git/objects/08/00600f5f333bcda35312c1ba2d1d7ea61c1105": "60d2d3a74d352891306d073b2977b205",
".git/objects/0f/941bb1f9283d5d0810593f820ffa5782b96a88": "4625572b492eacd042ba60ef4df4a38b",
".git/objects/0f/e0866e38cd0c792ec40c0514c1815870ce2e52": "c68c5f894d06ea835283d509f6119943",
".git/objects/15/bc956d3bb0eacc995f421185a6248e6798177b": "fba9c839279140d7fe6b151a163031cd",
".git/objects/16/3c71e7ea89f47126d51cd27a654454c7b3643d": "cb5a57c2b0f005e2ba9ae28c8053e475",
".git/objects/16/3eb0dc08ac3aacaabc1fd9ea97798c81b80ce7": "ec0179f48b4316256e79d0fa21ebbd4b",
".git/objects/16/cb46a2f6dfee11e209395eddb7435ae03fbf90": "3fa87f4bd7e0e823865fe451226420e0",
".git/objects/17/2be17775c4a8761ca952768b4017e0b502fcf5": "6ac6d29971372ea160eb2098081bc8cb",
".git/objects/17/be475c463eaf3748b324a0b1149c2fadb83ba0": "675cc5bc5e47f4e00a717747422b4e4d",
".git/objects/18/9a78f5d8b98cd2197ae5c6ddfbf8059b22c138": "775ff03884e02bc680138e6881abf93e",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/23/82dae5731920f685935f7ea519d55aa797d2d7": "124f0ddcc413c7904d70c3bf1f38c7c6",
".git/objects/23/c891562157b1c03ac833b7f63ef558501757d9": "0817e33c0dd0a758a6f8196a3266d3b8",
".git/objects/25/388033a6e3a37adfc90da03752eea579021c25": "6aed81e801c9e151f8659309cc7a4cbf",
".git/objects/28/ad67bdf583bc99a0209f51de26c87837143691": "c42fb204bdbbae58d6be49fe1d6f5c9d",
".git/objects/2a/e02d2f5cea9e4f8a5af9c892e4597a76364524": "ae443c04df45649a98f345e4123e882c",
".git/objects/2c/dd2c4e8556b4868fc5da85b6fcde5cabb4d829": "eeef9218fa1320dbea2b30efa79433eb",
".git/objects/2d/7b92318ad68a73e4d6391fdab5c476924e2052": "b73c83a7b111482d6e6144435381579a",
".git/objects/33/4c68fcf0fb9fe8c767d02782ff346c60a268a7": "2e9427a322a126d19a48f56f337439ef",
".git/objects/3a/543fbda6c3b530e6f1e6c7318e654158efbe92": "419c73e0c7dd7ba490a00a96b877c5b6",
".git/objects/3d/6518daba860086663a92d33e9438173d7f3bf5": "3c3a3bd3afb7ff66eb3b89c0f760976c",
".git/objects/45/62cbc125e4bc10bd6d71c1d59c6bef306fe4e1": "5d21bc872594d1c5e421b66ddffdcbdf",
".git/objects/46/00e1d8be31f9b68dcaa5ef3b07a566c8933971": "4a76772b2adb43a1d487a32eb7d3ec9b",
".git/objects/46/0b968e61958c73744e9073ebcfc33e9ebb8a7d": "9a43793be954dd5b79cc1a9d196126fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/db43fccab2e9d1dcad3054fa640c89a7e9936f": "689b0b530f7254ea239ef485ffcaaf66",
".git/objects/47/7245824533aae93eaa68fda4d0c2a6e20d3e64": "0d54885da2f9963dd7b1a0c1dc5e9759",
".git/objects/47/f5f6e0acf3d7ee1dce7f7c1781be07399acb1e": "d7a5e34b39d64a8322eef0ded104e490",
".git/objects/48/93263ea5a05632ab2a3bc6386c2283c7c801c3": "a4d048ce55202c3c20b9d316a41d5c6f",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/564718212294833b5c729aca7cef5cae9c6ef7": "9b51f52725d8bfc7024987735e0de378",
".git/objects/4c/de996e313fca63fc76d6b488c1e823e071e82b": "81e3ad1c7e586f07237bb03a11216961",
".git/objects/50/c7be942fd0110250563605e78c439234ad3ed8": "1633e9f200fa63bedca2990a9ef2198c",
".git/objects/52/010120ace9633610fbc012cc68002ac043d948": "88accb53e686039176ed52a552ef322b",
".git/objects/52/92575ceda396371148c271bb2a7f5e48c2d966": "ad63c21f35c65d0efcc0a7f839b3149c",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/59/1db299bffa6c322d9f48ddaec46fd1451e250d": "86ea0e4407e71d3156264cf98447e5b5",
".git/objects/5b/8bc7e10bd5cb7b3b29bdea18f2f7896bcdc3e4": "a87cded6e929f65232e57e8dffc02c63",
".git/objects/5d/1472d62712e08b8c405424b1bd106b5c256be4": "a8f40599cd6e32accdf6d36f28615d67",
".git/objects/5e/d090d72a47e5d33b9e3e5fb36521b694767bab": "5877b5823a665b2bc172f48a2ab23abd",
".git/objects/60/cd44299a14a36d3a289205984c17849f93d89e": "19f8772b22a3dd0d46d5d88ed50b6f11",
".git/objects/63/4ba011768cc65912e031931e647f56a7520875": "92719d3e76cbbef47a08453f158b5ede",
".git/objects/66/cb71315ba44e14702b80ed0f4d612549b9508f": "69c5510712605d8a71f852fd41eac8da",
".git/objects/67/1070bed62aa41397ea05a1cbbc92f79f41d88f": "dda5bfd27c0c264dad4e637690195b62",
".git/objects/69/35d5655f305dd0ec3828d221646cbfd11de997": "0e817bf66424e9a2b30114af162229e1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/f78c86507368dd77c89834a16930b92b2e9060": "b20cfeb5a3c8fff58a679eeba5e2d473",
".git/objects/72/bd944560311044c99049f37044b5cc2514c38d": "5f917c0eaa0b3a8a0880309d2aa903f0",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/d4f126fedc036736431a02285667e87434e0bd": "12f6e4925c7f8655a9ef6337fb97e14d",
".git/objects/79/69b127d659635cd3b9bcc3172e6eec5d4459a8": "66b42ef49f17ea8a71900fd04933f5e5",
".git/objects/7c/16e70cf2e13a02f3bc3a190a86e355ceb45122": "ab296834ec12d01b2447920b741803d9",
".git/objects/7c/87877749176cb3a92315e2b26f704a7b4b8f0f": "b2c62b89ac235dcf67daf74de08413e0",
".git/objects/7f/1d31a5f844f514ca7b6d06d0accc80d5e50596": "f8c545c7c857c48e1cc74c6055912e99",
".git/objects/80/724d6e9084c737595cc73d67b7a09555d985e6": "cd3f36eac1641f80416cf34b6ae6b24d",
".git/objects/82/0d474a7205430a7d5b887751eb6ba157df43aa": "6beedac70454fe4b1e8b471c47946318",
".git/objects/84/ce91f678ff709fa03fa290918bfa6d3f3ab2d3": "33fb621ccbf316c510e1878b65cc274f",
".git/objects/85/4ed6d8126146132a5e7af8b018c68f370774f5": "e4a108fc5948845ebb1206893fd1ba43",
".git/objects/88/b7e547fb535ea88743c86088086fe1fbfd630f": "dc5791179a6800a46392519616b60257",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/a595fbe6e11003badeaad792fc9655b2515c04": "a16ded749e9679443b2f1e18e9ce30a6",
".git/objects/92/e63924c25e0f5b2310c3dd6d7e9155bbe0113f": "0a3d5743ece129b46a2b527430e4e8d5",
".git/objects/94/ba05eed4f2eca54e76a01d00d0256642daf575": "34db85ed05460b1062b74edaa1f37ec7",
".git/objects/95/9385c9ef203f7957792cfb0d666f4c981c345c": "dca64bb6390a6dddcc1c57f20204efa9",
".git/objects/97/5be37eb009c24c41cd1646a5d4b339c43fd340": "4454471a87f056f61546d9fa8d85c8d8",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/e49f1e2fd2cbe151f42b7565e105126dd5538e": "bea00eeee19036a2b58f92dcf6ad27c1",
".git/objects/a1/209ab553275b235975a62a4d69051450162a49": "306e2f24ff09b82e48f1bf7518a95340",
".git/objects/a1/248fdf974a552ddfe6d6d0aef20c1952e3daa8": "7eb4d35c373c9bbe14eb255a8bd60334",
".git/objects/a2/3ac55f7da295a792b6fc37e2a42ffc900cbd23": "c5f51f0d268867011667f74ae4964a59",
".git/objects/a2/69df4b256642fbaa1e4113e29bd4ff0741761d": "68362415d318c9368bd93a4e5e1f5d24",
".git/objects/a4/c8ddc262ab403ec449f975e248dddbbbae668a": "35a96a4ad7c67406070552c57070782c",
".git/objects/a6/2d0349ffef2a1b69c3594b38f7a59617a1bac8": "2999cff71345efc261f18f04b7adebab",
".git/objects/a8/c8032add27422e00372335f5e3742c8c40e31b": "8a3ff48e72520ce699986d67b0a4594f",
".git/objects/aa/2abfeb6b946a50104f9e0c5b9680f51d593664": "2ea99d2fce2c457bd063e6a9c4c15277",
".git/objects/ab/4bc7fb4a93ad2167f968a021cf401e49699dff": "870757793a6b72597fbcabf1fcb499af",
".git/objects/b3/0bfe5484e6821b0d5f5b393d250236665615ed": "b2f6f06b0f4965b37eb32e18e0f7f120",
".git/objects/b3/830ef653d9a8346190049bb7b3bc504d65d1df": "6e4e33936a00968d92ddb3ef8e0b3567",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/78345e01fd8d4055f5473cf1023a5af9deba9b": "6028af957ea41f608f8f52e354ffe6b5",
".git/objects/b8/8e6515f8bfe13d88a075266c9daffe1b9680b6": "cfd361049f4d1ad2e727e74bd5ac381c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/167120a21f2b7990315be446c51e3dac65dbc9": "e06b15174061f6e635e58536cc30e993",
".git/objects/bb/c42164183d733564f1d1f3d9026ac1198114da": "d257772d4c85c1b7695e264e4557b267",
".git/objects/bc/cc1aa2aaae68e39c68fd57cf108af97635f5f0": "ea09cb22f3555845b5bcd4f8c031dec0",
".git/objects/c0/e4ad7b3f4b0b7ebeacb7b273701d619f3ea3f3": "62657aa29c2e0f1de55d66a4d0106d19",
".git/objects/c3/03ea422678cb48e1aea03b8a30e7b31e804e83": "194ef54bb1769aa6f5056a60ff37494a",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/4ba6b20db26efebd855b1fed17045e9b3b636a": "b7122f972acec8c30346b56f3dcf4af5",
".git/objects/cc/50741e26dd2fa404013ce3dc7d977726d32d92": "3189ad559d8b1d0d15291fe647711580",
".git/objects/cf/2541f057a9296c7a2a5ae7ed02f82fcfea388a": "e0aa9760ad582f6740cf75553c7eeb5b",
".git/objects/d1/a4c27f48b9c463fb4d19e9b7ce8277ec49fe5b": "28167ee95c174f752801298dd92629d4",
".git/objects/d2/8e521287ebda11da17885dd6daca383bc831d2": "2658a9081f11323cb75810d5a3d5090d",
".git/objects/d3/cafee5619a64d920aa9b5cd00dada7c4950e0a": "3cbc024f131774d81034d11f6b18d607",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/4187bf71d5e6a3845dca5a785a08a19a4639a9": "863eb51e5c85a00f0b1ba18bd666ad09",
".git/objects/da/1aebb8835aca7b3e4e802ece9d3597c1def8ba": "47588989fc74fdfd930f2211f4d0edbc",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/245e309e5ba862b99c9444fa8173c522934594": "15fc0dcf4058bb96950c20e3085cbcd0",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/c40627f09835a7d997ad259dcf0c83f2275ceb": "4a6751517a3bd9a392b95a17744806f1",
".git/objects/eb/5b04eeeb09ebc0eb08940be7ae0ba1e39a8e5f": "191ac8a5244c742f955997a076b4fc7d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8f7e7e135d76cc8afb52420c36abad8f3c879a": "a91e1c8c78a5c397a172be7b09698cb5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/851419076eba959c0ed69b9bd1974411b5db18": "924f61b9698021569a0bb9dfa068b27d",
".git/objects/f6/a7695cf68e4f436715e0f39420b929c92cecfb": "2de09c9141e0b0f871a42bc814ae861b",
".git/objects/f8/15ceb956f73147fb3f936f4324607fde1c29f3": "fc637808fa58430e999ddac5b21d4eb3",
".git/objects/fa/9131d3e4e039545aaf9d37697af65cfb87c5de": "150045ce5f93fd6ac0a59527b9b583c2",
".git/objects/fb/7757817f5464aa0c6aac24d96945542525042f": "20440bf91c2bcce7c2e6cba310dc7dbe",
".git/objects/fe/dc523caf3c869489a88174defa941e023c855b": "db39c3b563a3d8ae310195c4db142b82",
".git/objects/ff/51ad8c410a99a36ecc6d642de172bef5fd3f77": "81680b0d8ea67ce6ebe2be8abe1bd979",
".git/refs/heads/main": "ef5733ede4b2587fbd7996230fbe670f",
".git/refs/remotes/origin/main": "ef5733ede4b2587fbd7996230fbe670f",
"assets/AssetManifest.bin": "bda69b2d94259a62c8374769b8373c49",
"assets/AssetManifest.bin.json": "1f17fcf8fa0f6e563df96725fec3c72e",
"assets/AssetManifest.json": "491f300584ee76691ac1f791d93d4b8e",
"assets/assets/logo.png": "5e8de7f326230986ac0b22d73a2685db",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "394beb0423099370a2da9027fc0117de",
"assets/NOTICES": "33d09f371c3b100a164ef88bcc862103",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "9d5e9a56edc7dc27907f06e1db114d48",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c2b85cbdce1030b6becc0a6eb8a01382",
"/": "c2b85cbdce1030b6becc0a6eb8a01382",
"main.dart.js": "fa79b66833476172baeb8a7a08fee556",
"manifest.json": "65b4be2c44203b0210d271ccc4a50037",
"version.json": "4ad5f98d28434edd82147c5a39aa54bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
