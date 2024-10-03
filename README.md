# Photowall

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

Inside, create 1 or more folders to create new collections. Drop your images inside each collection to create a new gallery!

To further configure your gallery, create a `config.json` file and place it inside of a collection directory, with the structure of:

```
{
  "name": "<Title>",
  "folder": "<Collection Folder>"
}
```
