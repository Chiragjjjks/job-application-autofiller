document
.getElementById("saveBtn")
.addEventListener("click", async () => {

    const profile = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    await chrome.storage.local.set({
        profile
    });

    alert("Profile Saved");
});