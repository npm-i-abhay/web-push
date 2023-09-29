if (typeof window !== "undefined") {
  window.onload = async () => {
    let sw = await navigator.serviceWorker.register("/sw.js");
    console.log(sw);
  };
}

export const subscribeToPushNotifications = async () => {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey:
      "BAUGdgClt838d3nHA7k1ncse9lHrl0dTRoODP0YFW2cYxxNVBnMW-ZdnOPYPQeF67kggwfMKelvOAPOXGExVRNI",
  });
  console.log(JSON.stringify(push));
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
