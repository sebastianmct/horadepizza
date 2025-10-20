# GitHub Pages Deploy

Este proyecto está configurado para deploy automático en GitHub Pages usando las acciones oficiales de GitHub.

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
- Usa las acciones oficiales de GitHub Pages (actions/deploy-pages@v4)

## 🌐 URL del sitio

Una vez desplegado, estará disponible en:
`https://sebastianmct.github.io/horadepizza`

## 🔐 Permisos

El workflow incluye los permisos necesarios:
- `contents: read` - Para leer el código
- `pages: write` - Para escribir en GitHub Pages
- `id-token: write` - Para autenticación
