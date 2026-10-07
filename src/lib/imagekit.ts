// ImageKit URL builder. Falls back to /public files when no endpoint is set.
const EP = import.meta.env.PUBLIC_IMAGEKIT_ENDPOINT as string | undefined;
export function ik(path: string, tr = 'w-1200,q-80,f-auto') {
  if (!EP) return path.startsWith('/') ? path : `/${path}`;
  return `${EP}/${path.replace(/^\//, '')}?tr=${tr}`;
}
export const video = (p?: string) => (EP && p ? `${EP}/${p}` : '');
