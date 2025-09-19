This note describes the files in the `Components/` folder.

## `obsidian-people-actions.js` 

Dataview script that generates action buttons (sync, email, call etc.) for the note's contact. Used in [[Templates/Person]].

## `obsidian-people-contact-photo.js`

Dataview script that conditionally renders a profile picture thumbnail for the note's contact. Used in [[Templates/Person]].

## `obsidian-people-contact-photo.base`

Bases plugin view configuration for contact photo. Used in a sidebar.

## `obsidian-people-sync.shortcut`

macOS Shortcuts workflow that syncs from CN to ABE. Used by the action buttons in CNs, this is **not** meant to be called on its own!

## `obsidian-people-fix-relationships.shortcut`

macOS Shortcuts workflow for changing the relationship markers. Run this manually from Shortcuts if you've already sync'd CN to ABE, and have renamed the vault since then.
