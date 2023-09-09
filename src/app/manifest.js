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
        sizes: "96x96",
        type: "image/x-icon",
      },
      {
        src: "logo100.png",
        type: "image/png",
        sizes: "50x50",
      },
      {
        src: "logo500.png",
        type: "image/png",
        sizes: "100x100",
      },
    ],
  };
}
