// EPIC RPG Android layout contract: expose the current physical viewport class for CSS and future native layout decisions.
export function registerResponsiveViewport() {
  const update = () => {
    const viewport = window.visualViewport;
    const width = Math.round(viewport?.width || window.innerWidth);
    const height = Math.round(viewport?.height || window.innerHeight);
    const screenSize = width <= 380 ? "small-phone" : width <= 600 ? "phone" : width <= 900 ? "large-phone" : "tablet";
    document.documentElement.dataset.screenSize = screenSize;
    document.documentElement.dataset.orientation = width >= height ? "landscape" : "portrait";
    document.documentElement.style.setProperty("--viewport-height", `${height}px`);
  };

  update();
  window.addEventListener("resize", update, { passive: true });
  window.visualViewport?.addEventListener("resize", update, { passive: true });
  window.visualViewport?.addEventListener("scroll", update, { passive: true });
}
