console.log("Service worker loaded!");

self.addEventListener("push", e => {
    const { data } = e;
    console.log(data, "Push received...");

    self.registration.showNotification("FASTA is here... Expect MORE!!!", {
        body: "Notified by FASTA.ng",
        icon: "/car.png"
    });
});