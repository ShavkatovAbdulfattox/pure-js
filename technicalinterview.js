// Part A: Please describe the following code, almost line by line.

// {
// …
//   key: "sendSingleCallAds",
//   value: function() {
//       const b = this,
//     p = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 700;

//       if (this.adsList && this.adsList.length < 1)
//           return !1;

//       window && window.googletag && googletag.pubadsReady ? (window.googletag.pubads().disableInitialLoad(),
//       window.googletag.pubads().enableSingleRequest(),
//       window.googletag.pubads().enableAsyncRendering(),
//       this.registerAdCollectionSingleCall(this.adsList, p)) : setTimeout((function() {
//           b.sendSingleCallAds()
//       }
//       ), 2e3)
//   }
// …
// }

// Part B: Rewrite the above code (unminify it) to meet your coding standards.
const obj = {
  key: "sendSingleCallAds",
  value: function () {
    const self = this;
    const delay =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 700;

    if (this.adsList && this.adsList.length < 1) {
      return false;
    }

    if (window && window.googletag && googletag.pubadsReady) {
      window.googletag.pubads().disableInitialLoad();
      window.googletag.pubads().enableSingleRequest();
      window.googletag.pubads().enableAsyncRendering();
      this.registerAdCollectionSingleCall(this.adsList, delay);
    } else {
      setTimeout(function () {
        self.sendSingleCallAds();
      }, 2000);
    }
  },
};
