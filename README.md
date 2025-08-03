# Netzet-FameTonic
"Develop a Next.js app with a solid architecture that is easy to maintain and scalable. A clean code structure will provide visual clarity and enhance readability."

Project Structure
This document outlines the folder structure and organization of our React/TypeScript application. Please follow these conventions to maintain consistency across the codebase.

Directory Overview
src/
├── app/                    # Application core and routing
├── components/             # Reusable UI components
│   ├── landing/           # Landing page specific components
│   │   ├── HeroSection.tsx
│   │   └── index.ts
│   ├── layout/            # Layout and structural components
│   │   ├── Header.tsx
│   │   ├── index.ts
│   │   └── SaleBanner.tsx
│   └── ui/                # Base UI components (buttons, inputs, etc.)
│       ├── Button.tsx
│       ├── FeatureItem.tsx
│       ├── index.ts
│       └── NavMenu.tsx
├── lib/                   # Utility functions and configurations
├── types/                 # TypeScript type definitions
│   ├── index.ts
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
Folder Structure Guidelines
/src/app
Contains the main application logic and Next.js App Router structure
Houses global layouts, pages, and app-level configurations
/src/components
Organized by feature and hierarchy:

/components/landing
Components specific to the landing page
Self-contained components that are not reusable elsewhere
/components/layout
Structural components used across multiple pages
Header, footer, navigation, and other layout elements
Components that define the application's overall structure
/components/ui
Base/primitive UI components
Highly reusable components (buttons, inputs, cards, etc.)
Should be generic and not contain business logic
/src/lib
Utility functions, helpers, and configurations
Third-party library configurations
Custom hooks and shared logic
/src/types
TypeScript type definitions and interfaces
Global types used across the application
API response types and data models
File Naming Conventions
Components: PascalCase (e.g., HeroSection.tsx, Button.tsx)
Utilities: camelCase (e.g., formatDate.ts, apiClient.ts)
Types: PascalCase for interfaces/types (e.g., UserProfile.ts)
Constants: UPPER_SNAKE_CASE (e.g., API_ENDPOINTS.ts)
Component Organization Best Practices
Index Files: Each component folder should have an index.ts file for clean imports
Colocation: Keep related components, styles, and tests close together
Atomic Design: Structure UI components from generic (ui) to specific (feature-based)
Single Responsibility: Each component should have one clear purpose
Import Structure
typescript
// External libraries
import React from 'react'

// Internal components (from more generic to more specific)
import { Button } from '@/components/ui'
import { Header } from '@/components/layout'
import { HeroSection } from '@/components/landing'

// Types and utilities
import type { UserProfile } from '@/types'
Maintenance Notes
Keep components small and focused
Regularly review and refactor shared components in /ui
Ensure type safety with proper TypeScript definitions
Use barrel exports (index.ts) for cleaner imports
Consider component reusability when placing in the folder hierarchy
Last updated: [Current Date] Maintained by: Tech Lead Team


