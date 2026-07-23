import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kevin T. McClain | The River Witches Trilogy",
    short_name: "River Witches",
    description:
      "Official site for Kevin T. McClain, author of The River Witches paranormal thriller trilogy.",
    start_url: "/",
    display: "standalone",
    background_color: "#04061a",
    theme_color: "#04061a",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
