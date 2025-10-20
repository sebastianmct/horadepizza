# GitHub Pages Deploy

Este proyecto está configurado para deploy automático en GitHub Pages.

## 🚀 Deploy

El deploy se ejecuta automáticamente cuando se hace push a la rama `main`.

## 🔧 Configuración

1. Ve a **Settings** → **Pages** en tu repositorio
2. Selecciona **GitHub Actions** como fuente
3. El workflow se ejecutará automáticamente

## 📝 Notas

- Usa `npm ci --legacy-peer-deps` para evitar conflictos de dependencias
- Node.js 18 para compatibilidad con GitHub Pages
- React 18 para evitar conflictos con dependencias legacy

## 🌐 URL del sitio

Una vez desplegado, estará disponible en:
`https://sebastianmct.github.io/horadepizza`
