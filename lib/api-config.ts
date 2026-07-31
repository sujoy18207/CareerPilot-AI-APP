/**
 * API Configuration for CareerPilot
 *
 * When building for mobile (Capacitor), relative paths like /api/... won't work
 * because the app is served from a local file/server.
 *
 * Change the API_BASE_URL to your production server URL (e.g., https://your-site.vercel.app)
 */

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const getApiUrl = (path: string) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // If we have a base URL defined, use it. Otherwise, use relative path (works on web).
  if (API_BASE_URL) {
    return `${API_BASE_URL}${cleanPath}`;
  }

  return cleanPath;
};
