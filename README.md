# Página Web Personal - David Ochoa Márquez

## Descripción del Proyecto

Esta es una página web personal profesional bilingüe (español/inglés) diseñada como carta de presentación para reclutadores. La página presenta un diseño futurista y moderno, optimizada para dispositivos móviles y preparada para futuras integraciones de IA.

## Características Principales

### ✨ Diseño y Experiencia de Usuario
- **Diseño futurista** con gradientes dinámicos y efectos visuales modernos
- **Header fijo** con efecto glassmorphism y navegación suave
- **Animaciones fluidas** y transiciones suaves entre secciones
- **Diseño responsivo** que se adapta a todos los dispositivos
- **Efectos hover** y micro-interacciones para mejor experiencia

### 🌐 Funcionalidad Bilingüe
- **Cambio de idioma instantáneo** entre español e inglés
- **Persistencia de preferencia** de idioma en localStorage
- **Contenido completamente traducido** en ambos idiomas
- **URLs amigables** para SEO en ambos idiomas

### 📱 Tecnologías Utilizadas
- **HTML5** semántico y accesible
- **CSS3** con variables personalizadas y animaciones
- **JavaScript ES6+** para interactividad
- **Font Awesome** para iconografía
- **Google Fonts** (Inter) para tipografía moderna

### 🎯 Secciones Incluidas
1. **Hero Section** - Presentación principal con imagen de perfil
2. **Sobre Mí** - Historia profesional y datos de contacto
3. **Experiencia Laboral** - Timeline visual de experiencia profesional
4. **Habilidades Técnicas** - Barras de progreso animadas por categorías
5. **Proyectos Destacados** - Showcase de trabajos relevantes
6. **Contacto** - Formulario y información de contacto

## Estructura del Proyecto

```
david_ochoa_website/
├── index.html              # Página principal
├── css/
│   └── style.css           # Estilos principales
├── js/
│   └── main.js             # Lógica JavaScript
├── assets/
│   ├── images/
│   │   └── david_ochoa_profile.jpg
│   └── fonts/
├── docs/
└── README.md               # Este archivo
```

## Instalación y Uso Local

### Prerrequisitos
- Navegador web moderno
- Servidor web local (opcional para desarrollo)

### Pasos para ejecutar localmente
1. Descargar o clonar el proyecto
2. Abrir una terminal en la carpeta del proyecto
3. Ejecutar un servidor local:
   ```bash
   python3 -m http.server 8000
   ```
4. Abrir http://localhost:8000 en el navegador

## Personalización

### Cambiar Colores
Editar las variables CSS en `css/style.css`:
```css
:root {
  --primary-blue: #00D4FF;
  --primary-purple: #6366F1;
  --primary-cyan: #22D3EE;
  /* ... más variables */
}
```

### Actualizar Contenido
El contenido se gestiona desde `js/main.js` en el objeto `content`:
```javascript
const content = {
  es: {
    // Contenido en español
  },
  en: {
    // Contenido en inglés
  }
};
```

### Agregar Nuevas Secciones
1. Añadir HTML en `index.html`
2. Agregar estilos en `css/style.css`
3. Actualizar contenido en `js/main.js`
4. Agregar navegación si es necesario

## Optimización para Producción

### SEO
- Meta tags optimizados incluidos
- Estructura semántica HTML5
- URLs amigables
- Open Graph y Twitter Cards configurados

### Performance
- CSS y JavaScript minificados para producción
- Imágenes optimizadas
- Lazy loading implementado
- Compresión gzip recomendada

### Accesibilidad
- Contraste de colores WCAG AA
- Navegación por teclado
- Atributos ARIA donde sea necesario
- Texto alternativo para imágenes

## Futuras Mejoras

### Integraciones de IA Sugeridas
1. **Chatbot inteligente** para visitantes
2. **Análisis de CV** automatizado
3. **Recomendaciones personalizadas** de contenido
4. **Traducción automática** a más idiomas

### Funcionalidades Adicionales
1. **Blog técnico** integrado
2. **Sistema de testimonios**
3. **Galería de certificaciones**
4. **Modo oscuro/claro**

## Soporte y Mantenimiento

### Actualizaciones de Contenido
- Editar `js/main.js` para cambios de contenido
- Actualizar `assets/images/` para nuevas imágenes
- Modificar `css/style.css` para cambios de diseño

### Backup y Versionado
- Mantener copias de seguridad regulares
- Usar control de versiones (Git recomendado)
- Documentar cambios importantes

## Licencia

Este proyecto es de uso personal para David Ochoa Márquez. Todos los derechos reservados.

## Contacto

Para soporte técnico o consultas sobre el proyecto:
- **Email:** adochoam@outlook.com
- **LinkedIn:** [linkedin.com/in/david-ochoa-marquez](https://www.linkedin.com/in/david-ochoa-marquez)

---

*Desarrollado con ❤️ para crear una presencia digital profesional e impactante.*

