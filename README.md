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

### Commande pour créer application react
Par défaut la commande pour créer une app react basique est: `npm create vite@latest "nom-application" -- --template react-ts`

Cette commande permet de créer une application react avec une template par défaut de **react avec typescript**.

#### Pourquoi TypeScript ?
TypeScript est un langage **typé**, ce qui signifie que chaque variable doit avoir un **type** défini.  
Si le type n’est pas respecté, une erreur est détectée dès la phase de développement.  
Cela permet de réduire les bugs et d’avoir un code plus fiable et plus facile à maintenir.


#### UseState
UseState permet de garder une valeur déterminé et la modifier, par convention un useState prends une variable qui est la variable qui contient la valeur et un setteur qui va modifier la valeur, le setteur contient un "set" avant le nom par exemple setNumber
https://fr.react.dev/reference/react/useState

#### UseEffect
UseEffect réagis a uniquement 1 événement, par exemple au chargement de la page, au click d'un boutton etc...

https://fr.react.dev/reference/react/useEffect


