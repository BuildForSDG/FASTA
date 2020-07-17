console.log("Service worker loaded!");


// eslint-disable-next-line no-restricted-globals
self.addEventListener("push", (e) => {
  const { data } = e;
  console.log(data, "Push received...");


  fetch("/api/v1/notification").then((ed) => ed.json()).then((d) => {
    const { options } = d;
    // eslint-disable-next-line no-restricted-globals
    self.registration.showNotification(`${options.subject}`, {
      body: `${options.text}
      ${options.output}`,
      icon: "/car.png"
    });
  })
    .catch((ee) => console.log(ee));

  // eslint-disable-next-line no-restricted-globals
  // self.registration.showNotification("FASTA is here... Expect MORE!!!", {
  //   body: "Notified by FASTA.ng",
  //   icon: "/car.png"
  // });
});
