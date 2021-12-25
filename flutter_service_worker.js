'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "67739cee2607ff3c0a1f63ba4e874dd6",
".git/config": "c39dfa365c07af9e151cf548a7644085",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "56fa7bb6e0f8e6913f4e2a75187f053e",
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
".git/index": "f6f6b2ff1fcf7f77b81caf850094cb54",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb055ea3fa3c249a99ca3ce938f30656",
".git/logs/refs/heads/main": "aa0dd219987cda89c7dc0588824c2f27",
".git/logs/refs/remotes/origin/main": "e83ad59b157590b8fd68349019b799c3",
".git/objects/01/2d1a6eeda76c47d16d5c814c6e35b75c3c47f4": "966a2b32406279598c47f0ba07aebd7c",
".git/objects/01/879711bed65b98a05ce206a3a375628ff6f8b7": "cced57df3c9e1a1cae8438dc2dc12eb2",
".git/objects/05/fbc0895aff74b4af6ce024aff767a6dca4e57d": "a72759a39babd857d47dc396efeee6b7",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/09/1fae7fa8fc4533d8562e384362b9769df6335a": "ed81f55d86aa813fb8bb091bb0d88e38",
".git/objects/09/a3587883bc53937d89a61a42f774a7d23a3654": "c8d681ecc498a3c2cf2b42fb925e6da4",
".git/objects/0d/7fc9d25295c0d71132cd64fb5f96356ee88982": "fb424e3bff158d8a4022dbe0cc5526ca",
".git/objects/0e/cdb57a0166e191634cce9952a457efab0c70a0": "272f9fc7377fb51ca127a3b1882834c6",
".git/objects/0f/6a6ed7695b226618b6f8c04c5523ad9aacb7aa": "559698f0bd6a975b13d31f21bb2b5d52",
".git/objects/11/1b90ca8d7bacdc5c9fec75098e99a9319c7a66": "4217faccbe7b157a3c838e3fc712ddf5",
".git/objects/11/20542776fb3b15ed60756214f11122bfc33ea2": "72ec046cc78223abc489709b261af5cd",
".git/objects/11/f9578b0bdad8fd5f3e9d408158308a913665f2": "284e9964aee956740885908a73da7b78",
".git/objects/12/f7692460e989c76ab7d71214fe71012b87147c": "99d88c65674730932909e4b8a7f47d1c",
".git/objects/16/c57435d46ce65ecfbc5ee469b898373bd59584": "5162f3f7917bfd9aea8ce6da39acdd7e",
".git/objects/16/fbc46b8dafc60d57ad3aad19da07920ff93e0a": "4523a22dbbbccb6c112dbe89a2684d09",
".git/objects/17/63e153b6f24f136d4d5567320e74f68b248b87": "3c120e06a805f50856e2d4abd1fcc145",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/18/8c121a16ccc90ee9b59c5e3b803bb2c15bf80f": "732c20cd7394a0a81a30230b07f62fea",
".git/objects/1a/e5d4234a16d0e17f45831b9ab662c7651a61cc": "67741d30c254ab894a4bed95b4bbb688",
".git/objects/1b/98bd00c719db8a45810983d399ddc03478aaa2": "4c7d904b2379ce426bd527b712780fd4",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1e/b8e25a05c4d4636fd5fed0d3061183e17e9dff": "ffad7977e3be61def04c3d937b95366b",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/21/c5510f1885b6ff96104c80aebafc28ddc47f65": "c83d049fe95a94e216240421074dab1c",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2f/3f81aa5f1a0ba374ab96250a811db2e9fea1d7": "40bd669f56f06e23d916e14dfd4a861f",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/37/788dd12445e228ea496169fc1e9c827e8621e7": "f0e3ca5697dbcfe81c775cddd4f5203e",
".git/objects/3a/47982e4d7b2e7631e2de697e26ad8db9689d0d": "06cf99ab92ea2f446ac102413cd7dda7",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/40/7f7c5f2f9cf4a2660803efbcf41d2b0041120f": "5a1c55f51dcd992d767bb87ec23638d1",
".git/objects/41/709655612a617b0a06fde9441624ce90562613": "eb884ca3cdb6be388b6bb539c59ebdc3",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/88ab6d18f5439586c27a280947f24fe0d6d2d8": "a0a7ed2bf20b5a93ad90a3994716b8ba",
".git/objects/43/cffa91d7e3ff253a348296a19a37d8301af34f": "0bc193a20b3d961e901b49dac038397c",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/44/e3f643661a14bf04f9b84d704fa583d0d90bc8": "c9003b78d43679e0d59e75ca128c565b",
".git/objects/45/5991855c21d9167d94c7ec4efdfe710325e858": "80a4b2fb695896fdbf25b398a634206d",
".git/objects/47/c24701a6702283443bc3aa6502a692bed805e0": "e9d5069d8e39b5ba91bc816798507357",
".git/objects/48/b9adbfe0d0a7de3b1b0b564c2e5d192992fa39": "7d79498602b8cc7e6d2758b36c3bb5f9",
".git/objects/48/d6235e22baee011a13c5ca37c95cd36125bb33": "f2cb87fa4c97c3dd660fd84b6376387c",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/a85c5726e7af637d484352ab2a75c8edaed286": "762e94a277fb8fab7bf8a6e88d66b2cd",
".git/objects/4b/d7f112e7b600f19264194972c3872e84eed1eb": "029775862ccd40fe4501f2ed1feae102",
".git/objects/4c/e944b7e776d46cd5f4e56cc9cd62245fca1422": "993581bf1bfcd6c7d9f07959065e0ed1",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4e/ab13f9d10dac49cbd2f7d67242cdbcc5a55c49": "a17a636d076391d38f35cba75ad06835",
".git/objects/51/222ce0a9244cce02426485c4d668906e4152af": "97db30dea22f55688a5189ad698560a8",
".git/objects/51/2b19f536c2b2c7ed83f5680901a01422e512b2": "001b94729fa66465f41c04c4b511aa1c",
".git/objects/51/4dae3a0469e526cf109f312c2b636daf9b7062": "aedd04db658afe737d6e5897bbe67e80",
".git/objects/52/62412e6821a7520801bfa79243a28dfee4242a": "32d3a332d5dde3824f3dc2e2b7af0a22",
".git/objects/53/a294a5c0ec19088fc994327e25c60ec93a1a11": "4a03d1450b93011c977279b025a5dc38",
".git/objects/57/a8cbf72dbae74eac6ae3240bb329391c1ed3c5": "a045ab3cdbacc13da633b512b5770771",
".git/objects/58/1680955f8b5b26b4272c792c23d8347ce49847": "6c6f3f62c05986a7a603b65735d0a5c9",
".git/objects/5b/165f3abd1f9dfc1b3894cf15986be04f604c67": "74d31986d5d6f45dadeb47815c22c122",
".git/objects/5b/98b67a059c5e067d7afca4334dc719696aeee8": "abf71f819a07f2d6bd885fa06279b2ff",
".git/objects/5c/b758b847db49bbc075047d4806fe4a7ca58c30": "04151cf8f6246fa1af13fb45ee9fbb69",
".git/objects/5d/81699170446d01e29b6373df3204f0394dd056": "ccefde2e80931ee21b120f0cd9cbf7b9",
".git/objects/5e/1f648360600d41eefbdfef7f706551967d2e91": "723bfb455fe94016f51a58fee9b7001f",
".git/objects/5f/afb267e81fb6a2d7493b987a4499d0152ee33d": "810c2d264ade849d29a01c0419e7ee45",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/61/c7dd62faa0754beeb8255d1bf289c487ca8013": "6d45ee9c37ef2ec42a2ec68eb7b39378",
".git/objects/63/18b90337a93d47d37994c0aaab3228f5a8ad4f": "3b87732ad9cf4ef6036de0af82969e03",
".git/objects/63/b17101d82a5de1bc6bc818c0072ccabfe48f70": "a105c521d3b7fac995d628725e875d11",
".git/objects/65/c635edddbfbd038a3a739494e6d9c1dbd933c3": "ea69d525818131ebd1df511f5edfc151",
".git/objects/68/85fd496aaf6e9773a2bd887752d03c4d0b0b14": "548ea97e8eb2b205d49d23edb483e090",
".git/objects/68/a119dfffa3495e1cdc324e3bcf7e7b6527bb6b": "2d3e8d12b88f3a8062c23dad4f99d6e7",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/69/5d32534ff3675bb3123b9a9f99b49ac36e26d4": "8cd7b357e0e35e537d0e7eddd4ad560a",
".git/objects/6e/7cca446afe688782b8101437986dbbef8ee994": "18747b7f4abc3abe7a74ed329291cd4f",
".git/objects/71/eead4850cfdc60853b39b14ac3758727c0cfc3": "71c27f0532b006085ed5f898b81ca7cb",
".git/objects/72/779a1ccd9c23bb813537d023c5959f5a878ffd": "0f868c847c0c5fb23b9557b65e57f656",
".git/objects/74/b8cc74d5ab33ee5dce66b13c3c4bf51eb9fb32": "21bc7c85394383941f7ca8702e5123a3",
".git/objects/79/7acea53eb091cf5b30518802c3073f544adeed": "937cef16b89c98aeaa2dda4bb9500126",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c11b640c71432b6cd456d5f75e592297cdd5d8": "beb514bb1431252f84606449a9c752b3",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7b/88f5e06d674cc8ff2ba8d45ad1e900a4c42a2f": "38df20ef8d2fb3c4e19a3e2845abd112",
".git/objects/7c/2f0cac2a7a3675e1d951065b5296c611e972d0": "4c78fe3e3410323efb9b8bf79d4724c0",
".git/objects/7e/5c7777c0787ba3af84e2e0f4e4bec398499449": "2b90cdc7f842e929ae552112bc24980b",
".git/objects/7f/1b5c470381882d63cdc1789a8f7c7efe39bcc9": "f790f783fd1b3a6b0f0d97dac5c746b7",
".git/objects/7f/ce66d1c8ab008eec96b274d2d0d3b92c6b46a7": "a553ba661ffeabf67c472e0d79097b78",
".git/objects/81/fb7246137dde6f9ebb86a5a0f890d127b7465b": "0aaed72bd116def2fe8367bb5051e9fd",
".git/objects/82/4dd385090d95c451fb85db88781b183b9c28b9": "0d77ec951b0ed0ff759b9a0a7e16f487",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/83/841ade93c2ac8cb921c57cda950809ebf27e01": "49b1c9545995b722b18e2a1630b2b8ed",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/9e6aab32ab523e1cdf11dd8d4243a74102be9b": "6b613fb3705d33444211352548cdbc19",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/84/da4468ec03cb1720d6f12c51d1f317e441980d": "16a15e0a52a5ecd1121811aa78c66c68",
".git/objects/88/5aa5eaf41acf35648c2477c70d20324230cf91": "3697b256e70f4e03224f0917e3c61e78",
".git/objects/88/acd64476ed20c6e7a58f6cceaed64a7bbd12f3": "db37f5fb6000b4d7f1b2d2882666c1aa",
".git/objects/8a/b26b82eae0384f3fdb9320f34b51891e795faf": "2390e2711de855e48ff348678aa84003",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8e/7470474821dfd46c4702f1d128962e2d28639d": "73e1113670fafc7d8e2e646c0268e8f7",
".git/objects/91/b999442502f8f4723bfffc5235a0cdeaf45c3b": "6afecbdd4bc7c85e0bc8bee38b44c8da",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/95/41382769a86e98a7c8f0d09555051d0c18eefe": "8027e2396cc187c76a40182448d8ce13",
".git/objects/96/39a95c843b07c4e7e06e1dd5ebb31e3a8cea92": "8d1e6d780947502d22b6b9f051e39644",
".git/objects/96/fbc0d855d2ba72179a4cc39b49f60cc77e706a": "ac01c329eb72d09e04ba74f3990b644f",
".git/objects/98/5705d6f372099b26ed25fd9a6f2a27bb8a4f3d": "f540d539702c1c5ec8b496232dadb966",
".git/objects/99/51f8455a120b93a57f3a4096f4c36324cefff0": "5ed8742f568c0223d0eba650c19aecaf",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9d/2a26a0a48d293b85d682e92457c4202e17f6c6": "8450c77b1dbc2ab41c10c88fc5969351",
".git/objects/a1/0724cc610c2312eb3adbf776ecebcf5200bc82": "7ce243f3b69cf1eb6aa6d7d339b3264e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/88a54f4161d535f7c2b31ba10ce634089af72c": "aa82bdcd4820065f75e9e0aab08c80b4",
".git/objects/a2/e05cf56bfe0e58035e2e91aa1df131d9de69d1": "fa2652dc953dcba4c54ceb976f4eb4ab",
".git/objects/a3/355338151ae60206f644bbdea05ecbe179402b": "29e1fdf88c821fb2964e1ac6b514d745",
".git/objects/a4/00896b1cc6cb356aaf89d2aa6daa51b8e925cc": "10b7e7cee8270dbc0f65cdf22afa57d0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/aa/3cad3009b646d36e0dcce18c023c4a5bd04ee4": "700c003be565a3211e65edf631ff4a86",
".git/objects/ac/b92df04c816be207be1655e8861881bdaa6185": "c0c01ef7d51dbd505ceb34324a980116",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/5678fe51780352e59d676d5afc72f5127f5912": "84013eff11c5d8c7a908850db1a8b199",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b1/50e29bb0c2ddf98795fcf0480f439d7a3b9165": "988dced81b70e1d98a56970993de0161",
".git/objects/b1/c2ac1a63f149a5ffe31e944d6330038c401f2e": "85763389109c43c6b96e6afca7b25b17",
".git/objects/b5/0964326c016819975f948b528d39d4674c96d6": "7934e231b8da1ffec8f59542751c8432",
".git/objects/b8/0a8cc6c1bc836d1ec13b7fb6fc4f704cc7056f": "a7fa507dec9dc18875e181d83663f6d8",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b8/81159900f3f87dd1f665bd57616b5dc03c6d5a": "6341e0225c2fd09cdc7a3a4b4d19b7c5",
".git/objects/ba/797c80e2948cd9a336f92fc3cd5c70e4ea3ef5": "7f45547cc4d4443c339174546dd0d610",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bb/543323bfd4ace80c91fec4fee371d571bba5a8": "9309c4b1db8c735b2e33cdda9c8d87a2",
".git/objects/bb/9a5e193d614fcd41194173e0bd5162014ffa12": "4c6ba1cd4fd5f3ba894e497600d088a5",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/be/75ccf8374a5207d03142de931432948e7c6228": "b3ce33266c7735bacaa35d6aff58e21d",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c4/6765c7275a3a2f04e08c04451a253a4fa4a027": "ff7fe55e90e869a7fe97c14c34824e7e",
".git/objects/c4/8f64478cae496fd396cea4b34900ba965a2506": "7ba71628c07456555a240a06ef9fa5b3",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/4453b035b479af6091b381e98656c858622da6": "8351e8dd8e45b2ffbdd49f33180f21e8",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/c7/780d764d236eb56ca19bc7260407356d9d18e9": "f56c9677c9222b54dc6a4844681a4f19",
".git/objects/c8/0845fbe64ff1924d787c0719c6058e044f043f": "9515069a1c58d2dc780e4c1b229dd976",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cb/d4e80bcf699eaf69edb7a2a51f9b837f648bb9": "68850e76d89b9a83fbd7464ae6f576a9",
".git/objects/cc/9df3e4b43e6977aafc0b2572d204f99c4c74ce": "dc70023ac9a8e37168d98df61640090e",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/6965ef07957073e6e23fe32ffab224a32515c9": "50ca2cb624ddac2670c449f96d7c063c",
".git/objects/ce/d3e689ee782d8ddba9975f6468d7233f3af65b": "4d75ad8ce640d1c541da217f189ffb7a",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/d0/a4cac0f4a80fef2f9fd7ba3d9eecd7da5a49bb": "18441f7e0dae9cc5a5b42ad2619e3950",
".git/objects/d0/de9579665e29a7ca770421ee1ba6f76c9db35a": "7b662e4258e8d8e5bdfb663027a6b03c",
".git/objects/d3/11d541c213e4575e8c822dd245b5bcafe2f972": "bc3adfc45a4730c403544a736dd01866",
".git/objects/d3/328500d46ed558aafb15206efc3b0886ddc87d": "79a94d43691343475b92d2c6c321f63e",
".git/objects/d4/95364f61ef2d55a46b4c05f5694d9f6a563c6f": "0953c47a3938232955d517d61e1b70bf",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d9/29cbc638ca660b25dcfcf9f3784fdfad387730": "472ee6df67cc56f34173d839613dfee5",
".git/objects/d9/2ae0e17acd2789e3600dc1c370a53a8b88379d": "837e37434e6184a33ce92464f02c1fb7",
".git/objects/d9/4d95d0587e4526fafd55d033472e91f6d1fcf1": "5abcc9a6fb324717ee24fabda25625c8",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/da/52272be1d7a518c430a0609615a62db30ca0c0": "c2a1e365f6e247168d3bf5cad36f0c71",
".git/objects/dc/e7a88f917b18a33939841695c6550ecafc9057": "92b49394330d8b9f2ebb04f9badc2ce7",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e0/6a0c1315a455e70ab574eb42eddece81b6483c": "863484c49e8d1adb9c4f01abc4b83e4a",
".git/objects/e0/b7fa89549e0afb5f55aed8fd2ff124f62e0d45": "a505940dbd45945422387ba092cf2226",
".git/objects/e0/d0db13064c876c94e4e5297aa4929e2e069580": "972fb0a38d1b822607cb4b04c836f535",
".git/objects/e2/1e866777379a7333cc811a56df50de4c0b2025": "9db194465b4ad566085e9d06d0a8cc59",
".git/objects/e3/7654d74e087eed676e431193b907ee7dfb93ad": "7a2dd9472e423cbd00c777096e149309",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/e06519c6f06841a0e327b39169dcb08a6f20b8": "aeb4bf2cf895a258bff3d09343896a45",
".git/objects/e7/2b46eb369fe26f601b7a57b2db7b6d465a29b8": "f1acf6faf41ca09e462de5e49c1c688a",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e9/a03d9dffc3efa5ed63abda35edfd535f2c505c": "dc9715f81ca1d79121d8c93fc761fe62",
".git/objects/ea/688ed1a068fbfc6eebf3f1a0876c73cb3ec381": "8bd52ef3c22e73d79bc59d591f88bc9f",
".git/objects/ea/f8bba5c85e68ea487322cec10b4f0ed7942948": "7061155da2d17e24759d444f2ce45c43",
".git/objects/ec/d53aa5f61f929391a804a2c661afd3f989b51d": "0f30fbea76f48bcd99484021e943e0e0",
".git/objects/ec/f5d3d7e82e941c8f7848533779674f274c5471": "74ff4518958549d8f5c72a6d87f584c4",
".git/objects/ee/fb72d129fcd011ecbad9eca98864a527e2456b": "6efe9e9f99203881a82588753cb58550",
".git/objects/ef/17902a1458c27da4964b008943772537be0672": "f803dcddd06516bce6909ab53b3e6d35",
".git/objects/f0/6174692016e647385ed03cebf31c9e65742545": "37556029ce3450f83160a8470d9d8841",
".git/objects/f1/bb005c79bd775dd325f0a0cb04124832c2970a": "917d8bf12b7d344327b169ac81b96b15",
".git/objects/f2/a9ab132aa39c910aa65bc47e3326ca01339155": "b544436c5dd032d328045c472afd91f2",
".git/objects/f3/04296a93b86769d29714d8af53f929832cc83d": "5c509cd6d193fa2273822e83299a7ee6",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f6/eedac1fbd5525f33f7dea6c8b6a444653d5986": "f609ea5d3ccc80bdd82abec46299c24e",
".git/objects/f9/c31e5d68e2457a28e772403d33c83128f599fd": "8a6e90cb4aa7b3e81ae576e766d41c33",
".git/objects/fb/2e3b8fdf149f9b3d5f58984aa7e6a11d1a7f57": "396a4755be39374f8509de7fb36098f7",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fd/9ff366226c0f282e6e9156ad9b4880dd05ab92": "938ce8129aed19d7f6345cce231f2838",
".git/objects/ff/e9cc5c5e68c104b4bbc27e8311cbdc6e2c756f": "b28aa727ec149e7a9fabde7bda895fc0",
".git/ORIG_HEAD": "01dd9183306384fed63a42041810f730",
".git/refs/heads/main": "f9643dee610cd9d5d79368d883dbe659",
".git/refs/remotes/origin/main": "a7daf7a048d9239280d3d81f1995c92a",
"assets/AssetManifest.json": "695dca3b948d3fbd86a69b6e8c859113",
"assets/assets/1.gif": "4863c0babc16996e2bb080886fdcd780",
"assets/assets/apple-touch-icon.png": "73661a914dc8368705ab013b7abb886c",
"assets/assets/banner.png": "f66825552e020137da59661fc25ef483",
"assets/assets/bg.jpg": "7a9f4b710a9614c2839a8d80e2391d58",
"assets/assets/Capture.PNG": "bd55fa4b616498788ae7d97bcbc00764",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hero-bg.jpg": "7a9f4b710a9614c2839a8d80e2391d58",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/mob.png": "46ffc82ec29ccc96ad1092d265d14075",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/ComingSoon.jpg": "10edb85521f835a03630b6ef0603c0c4",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/Logo.png": "e2548ad7549f9fb9b3b460fc48d00a06",
"assets/assets/projects/medkit.png": "6fa1d5264eb91a094be1164feaf5a54e",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/portfolio-1.png": "5687dd0d9e6d4cdef9388743062dbcfa",
"assets/assets/projects/portfolio-2.png": "98b8d08ccc15e7f00567d45fa1beb0c0",
"assets/assets/projects/portfolio-3.png": "ec09e358cd38b03a2b3d83424b7db525",
"assets/assets/projects/portfolio-4.png": "3f8e4987d74d54139155421c51a6c153",
"assets/assets/projects/quran.png": "ee4f5ba79f811bc1618071339b327759",
"assets/assets/projects/souq.png": "ab4e1d1e0fbef197388e0d31235c8e5e",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/web.png": "8cf1205ddaaf46fd4a99a2b820f153b7",
"assets/FontManifest.json": "9bdb557c6b2f6cedd7a1dc0d926f5bd0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "faa402923c9c6efeb76bf15593c0214f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.ico": "62ffa0f5a573a1d87b7d92118965bf16",
"icons/Icon-192.png": "c6f11b047ff238f40b76d26d36ab30c4",
"icons/Icon-512.png": "05bbef9d8693098c5320db7520c7e11d",
"index.html": "c518b2c787dba8e0068d807576917eb1",
"/": "c518b2c787dba8e0068d807576917eb1",
"main.dart.js": "cb531b4c1b465f97a80bb6d3410482a3",
"manifest.json": "cfeab73b8805e17b4b07a359c3e8efd2",
"version.json": "9a4dddba415c9ee5265cd5f5d9963a6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
