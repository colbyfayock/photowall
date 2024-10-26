# 📸 Photowall

Photo gallery with Astro & Cloudinary

## Getting Started

1. Create a new local project

```
npx degit colbyfayock/photowall photowall
cd photowall
```

You can also fork or clone the project manually!

2. Create a .env file or configure your environment variables to include:

```
PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
PUBLIC_CLOUDINARY_API_KEY="<Your API Key>"
CLOUDINARY_API_SECRET="<Your API Secret>"
```

3. Install dependencies and start the project.

```
npm install
npm run dev
```

And you should now be running Photobox at http://localhost:4321/!

## Using Photowall

To start using Photowall, create a new folder called `photowall` in your Cloudinary account.

Inside, create 1 or more folders to create new collections. For example:

```
- photowall
-- halloween
-- new years
```

Drop your images inside each collection to create a new gallery!

By default, Photowall will utilize the name of the folder, but you can customize the formatting or entire name by creating configuration files.

Create a `config.json` file (in your IDE or just a random file) with the following structure:

```
{
  "name": "<Title>",
  "folder": "<Collection Folder>"
}
```

For example, inside `photowall/halloween`:

```
{
  "name": "Spooky Halloween Pics",
  "folder": "halloween"
}
```

Then proceed to upload it to the photowall directory that you want to customize.
