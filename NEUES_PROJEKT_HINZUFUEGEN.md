# 📋 Anleitung: Neues Projekt hinzufügen

## Übersicht
Um ein neues Projekt zu Ihrer mehrsprachigen Website hinzuzufügen, müssen Sie **3 Dateien** bearbeiten:

## 🗂️ Dateien die bearbeitet werden müssen:

### 1. 📁 `app/data/projectsBase.ts`
**Was hinzufügen:** Basis-Projektdaten (sprachneutral)

**Wo einfügen:** Im `baseProjects` Array, neues Objekt hinzufügen:

```typescript
{
  id: "mein-neues-projekt",           // Eindeutige ID
  name: "MeinNeuesProjekt",           // Interner Name
  image: "/mein-projekt-bild.jpg",    // Haupt-Bild
  images: [                           // Optional: Galerie-Bilder
    {
      src: "/bild1.jpg",
      alt: "Projekt Screenshot 1",
      captionKey: "screenshot1"       // Key für Übersetzung
    },
    {
      src: "/bild2.jpg", 
      alt: "Projekt Screenshot 2",
      captionKey: "screenshot2"
    }
  ],
  technologies: ["React", "TypeScript", "Tailwind"],  // Tech-Stack
  features: [                         // Optional: Key Features
    { title: "responsive", description: "responsiveDesc" },
    { title: "fastPerformance", description: "fastPerformanceDesc" },
    { title: "userFriendly", description: "userFriendlyDesc" }
  ],
  githubUrl: "https://github.com/username/projekt",   // Optional
  demoUrl: "https://mein-projekt.com",                // Optional  
  slug: "mein-neues-projekt",                         // URL-Slug
  featured: true                                      // Auf Startseite?
}
```

### 2. 📁 `app/locales/en.json`
**Was hinzufügen:** Englische Übersetzungen

**Wo einfügen:** Im `projectsData` Objekt:

```json
"mein-neues-projekt": {
  "title": "My New Project",
  "description": "Short description for project cards and listings",
  "fullDescription": "Detailed description for the project detail page. This can be longer and more comprehensive.",
  "imagesCaptions": {
    "screenshot1": "Main application interface",
    "screenshot2": "Admin dashboard view"
  }
}

**Features hinzufügen (optional):** Im `projectFeatures` Bereich:
```json
"responsive": "Responsive Design",
"responsiveDesc": "Fully responsive design that adapts to all screen sizes",
"fastPerformance": "Fast Performance", 
"fastPerformanceDesc": "Optimized for speed with efficient loading times",
"userFriendly": "User Friendly",
"userFriendlyDesc": "Intuitive interface designed for excellent user experience"
```
```

### 3. 📁 `app/locales/de.json`  
**Was hinzufügen:** Deutsche Übersetzungen

**Wo einfügen:** Im `projectsData` Objekt:

```json
"mein-neues-projekt": {
  "title": "Mein Neues Projekt", 
  "description": "Kurze Beschreibung für Projekt-Karten und Auflistungen",
  "fullDescription": "Detaillierte Beschreibung für die Projekt-Detailseite. Diese kann länger und umfassender sein.",
  "imagesCaptions": {
    "screenshot1": "Haupt-Anwendungsoberfläche",
    "screenshot2": "Admin-Dashboard-Ansicht"
  }
}

**Features hinzufügen (optional):** Im `projectFeatures` Bereich:
```json
"responsive": "Responsives Design",
"responsiveDesc": "Vollständig responsives Design, das sich an alle Bildschirmgrößen anpasst",
"fastPerformance": "Schnelle Performance",
"fastPerformanceDesc": "Für Geschwindigkeit optimiert mit effizienten Ladezeiten",
"userFriendly": "Benutzerfreundlich", 
"userFriendlyDesc": "Intuitive Oberfläche für eine ausgezeichnete Benutzererfahrung"
```
```

## 📸 Bilder hinzufügen
Vergessen Sie nicht, die Projektbilder in den `public/` Ordner zu legen:
- `public/mein-projekt-bild.jpg` (Hauptbild)
- `public/bild1.jpg`, `public/bild2.jpg` (Galerie-Bilder)

## ✅ Wichtige Hinweise:

### 🔑 **ID Konsistenz**
Die `id` in `projectsBase.ts` **muss** mit dem Key in den JSON-Dateien übereinstimmen:
- `projectsBase.ts`: `id: "mein-neues-projekt"`
- `en.json` + `de.json`: `"mein-neues-projekt": { ... }`

### 🏠 **Featured Projects**
- `featured: true` → Erscheint auf der Startseite
- `featured: false` → Nur auf der "Alle Projekte" Seite

### 🔗 **URL-Struktur**
Mit `slug: "mein-neues-projekt"` ist das Projekt erreichbar unter:
- 🇺🇸 `/projects/mein-neues-projekt`
- 🇩🇪 `/de/projects/mein-neues-projekt`

### 🖼️ **Bilder sind optional**
- Ohne `images` Array: Nur Hauptbild wird angezeigt
- Mit `images` Array: Galerie wird auf der Detailseite angezeigt

## 🚀 Nach dem Hinzufügen
Das war's! Das neue Projekt erscheint automatisch:
- ✅ In der Projektliste (`/projects` und `/de/projects`)
- ✅ Auf der Startseite (falls `featured: true`)
- ✅ Mit eigener Detailseite
- ✅ In beiden Sprachen

Keine weiteren Dateien oder Komponenten müssen bearbeitet werden! 🎉
