# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

TP Noté (TD5) - Architecture logicielle  
Clémence Bocquet et Nathan Randriantsoa *TD2B*

## Introduction
L'application est gestionnaire de quiz et de questions. Il permet d'ajouter, de supprimer et de modifier ces derniers (CRUD).  
Il se base sur un serveur REST et l'utilisation de Vue.js + Vite  

## Prérequis
Pour ce projet, vous devez avoir avoir les installations suivantes :
- Flask, flask_sqlalchemy, SQLite (et dotenv facultatif) pour le serveur REST 
- Node.js pour le serveur Vue

## Lancement application
Pour lancer l'application : 
- lancer le serveur Flask en se rendant à la racine du dossier ```flaskRestAPI``` et effectuer la commande ```flask run```
- lancer le serveur Vue.js+Vite en se rendant à la racine du dossier ```projectquiz```et effectuer la commande ```npm run dev --host```

### Si vous obtenez des erreurs
Si vous obtenez une erreur liée à Flask (pas d'installation de dotenv):
- ```Error: Could not import 'todo'.``` ou ```Error: Could not locate a Flask application.```, effectuer la commande ```FLASK_APP=todo flask run```

Si vous obtenez une erreur liée à Vue.js :
- ```Could not find vite```, effectuer la commande à la racine du dossier ```projectquiz``` ```npm install```


## fonctionnalités
- Router Vue, possibilité d'accéder à une page avec son URL valide
- Ajouter, supprimer, modifier une question
- Ajouter, supprimer, modifier un quiz