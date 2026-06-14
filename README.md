# Job Application Autofiller - Setup Guide

## 1. Clone Repository

```bash
git clone <repo-url>
cd job-application-autofiller
```

---

## 2. Create Virtual Environment (Optional)

Windows PowerShell:

```powershell
python -m venv venv
.\venv\Scripts\activate
```

---

## 3. Project Structure

```text
job-application-autofiller/

├── extension/
│   ├── manifest.json
│   │
│   ├── popup/
│   │   ├── popup.html
│   │   ├── popup.js
│   │   └── popup.css
│   │
│   ├── content/
│   │   ├── scanner.js
│   │   ├── autofill.js
│   │   └── fieldExtractor.js
│   │
│   ├── background/
│   │   └── background.js
│   │
│   └── ai/
│       └── groq.js
│
├── README.md
└── .gitignore
```

---

## 4. Load Extension

Open Chrome/Brave:

```text
chrome://extensions
```

Enable:

```text
Developer Mode
```

Click:

```text
Load Unpacked
```

Select:

```text
<project-root>/extension
```

---

## 5. Reload Extension After Changes

Every time code changes:

1. Open:

```text
chrome://extensions
```

2. Click the refresh icon on the extension.

3. Refresh the browser tab:

```text
Ctrl + R
```

---

## 6. Verify Extension Loaded

Open:

```text
https://google.com
```

Press:

```text
F12
```

Open:

```text
Console
```

Expected output:

```text
Job Autofiller Loaded
```

---

## 7. Test Popup

Click the extension icon.

Fill:

```text
Name
Email
Phone
```

Click:

```text
Save Profile
```

Expected:

```text
Profile Saved
```

---

## 8. Test Messaging

Open Google.

Open DevTools Console:

```text
F12
```

Click extension.

Click:

```text
Autofill Current Page
```

Expected:

```text
MESSAGE RECEIVED:
{
  action: "autofill"
}

PROFILE:
{
  ...
}
```

---

## Common Issue

Error:

```text
Could not establish connection.
Receiving end does not exist.
```

Fix:

1. Reload extension
2. Refresh webpage
3. Retry

Content scripts are only injected when a page loads.

---

## Git Workflow

Create feature branch:

```bash
git checkout -b feature/autofill-extension
```

Commit changes:

```bash
git add .
git commit -m "message"
```

Push branch:

```bash
git push -u origin feature/autofill-extension
```
