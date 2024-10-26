/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ScheduleImport } from './routes/schedule'
import { Route as ReviewsImport } from './routes/reviews'
import { Route as ContactsImport } from './routes/contacts'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'

// Create/Update Routes

const ScheduleRoute = ScheduleImport.update({
  path: '/schedule',
  getParentRoute: () => rootRoute,
} as any)

const ReviewsRoute = ReviewsImport.update({
  path: '/reviews',
  getParentRoute: () => rootRoute,
} as any)

const ContactsRoute = ContactsImport.update({
  path: '/contacts',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/contacts': {
      preLoaderRoute: typeof ContactsImport
      parentRoute: typeof rootRoute
    }
    '/reviews': {
      preLoaderRoute: typeof ReviewsImport
      parentRoute: typeof rootRoute
    }
    '/schedule': {
      preLoaderRoute: typeof ScheduleImport
      parentRoute: typeof rootRoute
    }
    '/_layout/': {
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutRoute.addChildren([LayoutIndexRoute]),
  ContactsRoute,
  ReviewsRoute,
  ScheduleRoute,
])

/* prettier-ignore-end */
