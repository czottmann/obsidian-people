1. Download the latest release's ZIP file from https://github.com/czottmann/obsidian-people/releases.
2. Extract the ZIP archive.
3. Add the vault to Obsidian.
4. Install [Actions For Obsidian](https://actions.work/actions-for-obsidian) ("AFO").
5. In AFO, link the new vault.
6. In the vault `Components/` folder, double-click all `*.shortcut` files to install them in macOS Shortcuts. (I suggest placing them all in a new folder in Shortcuts, e.g. "Obsidian People".)

That's it. Continue to [[USAGE]] or read on for how to integrate the important parts into your own, existing vault.

## Integrating with an existing vault

1. Ensure your existing vault is set up in [Actions For Obsidian](https://actions.work/actions-for-obsidian).
2. Copy `Templates/Person.md` to your vault's templates folder.
3. Copy `Components/Contact Details.base` (contact photo) and `Components/actions.js` (Dataview logic) into a `Components/` folder in your root directory.

If you already use a UID plugin like [Note UID Generator](https://github.com/Netajam/obsidian_note_uid_generator), remove the placeholder value from the [[Person]] template.

If you want the contact photo in a sidebar, drag `Components/Contact Details.base` into the sidebar to position it.

If you want to add the contact photo to the [[Person]] template so new contact notes display the picture, embed the related Bases file:

```
![[Contact Details.base]]
```
