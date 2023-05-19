# ConversionForm

Le composant `ConversionForm` gère la conversion de différentes unités de mesure.  Il représente un formulaire de conversion avec les fonctionnalités suivantes :

## Affichage du type de conversion

Le titre `<h1>` avec la classe `text-center` affiche le type de conversion. Il utilise la classe `bi-calculator` de Bootstrap Icons pour afficher une icône de calculatrice.

## Champ de saisie de la valeur

Un champ de saisie `<input>` de type `number` avec l'`id` "value" permet à l'utilisateur de saisir la valeur à convertir. Il utilise la classe `form-control` de Bootstrap pour le style.

## Sélection des unités de conversion

Deux menus déroulants `<select>` avec les `id` "fromUnit" et "toUnit" permettent à l'utilisateur de sélectionner les unités de conversion. Ils utilisent la classe `form-select` de Bootstrap pour le style.
Les options des menus déroulants sont générées dynamiquement à l'aide d'une boucle `v-for` sur un tableau `filteredUnits`. Chaque option a une clé `key` et une valeur `unit` qui représentent l'unité de conversion.

## Champ d'arrondi

Un champ de saisie `<input>` de type `number` avec l'`id` "round" permet à l'utilisateur de spécifier le nombre de décimales à arrondir. Il utilise la classe `form-control` de Bootstrap pour le style.

## Bouton de conversion

Un bouton `<button>` avec la classe `btn btn-primary` permet à l'utilisateur de lancer la conversion. Il utilise la classe `bi-arrow-repeat` de Bootstrap Icons pour afficher une icône de rotation.

## Affichage du résultat de la conversion

Un paragraphe `<p>` avec la classe `text-center` affiche le résultat de la conversion. Il utilise la classe `bi-arrow-down-up` de Bootstrap Icons pour afficher une icône de flèche vers le bas et vers le haut.

## Gestion des erreurs

Une alerte `<div>` avec la classe `alert alert-danger` est affichée en cas d'erreur. Elle utilise les classes de Bootstrap pour le style et affiche le message d'erreur dans le paragraphe à l'intérieur de la div. Un bouton de fermeture est également inclus pour permettre à l'utilisateur de fermer l'alerte.

## Composant d'historique

Un composant `<Historique_component></Historique_component>` est inclus dans une colonne pour afficher l'historique des conversions.

# Composant "ConversionForm" - Logique du Code

## Importations

Le composant importe le service de conversion ("ConversionService") et le composant "Historique_component" d'autres fichiers.

Ce composant importe donc les éléments suivants :
- Service de conversion ("ConversionService") à partir d'un autre fichier.
- Composant "Historique_component" à partir d'un autre fichier.
- Fichier de magasin "store.js" pour gérer l'historique des conversions.

## Données

Le composant a des données qui incluent une valeur d'entrée, une unité de mesure de départ, une unité de mesure de destination, le résultat de la conversion et un message d'erreur. Il y a aussi une liste prédéfinie de types d'unités qui autorisent les nombres négatifs. Les unités de mesure sont organisées en catégories telles que la température, la longueur, le volume, la masse, la vitesse, le temps, la pression, le numérique et l'angle.

Autrement dit, le composant a les données suivantes :
- `value` : Valeur d'entrée pour la conversion.
- `fromUnit` : Unité de mesure de départ sélectionnée.
- `toUnit` : Unité de mesure de destination sélectionnée.
- `result` : Résultat de la conversion.
- `errorMessage` : Message d'erreur, le cas échéant.
- `typesAllowingNegative` : Liste prédéfinie de types d'unités autorisant les nombres négatifs.
- `units` : Objets contenant les différentes unités de mesure organisées par catégories.

## Composants
Le composant utilise le composant suivant dans son template :
- "Historique_component"

## Propriétés Calculées

Le composant utilise des propriétés calculées pour déterminer le type actuel de conversion, la valeur minimale autorisée en fonction du type de conversion et les unités filtrées disponibles pour le type de conversion actuel.

En bref, le composant utilise les propriétés calculées suivantes :
- `type` : Type actuel de conversion, récupéré à partir des paramètres de la route. Par défaut, il est défini sur 'temperature'.
- `minValue` : Valeur minimale autorisée en fonction du type de conversion. Si le type de conversion se trouve dans la liste `typesAllowingNegative`, `minValue` sera `undefined`. Sinon, `minValue` sera 0.
- `filteredUnits` : Unités de mesure filtrées disponibles pour le type de conversion actuel. Si le type de conversion n'existe pas dans la liste `units`, `filteredUnits` sera un objet vide.

## Méthodes

Les méthodes du composant incluent la validation de l'entrée, la conversion des unités sélectionnées et l'ajout du résultat à l'historique des conversions.

Soit les méthodes suivantes :
- `validateInput()` : Méthode de validation de l'entrée. Si la valeur est négative et que le type de conversion ne se trouve pas dans la liste `typesAllowingNegative`, un message d'erreur est assigné à `errorMessage`.
- `convert()` : Méthode de conversion. Elle valide d'abord l'entrée en appelant la méthode `validateInput()`. Si une erreur est détectée (`errorMessage` non vide), la méthode s'arrête. Sinon, elle effectue la conversion en utilisant le service de conversion (`ConversionService`) et assigne le résultat à `result`. Ensuite, elle ajoute le résultat à l'historique des conversions en utilisant le magasin (`store.js`) et émet un événement pour informer les autres composants de la conversion.

Veuillez noter que certains morceaux de code sont commentés (par exemple, les sections "fréquence" et "magnétisme") et ne sont donc pas utilisés dans la logique actuelle du composant.

