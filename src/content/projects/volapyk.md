---
handle: volapyk
name: volapyk
owner: luxass
description: null
githubUrl: https://github.com/luxass/volapyk
<<<<<<< HEAD:src/content/projects/volapyk.md
=======
npm: https://www.npmjs.com/package/volapyk
downloads: 368
>>>>>>> 3016e8da0e8d133858e0f79a6ebcaf7a7f8305e6:src/content/projects/volapyk.mdx
---

# 🗣️ volapyk

`/vɔlɑˈpyg/`, "volapyk", or "volapük"

## 📦 Installation

```sh
pnpm install volapyk
```

## 📚 Usage

```ts
import { createVolapyk, createVolapykChunks, createVolapykText } from "volapyk";

const volapyk = createVolapyk({
  type: "text",
  words: 10
});

// will create a text string of 10 words

// use a different charset
const volapyk = createVolapyk({
  type: "text",
  words: 10,
  chars: "abcdefghijkl"
});

// will create a text string of 10 words using only the characters "abcdefghijkl"

// create chunks instead of a string, or you can use the createVolapykChunks function
const volapyk = createVolapyk({
  type: "chunks"
});
```

## 📄 License

Published under [MIT License](https://github.com/luxass/volapyk/blob/main/LICENSE).
