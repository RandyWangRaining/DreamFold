# Dreamfold

Team: **openspace lab**

**Interactive World Model · Coming Soon**

> One scene. Two actions. Two futures.
>
> Give the world an action. Let the future unfold.

Dreamfold explores an egocentric world model driven by VR hand actions: describe an interactive scene in natural language, then generate what happens next based on the user's actions.

The website currently presents two prerecorded tabletop puzzle videos. The full interactive system and project details are coming soon. A release date has not been announced. The page controls video playback; it does not run model inference.

## Local preview

Open `index.html` directly, or run the following command in this directory:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser. This is a static website with no dependencies or build step.

## Publish to GitHub Pages

1. Create a GitHub repository for the website, such as `dreamfold`.
2. Upload **the files inside this directory** to the repository root. Place `index.html` directly at the root, without an extra `html/` folder.
3. Include `styles.css`, `script.js`, `logo.png`, and both `.mp4` files. Keep `.nojekyll` when uploading with Git.
4. In **Settings → Pages → Build and deployment**, set Source to **Deploy from a branch**.
5. Select the branch containing the files (usually `main`) and **/(root)**, then click Save.
6. Once GitHub reports a successful deployment, open the website URL shown in the Pages settings.

A project website usually uses `https://your-username.github.io/your-repository/`. All page assets use relative paths to support repository subdirectories. Upload only this directory; the research files and original backup in the parent directory are not needed.

See [GitHub's official publishing source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Files

- `index.html`: GitHub Pages homepage.
- `world_model_simple_demo.html`: Identical page at the original filename. Keep both HTML files in sync when editing.
- `logo.png`: openspace lab logo, also used as the site icon.
- `styles.css`: Dark theme and responsive layout.
- `script.js`: Shared playback controls and video loading error messages.
- `49435776794c3f9425a80272c5150f27.mp4`: Action A video.
- `1c7aef96aeb8b9680c5bc72e01ecaf62.mp4`: Action B video.
- `RELEASE_DRAFT.md`: Coming-soon announcement draft.

The original standalone HTML is backed up as `world_model_simple_demo.original.html` in the parent directory, outside the website publishing directory.

## Release status

- Video previews: Ready.
- GitHub Pages: Awaiting upload and activation.
- Full project: Coming soon.
- Interactive demo: Coming soon.

Videos do not autoplay. Visitors can use the native controls on each player. Play both starts both videos; Restart both resets both to the beginning. Playback is not guaranteed to be frame-synchronized.

## Alternative theme names

- **Dreamfold**: A coined name suggesting folded dreams; the current project name.
- **Oneiric**: Dreamlike or relating to dreams, suited to an abstract research theme.
- **Reverie**: A daydream, with a more poetic tone.
- **Dream Within**: Evokes dreams within dreams and nested worlds.

These are creative naming candidates; name availability has not been checked.
