if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise(async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()})),a.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},a=(a,i)=>{Promise.all(a.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(a)};self.define=(a,c,s)=>{i[a]||(i[a]=Promise.resolve().then(()=>{let i={};const f={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return i;case"module":return f;default:return e(a)}})).then(e=>{const a=s(...e);return i.default||(i.default=a),i})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/EPI2ZDuGjvVl2YWiXO7Yo/_buildManifest.js",revision:"916ee7e0b03801c1c0221b31b37ac64f"},{url:"/_next/static/EPI2ZDuGjvVl2YWiXO7Yo/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/13.8d22a113f436cc290f81.js",revision:"dce256ac35b7c9a8751e3c7ce6146158"},{url:"/_next/static/chunks/14.96d3423388a02e92bf6c.js",revision:"022ef4d9731d336623e238fe0db29d25"},{url:"/_next/static/chunks/commons.d3b52dd9b5e4b6270147.js",revision:"218abb76a22c905c2409a549dae5bfa4"},{url:"/_next/static/chunks/framework.d99d6172e6226ce70dc1.js",revision:"5805ed3c22ac33d4ade43960e3b1ccea"},{url:"/_next/static/chunks/main-e76196b890d642d5d3f2.js",revision:"7eb22ee54f90200ce21c18d4dee8abaf"},{url:"/_next/static/chunks/pages/_app-f5e66312debfe23714dc.js",revision:"474896dc263f08d2ce17cc843d0439f6"},{url:"/_next/static/chunks/pages/_error-7d53d212ed7fe42631d3.js",revision:"7dfb4abb90ae200551ea9a27ee300baf"},{url:"/_next/static/chunks/pages/contact-d31b1122926c601aa36f.js",revision:"2922fe23077e2b92a1d4f40ad3a4c8a3"},{url:"/_next/static/chunks/pages/feedback-a9e80bbc3416f40ad88b.js",revision:"c5fdc0003a6dac70fa889e9ae856fb14"},{url:"/_next/static/chunks/pages/index-fb5c4a47afbe42bcea9e.js",revision:"1883beae2b4d7e92faea4760086be136"},{url:"/_next/static/chunks/pages/submit-cd05d5969560d5e610c6.js",revision:"8603f3e9ab2e09ef686b991358c84e0e"},{url:"/_next/static/chunks/pages/suggestions-1da9f808dcd3b9fd9a87.js",revision:"d130283e85489d4702915e18085cf747"},{url:"/_next/static/chunks/pages/terms-c9d01773353793690575.js",revision:"ebc3d9f8d161f1a8947f1ec4509a8471"},{url:"/_next/static/chunks/polyfills-df1b1a86bcf39ad112fc.js",revision:"800f13f23679154e2e2414baf2a8be75"},{url:"/_next/static/chunks/webpack-8575ded848461114f9b9.js",revision:"9da15f6f0f296d721691cd29530a58bf"},{url:"/_next/static/css/62337057a0d8118e25f8.css",revision:"7584552cfd68b57b4a1ce3853c8c4348"},{url:"/_next/static/css/f18bbf874a593c4f7200.css",revision:"53c89161808980b06fb280887a7d521d"},{url:"/_next/static/css/fa002adcccc428b67e0e.css",revision:"d95f918a835bc1f8287643c81e7d4432"},{url:"/_next/static/media/app-background-02.95303561f31194a1388226b557cd082b.svg",revision:"f371509afb62094f466a63bacd8fd4ed"},{url:"/_next/static/media/card1a.9fb6f3db7c4ceb99a84c0c412526d2cb.svg",revision:"dd46cc257f43834ad39f26a92fb9a9f5"},{url:"/_next/static/media/card1b.a5520cf46355f6e32399dfaf22872ea3.svg",revision:"8812452061442d51f5306dcee72cad23"},{url:"/_next/static/media/card1c.5915c2598d4940e5e7cf6db2e92d3fb3.svg",revision:"d72aaa5966a0d9db473313f91cda6913"},{url:"/_next/static/media/card2a.305008f6423ef786b9db88fdab15f3a9.svg",revision:"aaaac07ce8e93a7b7c780e7b7165bf97"},{url:"/_next/static/media/card2b.6dd4241591acb7cf653df876978118d2.svg",revision:"2d3fb27500eae7330b10dba682f011d7"},{url:"/_next/static/media/card2c.ec6685173832e0e009f15b4ac0de32a7.svg",revision:"acb12a3d823554efd9b14109903c0848"},{url:"/_next/static/media/card3b.b67a2ccd58010f1e1e873c989bc6152d.svg",revision:"105992c1a3bb339040a87cdaa42dbc79"},{url:"/_next/static/media/card3c.a8e5a9291be25f822175d496c026dc00.svg",revision:"3b81773801d3432456da91670f799b02"},{url:"/_next/static/media/card3d.40d4200f39a250345a149d3611445e19.svg",revision:"7063590f6111a82465dfce363ec241da"},{url:"/_next/static/media/card4a.5678f15bb2d728c13f5d8207e9840c16.svg",revision:"7ece1d5275bb8e66df4e62eeedc45202"},{url:"/_next/static/media/card4b.e58161209909ece68f91cbe52306fdaa.svg",revision:"9b1e7ff85b147312d9fd79ab0d805fa3"},{url:"/_next/static/media/card4c.2f78200ee7ea620f17731808a16c00cb.svg",revision:"9e3990714fb16643e73ad787286c555f"},{url:"/_next/static/media/doors-bg.6f85e033bdb56c1f8a4f708b51e282b7.jpg",revision:"cdf17587f5fffda8ad8cf59ff7fc12b4"},{url:"/_next/static/media/galaxy.7009c927a88a7ce1954cccf4941e5d22.svg",revision:"48229a0923446517a4494a550636b622"},{url:"/_next/static/media/hand.0a270d4833dcfc537e41aa6fab2d33d7.svg",revision:"e4c457ab934135983af53c40e95665ca"},{url:"/_next/static/media/texture-grey.a071fe8a4d35340d757cfe856c7efa73.png",revision:"270b34db276e5a260fbfb07cea1dc1d3"},{url:"/_next/static/media/texture.78474645c0fd0638c0c4ba5c27da9476.png",revision:"98e9a91c5162213ca6d621f4936347b1"},{url:"/bentway-logo.jpg",revision:"b63c89a85a86008f92c55fcb16420d6b"},{url:"/circle.svg",revision:"abc80d8f91d06362680c0fd2e69a9a3d"},{url:"/daaps-logo.svg",revision:"abc80d8f91d06362680c0fd2e69a9a3d"},{url:"/doors-bg.jpg",revision:"cdf17587f5fffda8ad8cf59ff7fc12b4"},{url:"/favicon.ico",revision:"76d6f2c237ed29019c17f48a5b19abd2"},{url:"/fonts/Jost-Black.ttf",revision:"4bfa22c31b712bf94869db11a0f68ad2"},{url:"/fonts/Jost-BlackItalic.ttf",revision:"4044db1344a9542546416d5e97876a09"},{url:"/fonts/Jost-Bold.ttf",revision:"90fc0121ac53dbe0b32eada18636660b"},{url:"/fonts/Jost-BoldItalic.ttf",revision:"8d34e9fd494dc090057f2b38c0f537ee"},{url:"/fonts/Jost-ExtraBold.ttf",revision:"620b052a42968e4e7e40c82b64168b8f"},{url:"/fonts/Jost-ExtraBoldItalic.ttf",revision:"981789381ceca1af0d035bb1781dd254"},{url:"/fonts/Jost-ExtraLight.ttf",revision:"80b98f22bd6831cd2d803ffeec021ad8"},{url:"/fonts/Jost-ExtraLightItalic.ttf",revision:"fe54badb871a3f16e367927bee6a2f0a"},{url:"/fonts/Jost-Italic-VariableFont_wght.ttf",revision:"15bebf10c32e1ffc69dbe30de41c97a8"},{url:"/fonts/Jost-Italic.ttf",revision:"5be78235cb8343126b817af2130f3aed"},{url:"/fonts/Jost-Light.ttf",revision:"7f98a7858a75c5aebdc5281eff4e6b5a"},{url:"/fonts/Jost-LightItalic.ttf",revision:"e01067ed8787ca7dc793e0e1aa2532bc"},{url:"/fonts/Jost-Medium.ttf",revision:"55e94bca0c5df2836080235f138a0308"},{url:"/fonts/Jost-MediumItalic.ttf",revision:"4e8825ca7111b81ba659e9093f0f88f9"},{url:"/fonts/Jost-Regular.ttf",revision:"31693d0bf15b75c9d0baf033edfeb00f"},{url:"/fonts/Jost-SemiBold.ttf",revision:"d5a291dd16dbe334f56a12ad53b6a058"},{url:"/fonts/Jost-SemiBoldItalic.ttf",revision:"0e055181230b32d54b456732b15caece"},{url:"/fonts/Jost-Thin.ttf",revision:"f1a0dadc29c2b1e21b822ce294a64a3d"},{url:"/fonts/Jost-ThinItalic.ttf",revision:"7b25755b3660b3d119b9ce51e6090233"},{url:"/fonts/Jost-VariableFont_wght.ttf",revision:"2cda2bbc3a42cea8ad339e53420110a1"},{url:"/fonts/Plastic-ChainBlack.eot",revision:"93834e06debe53bbe5284418f062db1b"},{url:"/fonts/Plastic-ChainBlack.otf",revision:"e299e3727e261ee8f14eea4571c34091"},{url:"/fonts/Plastic-ChainBlack.woff",revision:"e05eebf3421e38a9effe536e3a645da5"},{url:"/fonts/Plastic-ChainBlack.woff2",revision:"05cb429d1f35e94a59169c4e6876209f"},{url:"/fonts/Plastic-ChainBold.eot",revision:"64daf18b661e1f015f369602e6098331"},{url:"/fonts/Plastic-ChainBold.otf",revision:"9c60d29d7b821b7f81fcb38e4a285452"},{url:"/fonts/Plastic-ChainBold.woff",revision:"bf26f3c33e27415d39feb281d55eac7a"},{url:"/fonts/Plastic-ChainBold.woff2",revision:"783e3eb973e3d45ec6cc12fe7748190d"},{url:"/fonts/Plastic-ChainLight.eot",revision:"f5aabbb8e7d4a683be7d88096c2e7379"},{url:"/fonts/Plastic-ChainLight.otf",revision:"988ce0b089c546d2f24935846e993caa"},{url:"/fonts/Plastic-ChainLight.woff",revision:"0597514379a12e051b8592efe22374bf"},{url:"/fonts/Plastic-ChainLight.woff2",revision:"b90f1eec40b1192bf3de3e9d6082d9a0"},{url:"/fonts/Plastic-ChainMedium.eot",revision:"16630ff579c19afdc65766235efebce1"},{url:"/fonts/Plastic-ChainMedium.otf",revision:"29b0dea5eb4c12986da540ac9420f285"},{url:"/fonts/Plastic-ChainMedium.woff",revision:"e5e03d043b276c2b0658483b65c3ba20"},{url:"/fonts/Plastic-ChainMedium.woff2",revision:"4b6cad958633f4b19e1818759b1ff7e9"},{url:"/fonts/Plastic-ChainRegular.eot",revision:"16d7613e41dafd4059867d33a743cc87"},{url:"/fonts/Plastic-ChainRegular.otf",revision:"569f534e3425ccfbd419e0c1a77fc573"},{url:"/fonts/Plastic-ChainRegular.woff",revision:"25dffb96fd4e040a052b209542ccfbd7"},{url:"/fonts/Plastic-ChainRegular.woff2",revision:"002ba41f65b973cc3daf4cc19c82cf5e"},{url:"/fonts/Plastic-ChainThin.eot",revision:"a1f57a43f719ccf5fee38b779d887046"},{url:"/fonts/Plastic-ChainThin.otf",revision:"7bd72e67407439321262e1347489d644"},{url:"/fonts/Plastic-ChainThin.woff",revision:"ab792455d7b82022c9f9879596e74938"},{url:"/fonts/Plastic-ChainThin.woff2",revision:"4faffa7153701adbfa74d0888f7dba40"},{url:"/fonts/Plastic-SimpleBlack.eot",revision:"dc34d0d95b824837a04078454c61ea56"},{url:"/fonts/Plastic-SimpleBlack.otf",revision:"88f69a5ab4096a1bae6a66c939099b32"},{url:"/fonts/Plastic-SimpleBlack.woff",revision:"7629f5a3dffeda9b27a83dd151617099"},{url:"/fonts/Plastic-SimpleBlack.woff2",revision:"6fbeb999e1be5228cc2e48c67df01daa"},{url:"/fonts/Plastic-SimpleBold.eot",revision:"4c72d576ea3d21bbae5061441619eab1"},{url:"/fonts/Plastic-SimpleBold.otf",revision:"3116df9813eded9cfdf5fde5a9c898a6"},{url:"/fonts/Plastic-SimpleBold.woff",revision:"8271ab43ac4b2bbb7212537317c19ac9"},{url:"/fonts/Plastic-SimpleBold.woff2",revision:"4be54465f6807d82ae919703c98ee6ee"},{url:"/fonts/Plastic-SimpleLight.eot",revision:"7403f6107d7cd3ff36b55bc983bd3c08"},{url:"/fonts/Plastic-SimpleLight.otf",revision:"ba08a58c59bfa1af3423522ba89097c3"},{url:"/fonts/Plastic-SimpleLight.woff",revision:"cd8630f3358cf153c09b97440bd64457"},{url:"/fonts/Plastic-SimpleLight.woff2",revision:"6449ab31c097411dfb9add490bb5db8b"},{url:"/fonts/Plastic-SimpleMedium.eot",revision:"d19d6c86752e104f9aa9445b01e21ac8"},{url:"/fonts/Plastic-SimpleMedium.otf",revision:"766a706d9de16ff9f11d858e4c6c0601"},{url:"/fonts/Plastic-SimpleMedium.woff",revision:"f91edb53edbc8813602df8cf117b3ab7"},{url:"/fonts/Plastic-SimpleMedium.woff2",revision:"ed70dba82f0c0130911180b07298d3de"},{url:"/fonts/Plastic-SimpleRegular.eot",revision:"d70ca0258aec2ba6d6eb567cb73d8f21"},{url:"/fonts/Plastic-SimpleRegular.otf",revision:"3bbffcd14296344c6f08b94e51842dfb"},{url:"/fonts/Plastic-SimpleRegular.woff",revision:"401032020086497f41efcefdf36ee8e0"},{url:"/fonts/Plastic-SimpleRegular.woff2",revision:"9d80ab0b20a10cb84bc04de24905bb72"},{url:"/fonts/Plastic-SimpleThin.eot",revision:"991db32a6b294a5c7fba4e64d7abe29c"},{url:"/fonts/Plastic-SimpleThin.otf",revision:"d7a520e60f23cdbefedb0d3509f3e0ef"},{url:"/fonts/Plastic-SimpleThin.woff",revision:"a2b4024837db664ea3f407e238604a56"},{url:"/fonts/Plastic-SimpleThin.woff2",revision:"df6a81f24b00720e0174ba6a54250d08"},{url:"/fonts/PlasticGX.ttf",revision:"c13f6d48f955ee0ce61055a15954d7ff"},{url:"/fonts/PlasticGX.woff2",revision:"0c6cef7edcea2d06f434021786feddcd"},{url:"/from-later-logo.jpg",revision:"c7c645920c8b7290f3050f9c642851cb"},{url:"/icons/apple-icon.png",revision:"a31c0edde8206ff5a9d216518392ce5a"},{url:"/icons/favicon-16x16.png",revision:"cc3192002a941077e40df62d8eba2203"},{url:"/icons/favicon-32x32.png",revision:"a7985902eefc417152b15d0502ab9462"},{url:"/icons/favicon-96x96.png",revision:"267297f7dcf3c548cf3887171dd89f02"},{url:"/icons/icon-144x144.png",revision:"3ee7caba3a1b79869706e9bbdd3bb021"},{url:"/icons/icon-152x152.png",revision:"aefd7c62e83668b3f63f2f4d56563e3d"},{url:"/icons/icon-192x192.png",revision:"3338356aface641e4486464a11198a7f"},{url:"/icons/icon-72x72.png",revision:"0e8d83e6a4b782b8901d0a7fc709fe24"},{url:"/icons/icon-96x96.png",revision:"267297f7dcf3c548cf3887171dd89f02"},{url:"/icons/ms-icon-144x144.png",revision:"3ee7caba3a1b79869706e9bbdd3bb021"},{url:"/icons/ms-icon-150x150.png",revision:"653c96618637d98c871fecaf84a58896"},{url:"/icons/ms-icon-310x310.png",revision:"2f48edcf83369edb5ce45017a51d7734"},{url:"/icons/ms-icon-70x70.png",revision:"61abf81b4ff80f4ec149b6249b34b40e"},{url:"/images/app-background-01.svg",revision:"425bff1340066448c7fa536cf43d709f"},{url:"/images/app-background-02.svg",revision:"f371509afb62094f466a63bacd8fd4ed"},{url:"/images/app-background-03.svg",revision:"dac750665b71c536e44ab88b7f23adce"},{url:"/images/app-background-04.svg",revision:"f9ff8815f804727e12db82de58dcdadd"},{url:"/images/card1.png",revision:"466e5bcaf9cea7816ba058ce2fe0dfb3"},{url:"/images/card1.svg",revision:"0c5a48970d93feb65e141f81ed3b582d"},{url:"/images/card1a.svg",revision:"dd46cc257f43834ad39f26a92fb9a9f5"},{url:"/images/card1b.svg",revision:"8812452061442d51f5306dcee72cad23"},{url:"/images/card1c.svg",revision:"d72aaa5966a0d9db473313f91cda6913"},{url:"/images/card2.png",revision:"9a39317f9c28d4c31dbaafc72a42df04"},{url:"/images/card2.svg",revision:"6f4359b2b6b8a71a6e23f24790b5e2c3"},{url:"/images/card2a.svg",revision:"aaaac07ce8e93a7b7c780e7b7165bf97"},{url:"/images/card2b.svg",revision:"2d3fb27500eae7330b10dba682f011d7"},{url:"/images/card2c.svg",revision:"acb12a3d823554efd9b14109903c0848"},{url:"/images/card3.png",revision:"535bf8fbe3308f419a3fab9cc96d1be0"},{url:"/images/card3.svg",revision:"51bb4133ad753ce82717b88459739499"},{url:"/images/card3a.svg",revision:"1b65905e9986aa9d489b988fdb5b86e7"},{url:"/images/card3b.svg",revision:"105992c1a3bb339040a87cdaa42dbc79"},{url:"/images/card3c.svg",revision:"3b81773801d3432456da91670f799b02"},{url:"/images/card3d.svg",revision:"7063590f6111a82465dfce363ec241da"},{url:"/images/card4.png",revision:"a2a3c71d990df81dd7e318c08b91431a"},{url:"/images/card4.svg",revision:"e256eecb1d42faa9cb847d646ca20a1f"},{url:"/images/card4a.svg",revision:"7ece1d5275bb8e66df4e62eeedc45202"},{url:"/images/card4b.svg",revision:"9b1e7ff85b147312d9fd79ab0d805fa3"},{url:"/images/card4c.svg",revision:"9e3990714fb16643e73ad787286c555f"},{url:"/images/doorway-shape-02.svg",revision:"f2dd55a4cbdc976f1572a090edaf4ee2"},{url:"/images/eye.svg",revision:"6405712c9314088c25509a25ea1b912c"},{url:"/images/galaxy.svg",revision:"48229a0923446517a4494a550636b622"},{url:"/images/hand.svg",revision:"e4c457ab934135983af53c40e95665ca"},{url:"/images/paper1.png",revision:"f232781616784cfbe8d3f121c8ca03a5"},{url:"/images/scroll-arrow.svg",revision:"e562b46536dd4b2f9f1a78385326ad38"},{url:"/images/texture-grey.png",revision:"270b34db276e5a260fbfb07cea1dc1d3"},{url:"/images/texture.png",revision:"98e9a91c5162213ca6d621f4936347b1"},{url:"/manifest.json",revision:"11c53384aba380552728155187a11030"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
