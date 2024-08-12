---
title: Postman
---

:::info
Only **Postman v2.1.0** collections are supported
:::

## How to export from Postman
![Export Postman collection](https://github.com/user-attachments/assets/ace7d0f2-aa13-41cb-8422-6deb4fdd2413)
![Postman export dialog](https://github.com/user-attachments/assets/396f30a7-f682-41de-b964-b095e0906dd2)


## How to import into ATAC
### Example Usage

```bash
atac -d my_folder import postman postman_collection.json
```

Where:
- `-d my_folder` ATAC working directory
- `import` The import command
- `postman` The import type
- `postman_collection.json` The exported postman collection json file
