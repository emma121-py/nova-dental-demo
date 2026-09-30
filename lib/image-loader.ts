"use client";

import type { ImageLoaderProps } from "next/image";

// Local WebP variants keep Next/Image responsive without a runtime server.
export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (width <= 480) return src.replace(/\.webp$/, "-480.webp");
  if (width <= 768) return src.replace(/\.webp$/, "-768.webp");
  return src;
}
