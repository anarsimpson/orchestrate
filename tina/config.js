import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID, // It will look for the secret here
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
  {
    name: "constitution",
    label: "AI Constitutions",
    path: "content/constitutions", // Files will live here
    format: "json",                // Save as JSON
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "version", label: "Version" },
      { type: "string", name: "principles", label: "Principles", list: true }
    ],
  },
  ],
  },
});
