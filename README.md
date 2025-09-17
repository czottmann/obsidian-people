# Obsidian People

## What is this vault?

This vault is a super-reduced customer/contacts relationship management tool ("CRM") whose **source of truth is Obsidian**, and which offers an easy selective **sync _to_ Apple Contacts** (on macOS) using macOS Shortcuts. The sync'd entries in Apple Contacts contain a link back to their source notes.

This is a proof of concept / MVP[^1]. I wanted to keep my contacts in an Obsidian vault, notes and all, while still being able to use my macOS address book (Contacts.app) – and therefore iOS, thanks to iCloud.

[^1]: MVP: "minimally viable product"

## Screenshot

![[screenshot-vault.jpg]]

## Terminology

Let's clearly define the terms used in this project description to minimize confusion.

| Term               | What it describes                                                                                                                                            | Acronym |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Address book       | The macOS address book application, i.e. Contacts.app.                                                                                                       |         |
| Address book entry | An entry in the macOS Contacts app, which is created and updated by this vault's Shortcuts workflows, and contains a subset of its related **Contact Note**. | ABE     |
| Contact            | A person described in a **Contact note**.                                                                                                                    |         |
| Contact note       | An Obsidian note containing both structured contact info in its File Properties (front matter), such as first name, last name, photo, email addresses etc.   | CN      |

## Scope of this project / Ground rules

1. **This vault is the source of truth.** It contains all the information and notes for **all** my contacts, one note per person.
2. I **do not** want all of my contacts in my address book because there are personal ones, customers, clients, etc. – and not all of them are relevant in that context.
3. I only want to sync a subset of the information contained in a CN to its related ABE: basically enough to identify callers, email senders, SMS senders etc. but not much more.
4. An ABE contains a link back to its CN for easy access to the person's details.
5. A CN contains a clickable button that creates/updates the ABE, c/o Apple Shortcuts.

**Minimal reliance on community plugins:** I've tried to not use any community plugins. Unfortunately, I wasn't able to access the vault name inside of a Bases doc – but since the vault name is required for the both linking & syncing, I've decided to employ to [Dataview](https://obsidian.md/plugins?id=dataview). (And then I also installed [Mononote](https://obsidian.md/plugins?id=mononote) because I strongly dislike having the same note open in several tabs.)

**Unique IDs:** The vault uses unique IDs ("UID") for all notes to make linking back from address book to the CN reliable. This means that the vault link in an ABE targets the CN by its UID, not by its title (as names may change). The UID creation is kept deliberately simple, it's just the letter "p" (for "person") + a Unix milliseconds timestamp. (In a real-life vault, I'd use a proper ULID or UUID, but as mentioned above, I've tried to keep the number of 3rd party plugins to a minimum.)

### Data flow

- Data flows from CN to ABE, but not the other way around.
- If I have to add to or edit information, it is done in the CN (source of truth).
- There is no automatic sync. After I edit a CN, I press the button manually. (Since the ABEs are relatively sparse, this would need to be done only when name, company, phone numbers, email address, photo, or URLs have changed.)
- Manual changes made in the ABE are overwritten during sync.

### What gets synchronized

- Name (first, middle, last)
- Photo
- Company
- Birthday
- Street addresses
- Email addresses
- Phone numbers
- URLs

## Installation

See [[INSTALLATION]].

## Usage

See [[USAGE]].

## Author

Carlo Zottmann, https://actions.work/ & https://c.zottmann.dev, <carlo@zottmann.dev>

[[LICENSE|MIT License.]]
