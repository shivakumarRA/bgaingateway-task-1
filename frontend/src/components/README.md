# Components Structure

This directory contains all the React components for the Collers landing page, organized in a professional and maintainable structure.

## Directory Structure

```
components/
├── shared/           # Reusable components used across the app
│   ├── Button.tsx    # Reusable button component with variants
│   ├── Icon.tsx      # Icon component with predefined icons
│   └── index.ts      # Barrel export for shared components
│
├── Header/           # Header/Navigation component
│   └── Header.tsx
│
├── Hero/             # Hero section component
│   └── Hero.tsx
│
├── Features/         # Features section component
│   ├── Features.tsx
│   └── FeatureCard.tsx
│
├── Products/         # Products showcase section
│   └── Products.tsx
│
├── WhyJoinUs/        # Why join us section
│   └── WhyJoinUs.tsx
│
├── Testimonials/     # Testimonials section
│   └── Testimonials.tsx
│
├── GrowCollection/   # Grow collection section
│   └── GrowCollection.tsx
│
├── Stats/            # Statistics section
│   └── Stats.tsx
│
├── Articles/         # Articles section
│   └── Articles.tsx
│
├── Events/           # Events section
│   └── Events.tsx
│
├── Footer/           # Footer component
│   └── Footer.tsx
│
└── index.ts         # Barrel export for all components
```

## Component Guidelines

### Shared Components

#### Button
- **Location**: `shared/Button.tsx`
- **Props**: 
  - `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
  - `size`: 'sm' | 'md' | 'lg'
  - `icon`: React.ReactNode (optional)
  - `iconPosition`: 'left' | 'right' (optional)
- **Usage**: Used throughout the app for consistent button styling

#### Icon
- **Location**: `shared/Icon.tsx`
- **Props**:
  - `name`: Predefined icon name
  - `size`: Number (default: 32)
- **Usage**: Provides consistent icon rendering

### Section Components

All section components follow a similar pattern:
- Self-contained with their own data/models
- Accept props for customization when needed
- Use shared components (Button, Icon) for consistency
- Follow the design system colors and spacing

## Best Practices

1. **Component Organization**: Each major section has its own directory
2. **Reusability**: Shared components are in the `shared/` directory
3. **Type Safety**: All components use TypeScript with proper interfaces
4. **Consistency**: Use shared Button and Icon components for consistency
5. **Maintainability**: Clear separation of concerns and single responsibility

## Adding New Components

1. Create a new directory under `components/`
2. Add the component file(s)
3. Export from the component's directory index (if needed)
4. Add to `components/index.ts` for easy importing
5. Update this README if it's a major component

