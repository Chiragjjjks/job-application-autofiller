console.log(
    "Job Autofiller Loaded"
);
chrome.runtime.onMessage.addListener(
  async (message) => {

    if (message.action !== "autofill")
      return;

    const data =
      await chrome.storage.local.get(
        "profile"
      );

    console.log(
      "PROFILE",
      data.profile
    );
});
chrome.runtime.onMessage.addListener(
  async (message) => {

    console.log("MESSAGE RECEIVED:", message);

    if (message.action !== "autofill") {
      return;
    }

    const data = await chrome.storage.local.get("profile");

    console.log("PROFILE:", data.profile);
});