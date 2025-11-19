# Apprendre React

## 🎯 Objectif du projet
Ce projet a pour but d'apprendre les **bases de React** avec des exemple **simples et intéractifs**

---

### Que ce que c'est React? 
React est une **bibliothèque** javascript qui aide le développeur à créer d'interfaces utilisateurs et c'est au **développeur de choisir le reste des outils**. React ne fait pas le back-end ni les routes.

#### Differences entre Bibliothèque et Framework
Une **bibliothèque** aide le développeur à effectuer une chose précise, par exemple **React** aide l'utilisateur à créer des interfaces utilisateurs. Et le développeur à la liberté de choisir comment il veut structurer son app.

Un **framework** est une **structure complète**.  
C’est le framework qui définit le **flux du code**, c’est-à-dire **l’ordre dans lequel le programme s’exécute**.  
Autrement dit, **c’est le framework qui contrôle ton code**, alors qu’avec une **bibliothèque**, c’est **le développeur** qui contrôle quand et comment il l’utilise.

---

### Commande pour créer application next
Par défaut la commande pour créer une app next basique est: `npx create-next-app@latest [project-name] [options]`

Pour créer une app next basique vide la commande est: `npx create-next-app@latest empty-project --empty`

Cette commande permet de créer une application react avec une template par défaut de **react avec typescript**.

#### Pourquoi TypeScript ?
TypeScript est un langage **typé**, ce qui signifie que chaque variable doit avoir un **type** défini.
Si le type n’est pas respecté, une erreur est détectée dès la phase de développement.
Cela permet de réduire les bugs et d’avoir un code plus fiable et plus facile à maintenir.


#### UseState
https://fr.react.dev/reference/react/useState

Le useState permet de changer l'état d'une variable, après un événement.

#### UseEffect
https://fr.react.dev/reference/react/useEffect

Le useEffect est appélé a un moment précis de l'application il peut être appelé au chargement de la page,à un événement précis etc... , on definit a la fin du useEffect.

#### Passage en Props

https://nextjs.org/learn/react-foundations/displaying-data-with-props

Le props permet de transmettre des données au enfant, le composant parent envoie les données souhaités au composants fils, atention l'inverse n'est pas possible!
