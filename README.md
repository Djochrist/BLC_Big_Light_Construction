# Big Light Construction (BLC) — Site vitrine

Un site vitrine moderne (SPA) pour **Big Light Construction**, avec une API Express minimale pour le formulaire de contact.

## Fonctionnalités

- Pages : Accueil, Services, À propos, Contact
- UI moderne : Tailwind CSS + composants type shadcn/ui + animations (Framer Motion)
- Formulaire de contact validé avec Zod + endpoint `POST /api/contact` (actuellement mock)

## Stack technique

- Front-end : React, Vite, Tailwind CSS, Wouter
- Back-end : Node.js, Express, TypeScript
- Build : Vite (client) + esbuild (bundle du serveur) via `script/build.ts`

## Prérequis

- Node.js **20+**
- npm

## Lancer en local

```bash
npm install
npm run dev
```

L’application (client + API) tourne sur `http://localhost:5000` (ou le port défini par `PORT`).

## Build & production

```bash
npm run build
npm start
```

- Le client est construit dans `dist`
- Le serveur est bundlé dans `dist/index.cjs`

## Scripts npm

- `npm run dev` : démarre le serveur en mode dev (avec Vite en middleware)
- `npm run build` : build client + bundle serveur
- `npm start` : lance le serveur compilé
- `npm run check` : vérification TypeScript

## Variables d’environnement

- `PORT` : port HTTP (défaut `5000`)
- `NODE_ENV` : `development` (dev) / `production` (prod)

## Structure du repo

- `client/` : application React (Vite)
- `server/` : serveur Express + API
- `shared/` : schémas & routes partagés (Zod)
- `script/build.ts` : build complet (client + serveur)

