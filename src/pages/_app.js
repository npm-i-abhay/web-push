if (typeof window !== "undefined") {
  window.onload = async () => {
    let sw = await navigator.serviceWorker.register("/sw.js");
    console.log(sw);
  };
}

export const subscribeToPushNotifications = async () => {
  if (!("Notification" in window)) {
    console.log(window);
    console.log("This browser does not support notifications");
    return;
  }

  const permission = await Notification.requestPermission();

  switch (permission) {
    case "granted":
      const sw = await navigator.serviceWorker.ready;
      const push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BAUGdgClt838d3nHA7k1ncse9lHrl0dTRoODP0YFW2cYxxNVBnMW-ZdnOPYPQeF67kggwfMKelvOAPOXGExVRNI",
      });
      window.alert(JSON.stringify(push));
      console.log("Subscription successful:", JSON.stringify(push));
      break;
    case "denied":
      window.alert("Notification permission denied");
      break;
    case "default":
      window.alert("Notification permission has not been set yet");
      break;
    default:
      window.alert("Unexpected notification permission state:", permission);
      break;
  }
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
