## Creating a new contact note

1. Create a new note anywhere in your vault, apply the [[Person]] template.
2. In the new note, fill out the file properties, like "First Name", "Last Name" etc.

Add new properties to the template as you see fit but please keep the required ones (see the [[Person]] template in edit mode).

> [!important] Important
> Make sure to keep the Dataview code block intact – it's responsible for rendering the buttons.

## Field-specific details

### `uid`
Don't remove the `uid` field! It's used to make this whole thing work.

### `Photo`

The photo needs to be referenced by its full path, e.g. `Attachments/carlo.jpg`. Just `carlo.jpg` will work in the preview but will **not** work in the sync.

## Limitations & Troubleshooting

### Photo in file properties must use full path

The `Photo` value in the file properties **must** contain the full path to the picture, e.g. `Attachments/thispersondoesnotexist.com-1.jpg` instead of just `thispersondoesnotexist.com-1.jpg`.

If it doesn't, the photo lookup in the Shortcuts workflow will fail.

### Renaming the the vault will sever the relationships between CN and existing ABE

Each ABE stores in its "Notes" field a "relationship marker", i.e. a short text containing both the vault name and the CN's UID, e.g. "\[\[CRM:p12345678]]". If the vault name changes, the lookup will use the *current* vault name, and won't find anything because the marker contains the *previous* vault name.

So if you've just renamed the vault, use the `obsidian-people-fix-relationships.shortcut` to correct the relationship markers in **all** ABE; afterwards, use the `Sync to Apple Contacts` button on every relevant CN.
