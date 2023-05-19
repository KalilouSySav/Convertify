# Composant Vue.js : Historique des conversions

## Structure du composant

Le composant est défini comme suit :

- Balise `<template>` : enveloppe le composant.
- Balise `<div>` : englobe tout le contenu du composant.
- Titre : "Historique des conversions" affiché avec la balise `<h2>`.
- Icône de montre : affichée avec la classe CSS "bi bi-clock".
- Liste de résultats de conversions : affichée avec la balise `<ul>`.
  - Directive `v-for` : utilisée pour parcourir le tableau `results` et afficher chaque résultat de conversion.
  - Élément de liste : avec la classe CSS "list-group-item" pour chaque résultat de conversion.
  - Valeurs de conversion : affichées avec la classe CSS "fw-bold".
  - Séparation des valeurs : la valeur convertie et l'unité de conversion sont séparées par le texte "est égal à".

## Fonctionnement du composant

Pour son fonctionnement, le composant :

- Importe le store Vuex depuis le fichier "store.js".
- Est nommé "Historique_component".
- Utilise une propriété calculée appelée "results" qui renvoie le tableau de résultats à partir de `store.state.results`.
