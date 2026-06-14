document
.getElementById("saveBtn")
.addEventListener("click", async () => {

    const profile = {
        personal: {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            address: ""
        },

        education: {
            college: "",
            university: "",
            cgpa: ""
        },

        links: {
            linkedin: "",
            github: "",
            portfolio: ""
        }
    };

    await chrome.storage.local.set({
        profile
    });

    console.log("PROFILE SAVED", profile);

    alert("Profile Saved");
});
document
.getElementById("autofillBtn")
.addEventListener("click", async () => {

    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    try {

    const response =
        await chrome.tabs.sendMessage(
            tab.id,
            {
                action: "autofill"
            }
        );

    console.log(response);

}
catch(error){

    console.error(
        "MESSAGE ERROR:",
        error
    );

}

});