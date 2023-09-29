self.addEventListener("push", (event) => {
  const options = {
    body: "This is the body of the notification.",
    icon: "/img/graphics/arrowImage.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      { action: "explore", title: "Explore this new world" },
      { action: "close", title: "Close" },
    ],
  };

  event.waitUntil(self.registration.showNotification("Hello World!", options));
});
