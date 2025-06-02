---
title: Your first request
---

Welcome! If you’re new to ATAC, this page will walk you through creating and sending your very first HTTP request — step by step — so you can start exploring its features right away.

---

## 1. Launch ATAC

After installing ATAC (for example, using your distribution’s package manager), you can start it by running this command in your terminal:

```bash
atac
```

This will open the ATAC interface inside your terminal.

If you’re unsure what to do next, **look at the bottom-right corner** of the screen — there you’ll see the available actions and their shortcut keys.

## 2. Create a Collection

In ATAC, **a Collection is like a folder**: it groups multiple related requests together.

To create one:

- Press **`n`** (the key shown next to the "Create" action).
- Choose to create a **Collection** (chosen by default if no collection exist yet).
- Give it a name (for example, `My First Collection`).

:::note
ATAC does not come with a default collection — you create your own to organize requests the way you want.
:::

## 3. Create Your First Request

With your collection selected:

- Press **`n`** again.
- This time, choose to create a **Request** inside the collection.
- Fill in the **Name** (e.g., `Get Example`)
- Once the request is selected you can edit these two fields :
    - **Method** (e.g., `GET`)
    - **URL** (e.g., `https://jsonplaceholder.typicode.com/posts/1`)

and you’re ready!

:::tip
If you’re on Linux and **Ctrl + c / Ctrl + v** don’t work for copy-paste, remember to use **Ctrl + Shift + c / Ctrl + Shift + v** — that’s a terminal thing, not specific to ATAC.
:::

## 4. Send the Request

Once your request is set up:

- Select it in the list if not done yet.
- Press **`space`** (the key shown for "Send") to execute it.

You’ll see the response displayed, including status code, headers, and body. You can cycle through those tabs with `Shift + tab`

## 5. Explore and Customize

By pressing tab and cycling through the request tabs, you can:
- Edit headers, query parameters, or body
- Set authentication (press **`a`** to cycle through auth types)
- Write pre- or post-request scripts (if you want automation)

---

## Need More Help?

- Press **`Ctrl + h`** inside the app for in-app and key-bindings help
- Check the documentation on this site for detailed guides
- Look at the bottom-right of the ATAC interface to see your next possible actions
