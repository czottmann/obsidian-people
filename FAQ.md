For abbreviations and acronyms, please see [[README#Terminology]].

## Why is there no automatic sync?

In my experience, the core details of a contact (name, photo, phone, email, links, company) _rarely_ change, and only if they do, a sync is necessary, since everything else remains in the vault (notes, juicy gossip, whatever). 😉

## Why is there no way to sync *all* my CN to ABEs at once? 

This is by design: I'm rather selective with my contacts – the _manual_ selection required is not a chore, it's a conscious choice.

That said, here's what would do that for you:

A Shortcuts workflow that finds all the CN (using [Search Notes With Omnisearch](https://docs.actions.work/actions-for-obsidian/actions/omnisearch-notes/)), loops over the results, and for each result …

1. gets the note's UID (using [Get Note](https://docs.actions.work/actions-for-obsidian/actions/get-note/) or [Get Note Properties](https://docs.actions.work/actions-for-obsidian/actions/get-note-properties/))
2. builds a new dictionary with the keys `uid` and `vaultName` (guess the values!)
3. uses the dictionary as input in a [Run Shortcut](https://matthewcassinelli.com/actions/run-shortcut/) action that calls `obsidian-people-sync.shortcut`.

## Can I add manual notes to the ABE?

Sure, but make sure to **not delete the `\[[CRM:p12345678\]]` part** of the notes field. This is the relationship marker that allows the Shortcuts-based sync to find the right existing ABE for a CN.

Also, the manual notes in the ABE are not copied back to the CN. The sync is strictly one-way: CN→ABE.
