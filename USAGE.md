## Creating a new contact note

1. Create a new note anywhere in your vault, apply the [[Person]] template.
2. In the new note, fill out the file properties, like "First Name", "Last Name" etc.

Add new properties to the template as you see fit but please keep the required ones (see [[#Property Types]] below).

> [!important] Important
> Make sure to keep the Dataview code block intact – it's responsible for rendering the buttons.

## Property types

These property keys are required, even if you keep them empty:

- `uid`: Text
- `First Name`: Text
- `Middle Name`: Text
- `Last Name`: Text
- `Company`: Text
- `Phone`: List
- `Email`: List
- `URL`: List
- `Street Address`: List
- `Photo`: Text
- `Birthday`: Date

The properties below are technically "custom" and only exist to give you an idea on how to further customize your contact notes.

- `tags`: Text
- `Nickname`: Text
- `Bluesky`: List
- `Mastodon`: List
- `Signal`: Text

The required keys are sync'd to the ABE, custom ones aren't.

### Field-specific details

#### `uid`

Don't remove the `uid` field! It's used to make this whole thing work.

#### `Photo`

The photo needs to be referenced by its full path, e.g. `Attachments/carlo.jpg`. Just `carlo.jpg` will work in the preview but will **not** work in the sync.

## Limitations & Troubleshooting

### Photo in file properties must use full path

The `Photo` value in the file properties **must** contain the full path to the picture, e.g. `Attachments/thispersondoesnotexist.com-1.jpg` instead of just `thispersondoesnotexist.com-1.jpg`.

If it doesn't, the photo lookup in the Shortcuts workflow will fail.

### Renaming the the vault will sever the relationships between CN and existing ABE

Each ABE stores in its "Notes" field a "relationship marker", i.e. a short text containing both the vault name and the CN's UID, e.g. "\[\[CRM:p12345678]]". If the vault name changes, the lookup will use the *current* vault name, and won't find anything because the marker contains the *previous* vault name.

So if you've just renamed the vault, use the `obsidian-people-fix-relationships.shortcut` to correct the relationship markers in **all** ABE; afterwards, use the `Sync to Apple Contacts` button on every relevant CN.

### Linking from CN to ABE is nigh impossible

You can't programmatically and **reliably** open ABEs in macOS/iOS:

1. There are no Shortcuts actions for opening a specific address book entry. There are some for finding and editing contacts, yes, but none for displaying. Weak.
2. There's a URL scheme, `addressbook://` (macOS only), which will open an ABE if you know its internal ID (which isn't surfaced anywhere).
3. There is another URL scheme, `contacts://`, which is iOS specific and will open an ABE if you know its internal ID (which isn't surfaced anywhere). It has a different layout than its macOS counterpart.
4. To get the internal contact ID, you'll need AppleScript (which is only available on macOS). Please be aware that this ID isn't stable, and is likely different between your devices.

I don't know the reasons for this whole setup, of course. All I can say is that from the outside in, it looks super dumb.

Thanks, Tim Apple! 🫤
