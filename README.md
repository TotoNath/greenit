# 🌱 Vitrine de Nath - Projet Green IT

## 📌 Présentation du projet
Vitrine de Nath est une application web permettant d'afficher une galerie d'images de manière interactive. Le projet repose sur une architecture **Spring Boot + React** et respecte les principes du **Green IT** afin de minimiser son empreinte écologique.

## 🌳 Green IT : Approche éco-responsable
Le projet a été conçu avec une démarche **Green IT** afin de minimiser son impact environnemental :

### ♻️ Optimisations mises en place
✅ **Backend :**
- Utilisation d'un **hébergement éco-responsable** chez **Scaleway** 🌍 (serveurs basés en France, alimentés par des énergies renouvelables, et refroidissement par air ambiant)
- Suppression des requêtes inutiles grâce à **React Query** 🔄
- Réduction des **logs et traitements CPU intensifs** 📉
- Base de données optimisée avec des **index bien définis** 📊

✅ **Frontend :**
- Chargement progressif des images (Lazy Loading) 🎯
- Compression des assets et des images 🎦
- Minification du code pour réduire la bande passante 📡

✅ **Infrastructure :**
- VPS optimisé avec un **serveur basse consommation** 🔌
- Priorisation des architectures à faible consommation énergétique ⚡
- Utilisation de **PostgreSQL**, moins énergivore que MySQL 🔋

## 🏡 Pourquoi Scaleway ?
Le projet a été déployé chez **Scaleway** car cet hébergeur français est reconnu pour son engagement écologique :
- 🌿 Serveurs refroidis naturellement par l'air ambiant sans climatisation 
- ⚡ Utilisation à 100% d'énergies renouvelables 
- 📊 Centres de données situés en France pour réduire l'empreinte carbone du transfert de données
- 🌐 Politiques de reconditionnement des serveurs pour réduire l'obsolescence matérielle

## 🏠 Architecture du projet
### 🔹 Backend - Spring Boot
- **Langage** : Java + Spring Boot 🧑‍💻
- **Base de données** : PostgreSQL 🐄️
- **ORM** : JPA / Hibernate 🔍
- **Cache** : React Query pour réduire les requêtes redondantes ⏳
- **Endpoints REST** exposés en `/api/images` 📡
- **Sitemap dynamique** généré pour le référencement SEO 🔎

✅ **Avantages** :
- Framework robuste et sécurisé 🚀
- Gestion avancée des transactions et des performances 🔄
- API REST scalable et extensible 📈

⚠️ **Inconvénients** :
- Java est plus gourmand en ressources qu’un langage comme Rust ou Go 🏈️
- Temps de démarrage plus long qu'un backend en Node.js 🕐

### 🔹 Frontend - React
- **Framework** : React ⚛️
- **UI** : Composants réutilisables 🎨
- **Gestion des requêtes** : React Query pour optimiser le cache ⚡
- **Navigation via un carrousel interactif** 📷

✅ **Avantages** :
- Expérience utilisateur fluide 🎭
- Chargement optimisé des images 📉
- Interface dynamique et réactive 💡

⚠️ **Inconvénients** :
- Nécessite JavaScript, pas optimal pour les appareils très limités 🏢
- Potentiellement énergivore si mal optimisé 🔋

## 📜 Conclusion
Vitrine de Nath est une **vitrine numérique éco-responsable**, pensée pour offrir une expérience fluide tout en limitant son impact environnemental. Grâce à des choix techniques optimisés et une démarche Green IT, ce projet allie **performance** et **sobriété numérique**. 🚀🌍

💡 **Prochaine étape** : Ajouter des tests de performance pour mesurer l'empreinte énergétique du projet ! 🔬

