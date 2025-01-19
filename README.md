# Vercel Prd

https://news-kim-jsontypes-projects.vercel.app/

## Tools

| Tool              | Version        |
| ----------------- | -------------- |
| typescript        | 5.3.3          |
| react             | 18.2.0         |
| react-dom         | 18.2.0         |
| react-router      | 7.1.1          |
| next              | 14.2.20        |
| sass              | 1.83.0         |
| tailwindcss       | 4.0.0-alpha.13 |
| geist             | 1.3.1          |
| postcss           | 8.4.35         |
| temporal-polyfill | 0.6.0          |
| sugar-high        | 0.6.0          |

# package Manager

### use pnpm

ex) pnpm dev

| Command    | Description                                         |
| ---------- | --------------------------------------------------- |
| prepare    | husky                                               |
| dev        | next dev                                            |
| build      | next build                                          |
| start      | next start                                          |
| format     | prettier --cache --check --ignore-path .gitignore . |
| format:fix | prettier --write --ignore-path .gitignore .         |
| eslint     | eslint --cache ./app                                |
| eslint:fix | eslint --fix ./app                                  |
| lint:check | pnpm format && pnpm eslint                          |
| lint:fix   | pnpm format:fix && pnpm eslint:fix                  |
