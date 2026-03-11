# Big Light Construction (BLC)

[![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20-5fa04e?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Drizzle](https://img.shields.io/badge/Drizzle_ORM-c5f74f)](https://orm.drizzle.team/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169e1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Zod](https://img.shields.io/badge/Zod-3-3e67b1?logo=zod&logoColor=white)](https://zod.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055ff?logo=framer&logoColor=white)](https://www.framer.com/motion/)

Site vitrine moderne pour **Big Light Construction**, avec une API Express minimale pour le formulaire de contact.

![Aperçu du site](assets/blc.gif)

## Points forts

- Pages : Accueil, Services, À propos, Contact
- UI moderne : Tailwind CSS + composants type shadcn/ui + animations (Framer Motion)
- Formulaire de contact validé avec Zod + endpoint `POST /api/contact` (mock)
- Architecture claire client/serveur avec schémas partagés

## Stack technique

- Front-end : React, Vite, Tailwind CSS, Wouter
- Back-end : Node.js, Express, TypeScript
- Data : Drizzle ORM + PostgreSQL
- Qualité : Zod, React Hook Form

## Démarrage rapide

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

- `npm run dev` : démarre le serveur en mode dev (Vite en middleware)
- `npm run build` : build client + bundle serveur
- `npm start` : lance le serveur compilé
- `npm run check` : vérification TypeScript
- `npm run db:push` : synchronisation du schéma Drizzle

## Variables d’environnement

- `PORT` : port HTTP (défaut `5000`)
- `NODE_ENV` : `development` (dev) / `production` (prod)
- `DATABASE_URL` : chaîne de connexion PostgreSQL

## Structure du repo

- `client/` : application React (Vite)
- `server/` : serveur Express + API
- `shared/` : schémas & routes partagés (Zod)
- `script/build.ts` : build complet (client + serveur)
- `assets/` : médias du projet
