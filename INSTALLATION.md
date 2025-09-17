## Dependencies

- Obsidian 1.9+
- [Actions For Obsidian](https://actions.work/actions-for-obsidian) 2025.1.2+ (macOS/iOS): it provides Shortcuts actions to interact with Obsidian vaults, notes, files
- [BarCuts](https://actions.work/barcuts) (macOS): for running Shortcuts workflows directly from Obsidian

The apps are also created [[README#Author|by me]]. They are shareware, and come with a free trial period of 2+ weeks. They're buy-to-own, there are **no** subscriptions.

## Installation

### 1. General

1. Download the latest release's ZIP file from https://github.com/czottmann/obsidian-people/releases.
2. Extract the ZIP archive.
3. In the vault `Components/` folder, double-click all `*.shortcut` files to install them in macOS Shortcuts. (I suggest placing them all in a new folder in Shortcuts, e.g. "Obsidian People".)
4. Install [Actions For Obsidian](https://actions.work/actions-for-obsidian) ("AFO").
5. Install and set up [BarCuts](https://actions.work/barcuts) to enable running Shortcuts workflows by link, and making the action buttons work.

### 2.a. As standalone vault

1. Add the vault to Obsidian.
2. In AFO, link the new vault.

That's it. Continue to [[USAGE]] or read section [[#Integrating with an existing vault]] for how to integrate the important parts into your own, existing vault.

### 2.b. Integrating with an existing vault

1. Ensure your existing vault is set up in [Actions For Obsidian](https://actions.work/actions-for-obsidian).
2. Copy `Templates/Person.md` to your vault's templates folder. **Make sure the property types are correctly set!** (See [[USAGE#Property Types]].)
3. Copy `Components/Contact Photo.base` and `Components/actions.js` (Dataview logic) into a `Components/` folder in your root directory.

If you already use a UID plugin like [Note UID Generator](https://github.com/Netajam/obsidian_note_uid_generator), remove the placeholder value from the [[Person]] template.

If you want the contact photo in a sidebar, drag `Components/Contact Photo.base` into the sidebar to position it.

If you want to add the contact photo to the [[Person]] template so new contact notes display the picture, embed the related Bases file:

```
![[Contact Photo.base]]
```
