const VAPID_PUBLIC_KEY = "BMntNKURDsrT_FV7D8Nn8nXZWn_J62wMMrjzXGuoiXBscvPqzckV8c4RKUCmJzjAKWez2LUbD11OWMhcUy6GwWA";

// check for service Worker
if("serviceWorker" in navigator) {
    send().catch(err => console.log(err));
}

// Register SW, Regisster Push, Send Push
async function send() {
// Register SW
    console.log("Registering service worker...");
    const register = await navigator.serviceWorker.register("/worker.js", {scope: "/"});
    console.log("Service Worker Registered");

// Register Push
    console.log("Registering Push...");
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
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
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}