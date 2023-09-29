var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BAUGdgClt838d3nHA7k1ncse9lHrl0dTRoODP0YFW2cYxxNVBnMW-ZdnOPYPQeF67kggwfMKelvOAPOXGExVRNI",
  privateKey: "6OSupRBpQztwhaATYmYE458qGPJ3qclWWZ31hi6qXOE",
};

push.setVapidDetails(
  "mailto:abhaybakshi8@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dqHvbM18w8c:APA91bH2jPujBZczNYnppJb8LD4_FGw5G6ujDSI7uBc-mSr3qxhvDedrTAcPaHyTB4be3JAb0rwvLtzEcJLuSNeBwgjxlessTWoKrvQb_DQ-a0WxIo-pi89mwEZsRZaDtK8S-DPLrYmE",
  expirationTime: null,
  keys: {
    p256dh:
      "BJntP1HrdDejqUP3jUUWuxfxKFc4PLp_IP2AELgjxzAv4skPFTLHMwBVaJW1a0z7SYtCB-Tx60qXKGWRUeOICD8",
    auth: "EAaRDMgOWB76Mkff-wDRKw",
  },
};
push.sendNotification(sub, "test message");
