if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise(async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()})),i.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},i=(i,a)=>{Promise.all(i.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(i)};self.define=(i,s,c)=>{a[i]||(a[i]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+i.slice(1)};return Promise.all(s.map(i=>{switch(i){case"exports":return a;case"module":return n;default:return e(i)}})).then(e=>{const i=c(...e);return a.default||(a.default=i),a})}))}}define("./service-worker.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/_buildManifest.js",revision:"0d91ac84db6e05aed0a6bd13d5fd6ce9"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/_app.js",revision:"43825402b5fd963451dadb34bd0eaa13"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/_error.js",revision:"d5eed0e6bf74bbeac76e58e727ee39d7"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/account.js",revision:"ab7e35484d27d9abbdbe5dc5d7b61dbf"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/changepassword.js",revision:"43cd06c957b2a9828443d5c9b5c15cc6"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/home.js",revision:"96e31dd88ed0ac01ab1866ecf004982c"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/home.js.LICENSE.txt",revision:"ea0bce3b9c1141e047a7e57907711738"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/index.js",revision:"7cfa7944952dcc4b73ec4f9845a2e7d8"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/login.js",revision:"c473e249cb6c3c852e1f878a2b1407ec"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/report.js",revision:"4aff8ddef39c21780d459f8702a1f609"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/reports/%5Bid%5D.js",revision:"1f1cf365da4b69824ecfd81836dbfc7d"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/reports/makeReport.js",revision:"2d87cbd31b51ec2a8aef9da9dcf7736a"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/resetpassword.js",revision:"7463d59b0fc3d99063096a69572829a6"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/signup.js",revision:"24d23e0b32b3ad88f5ed9970b995312a"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/trips/new-trip.js",revision:"2905c0401c0295e76a7f1da4e82ee740"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/trips/ongoing-trip.js",revision:"5154635364c0614c1fc41f955127c54e"},{url:"/_next/static/5-LJU5mcrODDsjIQlHZRU/pages/trips/scheduled-trips.js",revision:"9f723b5c4ed2acfd3c048604d95bae2e"},{url:"/_next/static/chunks/1aab45fd3827b0bf9de794f740982dbf0b6b11f1.fc900ed3a1a4ff85d61e.js",revision:"ff06e820ea217e7446c42744a74e9a59"},{url:"/_next/static/chunks/1aab45fd3827b0bf9de794f740982dbf0b6b11f1.fc900ed3a1a4ff85d61e.js.LICENSE.txt",revision:"6fce53c7c7713ebf61712cc2929746fa"},{url:"/_next/static/chunks/36b4acf5cae9b4e3bf888b066aeca6e1bc5470a3.2ae56c701aa7a502e319.js",revision:"2917fd7888714a182a93d18237b94852"},{url:"/_next/static/chunks/ae8cba2bd66b8b6edecf8b7749a34e478faf12c8.e1c277f6705672d65a2f.js",revision:"2fe575ffb4e15847a768059b0a2690c9"},{url:"/_next/static/chunks/ae8cba2bd66b8b6edecf8b7749a34e478faf12c8.e1c277f6705672d65a2f.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"},{url:"/_next/static/chunks/c4399097b85165b98719367129a12d3ba355a977.222f0156a027bbd31897.js",revision:"d6407fb2d762fedcee5c429414e70e32"},{url:"/_next/static/chunks/c4399097b85165b98719367129a12d3ba355a977.222f0156a027bbd31897.js.LICENSE.txt",revision:"e88a3e95b5364d46e95b35ae8c0dc27d"},{url:"/_next/static/chunks/commons.a781cb69f6414243e73c.js",revision:"288ceeeb69460718228c4c62fc60c7ff"},{url:"/_next/static/chunks/framework.619a4f70c1d4d3a29cbc.js",revision:"33dad5bd4dd35523782d0a34ac47f9fc"},{url:"/_next/static/chunks/framework.619a4f70c1d4d3a29cbc.js.LICENSE.txt",revision:"c7c771c7a9ea0b2f7e6b82ef94cc9f76"},{url:"/_next/static/css/447a63edc3862253dca8.css",revision:"568df9a46d3d9575025370b08e186f60"},{url:"/_next/static/runtime/main-2bb906c3ad6189d96e5f.js",revision:"f83496c53d0619841da91ad513f2ee7e"},{url:"/_next/static/runtime/polyfills-e4875719f3b6f90f1438.js",revision:"52d75dfc0d52deb2ca54d933b159c354"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/Back-Arrow-Black.svg",revision:"455e66882965f2ad078423bc430f403d"},{url:"/images/Backward arrow.svg",revision:"dfbd21b48119d9d84e5747e0cd305e94"},{url:"/images/Connector.png",revision:"44b49e1cbcbc1050723e71d75245da11"},{url:"/images/Explore-active.svg",revision:"53fbd643facadbb99f7a625ba588b834"},{url:"/images/Explore-inactive.png",revision:"4d698756135a8f3726974a903da6a304"},{url:"/images/Home-inactive.svg",revision:"b83da80167e63dcbe305b2d09e247b15"},{url:"/images/Home.png",revision:"d170494b75f551835714579c98de8461"},{url:"/images/Icon feather-alert-circle.svg",revision:"d2de2adb718aacc5b52eea95adcc6e0b"},{url:"/images/Logo-small.svg",revision:"7290f338fa3236b2becc8ed9e2d8dff9"},{url:"/images/Logo.png",revision:"889048b77db6d3af187fda9f08a25a0c"},{url:"/images/Logo.svg",revision:"305e864ccdd9a5edf09e1989631f184f"},{url:"/images/More.png",revision:"c87a948dfc1abc09af605915d636ce08"},{url:"/images/Profile-active.svg",revision:"fd289734bc3e912b28df69fd615f1d71"},{url:"/images/Profile-inactive.png",revision:"16b01eb4a69852437495b3d6d9d8fe7b"},{url:"/images/Reports-active.svg",revision:"d2c96dae50914bdc7be70bc90f6778e8"},{url:"/images/Reports-inactive.png",revision:"7de595cf915b2778d0ef3bd63f2a3bdd"},{url:"/images/add-trip.svg",revision:"b6037615ca5d925062f79fa13e9eae9c"},{url:"/images/alert.png",revision:"cf411ef77d19edffd20ee13c329c20fa"},{url:"/images/car.png",revision:"b6cef4b39a5af2ec881630788981a5fc"},{url:"/images/delete.svg",revision:"a7b40703dc2f6e9f6854a1f3df111dad"},{url:"/images/destination.png",revision:"d320955c493dc1ea222801cc34acbb03"},{url:"/images/ic_file_new.svg",revision:"14d8482668cf0fed54b24082153579a2"},{url:"/images/icons/android-icon-144x144.png",revision:"07bb512bd67aa999e795af32adef7a00"},{url:"/images/icons/android-icon-192x192.png",revision:"5fb812eff67299b48d33acdbba693252"},{url:"/images/icons/android-icon-36x36.png",revision:"9e5a378fe7eee5ae406071d935cbe02d"},{url:"/images/icons/android-icon-48x48.png",revision:"62e2a0f31fda1112d0cff4430f060ca4"},{url:"/images/icons/android-icon-72x72.png",revision:"67a212a8c82655ab016c21c4f35b2ccd"},{url:"/images/icons/android-icon-96x96.png",revision:"0b18e3ccef9dda8aeb64f6242ff22830"},{url:"/images/icons/apple-icon-114x114.png",revision:"5124b20a1a699125ae23e0cb94f1dba0"},{url:"/images/icons/apple-icon-120x120.png",revision:"9cebee1648d1e319ca6da7dcc635e253"},{url:"/images/icons/apple-icon-144x144.png",revision:"07bb512bd67aa999e795af32adef7a00"},{url:"/images/icons/apple-icon-152x152.png",revision:"797808673cdf1dc64a2b8de555fd3086"},{url:"/images/icons/apple-icon-180x180.png",revision:"515fc51fbd1246f000f0303c3bbba112"},{url:"/images/icons/apple-icon-57x57.png",revision:"5d19edf545a42c9de0276a10c7dab7d7"},{url:"/images/icons/apple-icon-60x60.png",revision:"677516be91dfda06e5b722dc6756b898"},{url:"/images/icons/apple-icon-72x72.png",revision:"67a212a8c82655ab016c21c4f35b2ccd"},{url:"/images/icons/apple-icon-76x76.png",revision:"c7194c6a9914cd5909db206263d74d96"},{url:"/images/icons/apple-icon-precomposed.png",revision:"45c664544524338732d302172812b9b0"},{url:"/images/icons/apple-icon.png",revision:"45c664544524338732d302172812b9b0"},{url:"/images/icons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/images/icons/favicon-16x16.png",revision:"d19197b15b8d1e0474a7175d2b7406e5"},{url:"/images/icons/favicon-32x32.png",revision:"8216ca9e74db4ca034e6becc11254edb"},{url:"/images/icons/favicon-96x96.png",revision:"0b18e3ccef9dda8aeb64f6242ff22830"},{url:"/images/icons/favicon.ico",revision:"19b72748b98ab31d18273a2d5d526c4a"},{url:"/images/icons/icon-128x128.png",revision:"770395581c15d4bfe6ddc81e148d507c"},{url:"/images/icons/icon-144x144.png",revision:"770395581c15d4bfe6ddc81e148d507c"},{url:"/images/icons/icon-152x152.png",revision:"770395581c15d4bfe6ddc81e148d507c"},{url:"/images/icons/icon-192x192.png",revision:"770395581c15d4bfe6ddc81e148d507c"},{url:"/images/icons/icon-384x384.png",revision:"770395581c15d4bfe6ddc81e148d507c"},{url:"/images/icons/icon-512x512.png",revision:"770395581c15d4bfe6ddc81e148d507c"},{url:"/images/icons/icon-72x72.png",revision:"2fc64f177c98a53e64de4d9a7269348c"},{url:"/images/icons/icon-96x96.png",revision:"8dcf6aafd74b453ceef0f2f3b1efdb83"},{url:"/images/icons/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/images/icons/ms-icon-144x144.png",revision:"07bb512bd67aa999e795af32adef7a00"},{url:"/images/icons/ms-icon-150x150.png",revision:"7b712bac2a55f29f37dcb671463a3931"},{url:"/images/icons/ms-icon-310x310.png",revision:"ccf1efb798b5518066b7b46bcd1227d5"},{url:"/images/icons/ms-icon-70x70.png",revision:"c424911a25949a4151a7bf2e59db4a1e"},{url:"/images/lock.svg",revision:"d34b160342a266aab38f9322b17d1cdc"},{url:"/images/order-ride.png",revision:"d38391829150585262439aac7ff5c8f2"},{url:"/images/phone.svg",revision:"33e7b31953359f7d957f38d87585bed2"},{url:"/images/profile.svg",revision:"d9bf7e0414d1930ad43520fbd6fefb58"},{url:"/images/road.png",revision:"a72946b087e7e6d7c2b9091f360ec636"},{url:"/images/success.svg",revision:"14a6f298994c8b6ed4505406c9ddb31c"},{url:"/images/traveling.png",revision:"d1b8b1e11e51d9e13dcb2897639939d6"},{url:"/manifest.json",revision:"222965f63b5c92562172d1531482b5a2"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
