const VAPID_PUBLIC_KEY = "BJOK8gh8hHPlZbr5Ci4LmJMWNlDsTdmQ2bGfE7TA6c9UhGmEuHTvjS179aqzobeQfQgWE94ELR26qbozfOfAVpc";

// check for service Worker
if ("serviceWorker" in navigator) {
  // eslint-disable-next-line no-use-before-define
  send().catch((err) => console.log(err));
}

// Register SW, Regisster Push, Send Push
async function send() {
// Register SW
  console.log("Registering service worker...");
  const register = await navigator.serviceWorker.register("/worker.js", { scope: "/" });
  console.log("Service Worker Registered");

  // Register Push
  console.log("Registering Push...");
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    // eslint-disable-next-line no-use-before-define
    applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
  });
  console.log("Push Registered...");

  // Send Push Notification
  console.log("Sending Push...");
  await fetch("api/v1/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json"
    }
  });
}

function urlBase64ToUint8Array(base64String) {
  // eslint-disable-next-line no-mixed-operators
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    // eslint-disable-next-line no-useless-escape
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
