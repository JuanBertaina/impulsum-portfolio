# Impulsum Portfolio

Sitio estático del portfolio de **Impulsum** listo para desplegar en **Azure Static Web Apps**.

## 📦 Contenido
- HTML/CSS/JS plano (sin build)
- Workflow de GitHub Actions para despliegue automático a Azure Static Web Apps

## 🚀 Despliegue automático (CI/CD)
Este repo contiene un workflow que, en cada push a `main` (o `master` si preferís), publica el sitio en tu **Azure Static Web App** existente llamada `impulsum-web`.

### Requisitos previos
1. Una Azure Static Web App creada: **impulsum-web**.
2. Un **deployment token** de Azure Static Web Apps:
   - En Azure Portal → tu Static Web App → **Manage tokens** → copia el **Deployment token**.
3. Crear el secreto en GitHub:
   - En GitHub → Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
   - Nombre del secreto: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Valor: *pega el token copiado del portal de Azure*

### Estructura de archivos
```
/
├─ index.html
├─ styles.css
├─ script.js
├─ Icon.png
└─ .github/workflows/impulsum-web.yml
```

## 🔧 Personalización del workflow
- **Branch:** por defecto `main`. Cambiá `branches` si usás `master`.
- **Ubicaciones:** `app_location: /` (raíz), `api_location: ""` (sin API), `output_location: ""` (no hay build).

## 📤 Publicación manual
Si querés publicar manualmente (sin esperar al CI):
1. Empujá cambios:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
2. El workflow se ejecuta automáticamente.

## 🧩 Dominio personalizado
En Azure Static Web Apps → **Custom domains** → agrega tu dominio (p. ej., `impulsum.com.ar`).

## 👤 Autor
- GitHub: [JuanBertaina](https://github.com/JuanBertaina)

