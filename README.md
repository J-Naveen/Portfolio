# Naveen J – Security Analyst Portfolio

Personal portfolio site for Naveen J, Security Analyst I.
Single-page static site (HTML, CSS and JavaScript only, no build step).

## Project structure
```
portfolio/
├── index.html      # page structure and content
├── css/style.css   # all styling (light and dark themes)
├── js/script.js    # terminal, animations, scroll effects
├── README.md
├── deploy.sh       # one-step upload to GitHub
└── .gitignore
```

## Features
- Interactive terminal (`help`, `whoami`, `skills`, `experience`, `bounty`, `projects`, `education`, `contact`)
- Links to GitHub and Medium
- Light and dark mode (follows the device setting)
- Responsive layout for phone and desktop
- "Email me" buttons open a Gmail compose window

## Run locally
Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy with GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to Settings > Pages.
3. Under "Build and deployment", set Source to "Deploy from a branch", Branch to `main` and folder to `/ (root)`, then Save.
4. Your site will be live at `https://<username>.github.io/<repository>/`.

Tip: name the repository `<username>.github.io` to get the shorter address `https://<username>.github.io/`.
