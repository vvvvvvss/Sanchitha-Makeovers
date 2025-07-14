# Sanchitha Makeovers - Bridal Makeover Website

## Overview

This is a full-stack web application for Sanchitha Makeovers, a luxury bridal makeover service based in Bangalore. The application provides a professional online presence with booking functionality, portfolio showcase, and contact management for a bridal makeup and styling business.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for brand colors
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Request Handling**: Express middleware for JSON parsing, CORS, and error handling
- **Development**: Hot reload with Vite integration for full-stack development

### Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM
- **Cloud Provider**: Neon Database (@neondatabase/serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Data Validation**: Zod schemas for runtime type checking and API validation

## Key Components

### Core Business Entities
1. **Bookings**: Customer appointment requests with contact details, wedding date, service selection, venue, and special requirements
2. **Contacts**: General inquiries and messages from potential customers

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Collage-style layout showcasing bridal transformations
- **Services**: Interactive service cards with pricing information
- **Portfolio**: Image gallery with category filtering
- **Testimonials**: Customer reviews and ratings display
- **Booking Form**: Multi-step form for appointment requests
- **Contact Form**: Simple contact form for general inquiries

### API Endpoints
- `POST /api/bookings` - Create new booking request
- `GET /api/bookings` - Retrieve all bookings
- `POST /api/contacts` - Create new contact message
- `GET /api/contacts` - Retrieve all contact messages

## Data Flow

1. **User Interaction**: Users browse services, view portfolio, and submit booking/contact forms
2. **Form Submission**: React Hook Form with Zod validation handles client-side validation
3. **API Request**: TanStack Query manages HTTP requests to Express API endpoints
4. **Data Validation**: Server validates incoming data using shared Zod schemas
5. **Database Operations**: Drizzle ORM handles database queries and type-safe operations
6. **Response Handling**: API responses are cached and managed by TanStack Query
7. **UI Updates**: Toast notifications provide user feedback, and query invalidation triggers UI updates

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe CSS class management

### Development Tools
- **Drizzle Kit**: Database migration and introspection tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment optimization for Replit platform

### Data Management
- **React Hook Form**: Performant form handling with minimal re-renders
- **Date-fns**: Date manipulation and formatting utilities

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend integration
- **Hot Module Replacement**: Real-time updates during development
- **Replit Integration**: Optimized for Replit development environment with custom plugins

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles Node.js application to `dist/index.js`
- **Static Assets**: Express serves built frontend from production build
- **Database**: PostgreSQL database hosted on Neon with connection pooling

### Environment Configuration
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection
- **Build Scripts**: Separate development and production build processes
- **Type Checking**: TypeScript compilation verification before deployment

### Key Architectural Decisions

1. **Monorepo Structure**: Shared types and schemas between frontend and backend for type safety
2. **Database Abstraction**: Storage interface allows switching between in-memory and PostgreSQL storage
3. **Component Library**: Shadcn/ui provides consistent, accessible UI components
4. **Form Handling**: React Hook Form with Zod validation for robust form management
5. **State Management**: TanStack Query eliminates need for global state management
6. **Development Experience**: Vite + Express integration for seamless full-stack development