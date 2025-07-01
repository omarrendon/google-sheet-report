# 🛍️ Shopify Order Reporter 📊

Este proyecto genera automáticamente reportes de pedidos recientes desde una tienda **Shopify**, los formatea y los guarda en **Google Sheets**.  
Ideal para monitorear ventas, generar reportes automáticos y compartir con tu equipo.

---

## 🚀 Funcionalidades

- ✅ Obtiene pedidos desde la API REST de Shopify
- ✅ Crea una nueva hoja en Google Sheets con nombre dinámico
- ✅ Inserta pedidos con formato: ID, cliente, fecha, productos, total
- ✅ Aplica estilo visual: encabezados, bordes, autoajuste de columnas
- ✅ Soporta ejecución manual o automática (cron)
- ✅ Se agrego como extra a los requerimientos ejecución vía cron

---

## 📁 Estructura del proyecto

shopify-products/
├── src/
│ ├── config/ # Variables de entorno
│ ├── services/ # Shopify + Google Sheets
│ ├── utils/ # Funciones auxiliares
│ ├── core/ # Lógica principal
│ └── index.ts # Ejecución manual
├── .env.example # Plantilla de configuración
├── credentials.json # Clave de Google Sheets (IGNORADA por git)
├── package.json
└── README.md

---

## ⚙️ Requisitos

- Node.js v18 o superior
- Cuenta de Shopify con acceso API (https://farmacia-productos.myshopify.com/)
- Proyecto en Google Cloud con Google Sheets API habilitada (https://docs.google.com/spreadsheets/d/1B2KfZQaqOCiRZpg8PNpGkXOGkrlp_0a9yACAo91vvIE/edit?pli=1&gid=449306124#gid=449306124)
- Hoja de cálculo Google Sheets creada y compartida con la cuenta del servicio

---

## 🔧 Instalación y configuración

1. Clona el repositorio:

Las variables de entorno y el archivo credentials se estaran compartiendo por aparte, debio a que github bloquea el arcivo y google elimina elimina las credenciales.

```bash
git clone https://github.com/omarrendon/google-sheet-report
cd shopify-products
npm install
cp .env.example .env
touch credentials.json
```

## 🧪 Comandos para ejecutar el proyecto

1. Generar reporte vía manua

```
npm start
```

2. Generar reporte vía cron job

```
npm run cron
```

## Imagenes del proyecto

### Tabla de Google Sheet completa

![Home page](./src/assets/f1.png)

### Hojas creadas dinamicamente

![Home page](./src/assets/f2.png)
