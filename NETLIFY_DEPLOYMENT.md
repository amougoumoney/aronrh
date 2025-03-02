# Netlify Deployment Guide

This document provides instructions for deploying the HRMS frontend application to Netlify.

## Prerequisites

- A Netlify account
- Git repository with your project

## Environment Variables

The application uses environment variables to configure API endpoints for different environments. These variables are set in the following files:

- `.env.development` - For local development
- `.env.production` - For production deployment

When deploying to Netlify, you should set the following environment variables in the Netlify dashboard:

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `VUE_APP_API_BASE_URL` | The base URL for API requests | `https://your-api-domain.com/api/v1` |
| `VUE_APP_ENV` | The environment name | `production` |

## Deployment Steps

### Option 1: Deploy via Netlify UI

1. Log in to your Netlify account
2. Click "New site from Git"
3. Connect to your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Show advanced" and add the environment variables
7. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login to Netlify: `netlify login`
3. Initialize your site: `netlify init`
4. Deploy your site: `netlify deploy --prod`

## Handling SPA Routing

The `netlify.toml` file in the project root includes configuration for proper SPA routing with Vue Router. This ensures that all routes are directed to `index.html`, allowing Vue Router to handle client-side routing.

## Troubleshooting

If you encounter issues with API requests:

1. Check that the `VUE_APP_API_BASE_URL` environment variable is set correctly
2. Ensure your API server has proper CORS headers configured
3. Verify that your API endpoints match those defined in `src/config/api.config.js`

## Local Testing of Production Build

To test the production build locally before deploying:

```bash
# Build for production
npm run build

# Install serve
npm install -g serve

# Serve the production build
serve -s dist
``` 