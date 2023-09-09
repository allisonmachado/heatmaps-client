export default function manifest() {
  return {
    name: "Heatmaps",
    short_name: "Heatmaps",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9fa",
    theme_color: "#f8f9fa",
    icons: [
      {
        src: "favicon.ico",
        sizes: "512x512",
        type: "image/x-icon",
      },
      {
        src: "calendar.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
