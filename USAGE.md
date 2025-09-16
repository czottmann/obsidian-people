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
