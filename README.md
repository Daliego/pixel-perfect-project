# Pixel-Perfect Todo List

A pixel-perfect recreation of a todo list component built with React, TypeScript, and Vite. This project implements an interactive checklist interface with exact visual fidelity to the original Figma design.

## 🎨 Design Reference

This implementation is based on the [Figma prototype](https://www.figma.com/proto/ebjf6gf0YQzPutz7b9feHL/Frontend--Copy-?node-id=14003-87&t=Q8WAOJWnjHUdCxkB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1), ensuring every measurement, color, shadow, and interaction state matches the design specifications exactly.

## ✨ Features

- **Pixel-Perfect Layout**: Exact 578×794px golden frame with precisely positioned 370×326px card component
- **Interactive Checklist**: 
  - "All pages" header with bidirectional synchronization
  - Individual page items with independent checkboxes
  - Indeterminate state for partial selection
- **8 Checkbox States**: Complete implementation of all interaction states (default, hover, active, disabled for both checked and unchecked)
- **Smooth Scrolling**: Scrollable list container for managing multiple items
- **Responsive Interactions**: Hover, active, and focus states for all interactive elements
- **Accessibility**: Proper focus states and keyboard navigation support

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS Modules** - Component styling

## 📋 Component Architecture

```
src/
├── components/
│   ├── @shared/          # Reusable components
│   │   ├── Button.tsx    # Action button with all states
│   │   ├── Card.tsx      # Container with shadow/border
│   │   └── Separator.tsx # Horizontal divider
│   └── home/             # Feature-specific components
│       ├── TodoList.tsx  # Main container component
│       └── ListItem.tsx  # Individual todo item with checkbox
├── screens/
│   └── home/             # Home page screen
└── layouts/              # Theme and color tokens
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Specifications

### Layout
- **Golden Frame**: 578px × 794px, white background
- **Card**: 370px × 326px, positioned at left: 104px, top: 85px
- **Box Shadow**: `0px 0px 4px rgba(20,20,20,0.1), 0px 8px 15px rgba(20,20,20,0.12)`
- **Border**: 1px solid #EEEEEE, border-radius: 6px

### Typography
- **Font**: Montserrat (weights 400, 700)
- **Base**: 14px, line-height 130%, color #1F2128

### Components
- **List Items**: 370px × 42px, padding 8px 15px 8px 22px
- **Checkbox**: 23px × 23px, border 1px solid rgba(205, 205, 205, 0.6)
- **Button**: 340px × 40px, background #FFCE22
- **Separator**: 340px line, 0.7px solid #CDCDCD

## 📦 Deployment

The project is configured for automatic deployment to GitHub Pages via GitHub Actions. Pushing to the `main` branch triggers the deployment workflow.

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🔍 Development Notes

- All measurements are pixel-perfect and match the Figma design exactly
- Component states (hover, active, disabled) are fully implemented
- The "All pages" checkbox automatically syncs with individual item states
- Scroll behavior is optimized for 6+ items

## 📄 License

This project is a demonstration of pixel-perfect implementation techniques.
