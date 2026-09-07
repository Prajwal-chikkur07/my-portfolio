import type { SVGProps } from "react";

/**
 * lucide-react v1 no longer ships brand marks, so the LinkedIn glyph lives here.
 */
export function LinkedInIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      focusable="false"
      {...props}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 9.3h5.16V21H2.4V9.3Zm7.5 0h4.94v1.6h.07c.7-1.2 2.38-2.02 4.06-2.02 3.42 0 4.03 2.1 4.03 5.29V21h-5.15v-5.66c0-1.35-.25-2.7-1.9-2.7-1.6 0-1.9 1.2-1.9 2.61V21H9.9V9.3Z" />
    </svg>
  );
}
