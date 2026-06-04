import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import mainStyles from "../innovsol/styles.css.txt?raw";
import careersStyles from "../innovsol/careers-styles.css.txt?raw";
import body from "../innovsol/careers-body.html.txt?raw";
import script from "../innovsol/careers-script.js.txt?raw";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Innovsol — Build AI That Actually Ships" },
      {
        name: "description",
        content:
          "Join the Innovsol FDE team. Build enterprise AI that ships to production. View open roles in AI engineering, ML, data engineering, strategy and more.",
      },
      { property: "og:title", content: "Careers | Innovsol" },
      {
        property: "og:description",
        content:
          "Embed inside Fortune 500s. Write code that hits production. See your AI running in the real world, fast.",
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
  component: Careers,
});

function Careers() {
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "text/javascript";
    el.text = script;
    document.body.appendChild(el);
    return () => {
      el.remove();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: mainStyles + careersStyles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
