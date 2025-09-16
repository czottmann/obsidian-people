// I would've loved to do this w/o Dataview, but I need the vault name, and
// there doesn't seem to be a way to gather the vault name in a `.base` file. 🤷🏻‍♂️

const vaultName = app.vault.getName();
const current = dv.current();
const inputParam = encodeURIComponent(
  JSON.stringify({ uid: current.uid, vaultName }),
);
const encodedVaultName = encodeURIComponent(vaultName);
const encodedUID = encodeURIComponent(current.uid);

const links = [
  [
    "Sync to Apple Contacts",
    `barcuts://run-workflow?title=obsidian-people-sync&input=${inputParam}`,
  ],
  [
    "Open in Apple Contacts",
    `barcuts://run-workflow?title=obsidian-people-open&input=${inputParam}`,
  ],
  current.Email ? ["Send email", `mailto:${current.Email[0]}`] : null,
  current.Phone
    ? ["Call", `tel:${current.Phone[0].replace(/[^\+\d]+/g, "")}`]
    : null,
]
  .filter((l) => !!l);

// ["Copy link", "#"],
// `navigator.clipboard.writeText('obsidian://actions-uri/note/open?vault=${encodedVaultName}&uid=${encodedUID}')`,

const list = links
  // I know how this looks, I'm old enough to remember `<blink>` elements, FFS;
  // but it works, so please don't judge me too harshly 😅
  .map((l) => `<a href="${l[1]}"><button>${l[0]}</button></a>`)
  .join(" ");

dv.paragraph(`
  ###### Actions
  ${list}
`);
