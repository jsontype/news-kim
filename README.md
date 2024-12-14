# Vercel Prd
https://news-kim-jsontypes-projects.vercel.app/

# package Manager

#### use pnpm
"prepare": "husky",<br/>
"dev": "next dev",<br/>
"build": "next build",<br/>
"start": "next start",<br/>
"format": "prettier --cache --check --ignore-path .gitignore .",<br/>
"format:fix": "prettier --write --ignore-path .gitignore .",<br/>
"eslint": "eslint --cache ./app",<br/>
"eslint:fix": "eslint --fix ./app",<br/>
"lint:check": "pnpm format && pnpm eslint",<br/>
"lint:fix": "pnpm format:fix && pnpm eslint:fix"<br/>
