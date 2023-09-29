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
    "https://fcm.googleapis.com/fcm/send/caNloXh5AUQ:APA91bFH4kp-XWqkTHsEmuUPQzlA_DwqticUs1VUL7res3qSZ6TwAnEHElnCzOdmlWLCnk7rRBymnF4oHurjdnhB6ihR-_UcPvqOTgnZ8NfzK2C0DGPvN7JEIGzcmI4aT6vRDinmYYHY",
  expirationTime: null,
  keys: {
    p256dh:
      "BJsAEmJfwU9G4sfGpo5rAm0XuqefzT5j31p6c4IZQageDjz_6pF6X-X11MoHTAaZkKaMFEFn3estmuH0q-Mi-SQ",
    auth: "ZPPS_fZjFsYu1BU2aSh9aw",
  },
};
push.sendNotification(sub, "test message");
