// I would've loved to do this w/o Dataview, but I need the vault name, and
// there doesn't seem to be a way to gather the vault name in a `.base` file. 🤷🏻‍♂️

const vaultName = app.vault.getName();
const current = dv.current();
const inputParam = encodeURIComponent(
  JSON.stringify({ uid: current.uid, vaultName }),
);
const encodedVaultName = encodeURIComponent(vaultName);
const encodedUID = encodeURIComponent(current.uid);

dv.header(6, "Actions");
createExternalLink(
  "Sync to Apple Contacts",
  `barcuts://run-workflow?title=obsidian-people-sync&input=${inputParam}`,
);

// Opening a ABE doesn't work, please see `USAGE.md` for the technical background.
/*
if (!this.app.isMobile) {
  createExternalLink(
    "Open in Apple Contacts",
    `barcuts://run-workflow?title=obsidian-people-open&input=${inputParam}`,
  );
}
*/

if (current.Email) {
  createExternalLink("Send email", `mailto:${current.Email[0]}`);
}

if (current.Phone) {
  createExternalLink(
    "Call",
    `tel:${current.Phone[0].replace(/[^\+\d]+/g, "")}`,
  );
}

createButton(
  "Copy UID link",
  `navigator.clipboard.writeText('obsidian://actions-uri/note/open?vault=${encodedVaultName}&uid=${encodedUID}')`,
);

function createButton(label = "Label", onclick = () => {}) {
  dv.el("button", label, { attr: { onclick } });
  dv.span("&nbsp;");
}

function createExternalLink(label = "Label", href = "#") {
  createButton(label, `window.open('${href}')`);
}
