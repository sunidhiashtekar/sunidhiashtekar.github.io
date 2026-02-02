# Sunidhi Ashtekar — Website + Blog (GitHub Pages)

This is a simple Jekyll-powered personal website + blog that can be hosted on GitHub Pages.

## Publish On GitHub Pages

1. Create a new GitHub repo:
   - Best option (user site): `<your-github-username>.github.io` (for you: `sunidhiashtekar.github.io`)
   - Alternative (project site): any repo name (you’ll set `baseurl`)
2. Put these files in that repo (or push this folder).
3. In GitHub: **Settings → Pages**
   - **Build and deployment**: `Deploy from a branch`
   - **Branch**: `main` and folder `/ (root)`
4. Update `_config.yml`:
   - For a user site repo: keep `baseurl: ""`
   - For a project repo: set `baseurl: "/<repo-name>"`
   - Optional: set `url: "https://<your-github-username>.github.io"` (for you: `https://sunidhiashtekar.github.io`)

GitHub Pages will build and publish it automatically.

## Write A Blog Post

Create a new file in `_posts/` named like:

`YYYY-MM-DD-your-title.md`

Example:

```markdown
---
title: "My First Post"
tags: [learning, projects]
---

Write your post here in Markdown.
```

## Local Preview (Optional)

If you want local preview, tell me what you have installed (Ruby/Node/Docker) and I’ll set up the easiest option for your machine.

Then open the printed localhost URL.
