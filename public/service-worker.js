/* eslint-disable func-names */
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = (name) => {
    if (name !== "require") {
      name += ".js";
    }
    let promise = Promise.resolve();

    const require = (names, resolve) => {
      Promise.all(names.map(singleRequire)).then((modules) => resolve(modules.length === 1 ? modules[0] : modules));
    };

    const registry = {
      require: Promise.resolve(require)
    };

    if (!registry[name]) {
      promise = new Promise((resolve) => {
        if ("document" in self) {
          const script = document.createElement("script");
          script.src = name;
          document.head.appendChild(script);
          script.onload = resolve;
        } else {
          importScripts(name);
          resolve();
        }
      });
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map((depName) => {
          switch (depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then((deps) => {
        const facValue = factory(...deps);
        if (!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",["./workbox-b90066a8"], function (workbox) { "use strict";

  /**
   * Welcome to your Workbox-powered service worker!
   *
   * You'll need to register this file in your web app.
   * See https://goo.gl/nhQhGp
   *
   * The rest of the code is auto-generated. Please don't update this file
   * directly; instead, make changes to your Workbox build configuration
   * and re-run your build process.
   * See https://goo.gl/2aRDsh
   */

  importScripts();
  workbox.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute(
    [
      {
    "url": "/_next/static/runtime/amp.js",
    "revision": "1c60d6b33b389162128030c309c1d80a"
      },
      {
    "url": "/_next/static/runtime/amp.js.map",
    "revision": "fd38c26e5868171cf58387cd48fd71f4"
      },
      {
    "url": "/_next/static/runtime/main.js",
    "revision": "bba4e516f8fcbe18d5fc97699c4db96b"
      },
      {
    "url": "/_next/static/runtime/main.js.map",
    "revision": "a0b530375180abf14c7296894afb81fd"
      },
      {
    "url": "/_next/static/runtime/polyfills.js",
    "revision": "cf6f4b12f4634f8f79378d41f3a855a4"
      },
      {
    "url": "/_next/static/runtime/polyfills.js.map",
    "revision": "82dca635a629d8ab38c3ad85b2ad65a2"
      },
      {
    "url": "/_next/static/runtime/react-refresh.js",
    "revision": "57d6b6dd46444111cc6c2cb191ec72bc"
      },
      {
    "url": "/_next/static/runtime/react-refresh.js.map",
    "revision": "3eefcd56d3f5bfcc8b7c33d935f42689"
      },
      {
    "url": "/_next/static/runtime/webpack.js",
    "revision": "915d3605a14f0bfd9606947497329e34"
      },
      {
    "url": "/_next/static/runtime/webpack.js.map",
    "revision": "d1bd060599ff123c9cc9a644fb79ec6a"
      }
    ],
    {
    "ignoreURLParametersMatching": [/ts/]
    }
  );
  workbox.cleanupOutdatedCaches();
});
// # sourceMappingURL=service-worker.js.map
