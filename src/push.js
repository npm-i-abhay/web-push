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
    "https://web.push.apple.com/QHU2lO_5MFu87Pq7G46UkddO8ht_gLVZS3Od4_3TfMgOEwlV6XqZcFtRauKEvhTC-YVpyNvxyHsliaO8qeY9EgN0yNpbsVmqb-PcDSEPsZY_hiW-A6IRXH1_9QlX9Uza4vVVaZh3YxyBYB5psUZtMQWk5CFXFkeek712tfvs6bg",
  keys: {
    p256dh:
      "BIIyRzLcYMVVDJjmaOq7oe7b_TpMdvz6ArV-jR2UwtDR-4IFO9J5MAJirY8tP5vHycmCDTJP43q91Exhis9XB6Y",
    auth: "wEu3oMQffgtN9YJGt7FKig",
  },
};
push.sendNotification(sub, "test message");
