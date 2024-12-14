# Vercel Prd
https://news-kim-jsontypes-projects.vercel.app/

# package Manager

## use pnpm

"prepare": "husky",
"dev": "next dev",
"build": "next build",
"start": "next start",
"format": "prettier --cache --check --ignore-path .gitignore .",
"format:fix": "prettier --write --ignore-path .gitignore .",
"eslint": "eslint --cache ./app",
"eslint:fix": "eslint --fix ./app",
"lint:check": "pnpm format && pnpm eslint",
"lint:fix": "pnpm format:fix && pnpm eslint:fix"