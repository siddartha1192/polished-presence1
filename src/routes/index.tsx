import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import styles from "../innovsol/styles.css.txt?raw";
import body from "../innovsol/body.html.txt?raw";
import script from "../innovsol/script.js.txt?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Innovsol | Innovate · Disrupt · Transform" },
      {
        name: "description",
        content:
          "Innovsol delivers enterprise-grade product engineering, AI, and digital transformation services. Innovate. Disrupt. Transform.",
      },
      { property: "og:title", content: "Innovsol | Innovate · Disrupt · Transform" },
      {
        property: "og:description",
        content:
          "Enterprise product engineering, AI, and digital transformation services.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "text/javascript";
    el.text = script;
    document.body.appendChild(el);
    return () => {
      el.remove();
      // Reset guard so the script re-initialises on remount
      (window as any).__reelInit = false;
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
