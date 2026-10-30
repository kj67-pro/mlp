import { createFileRoute } from "@tanstack/react-router";
import pinkiePie from "@/assets/pinkie-pie.png";
import cupcake from "@/assets/pinkie-cupcake.png";
import bgCloud from "@/assets/bg-cloud.png.asset.json";
import bgTree from "@/assets/bg-tree.png.asset.json";
import bgSugar from "@/assets/bg-sugar.png.asset.json";
import bgCottage from "@/assets/bg-cottage.png.asset.json";
import bgBoutique from "@/assets/bg-boutique.png.asset.json";
import bgBarn from "@/assets/bg-barn.png.asset.json";

const backgrounds = {
  cloud: bgCloud.url,
  tree: bgTree.url,
  sugar: bgSugar.url,
  cottage: bgCottage.url,
  boutique: bgBoutique.url,
  barn: bgBarn.url,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carrera infinita de Ponis" },
      { name: "description", content: "Corre, salta y guarda tus puntuaciones en un historial compartido." },
      { property: "og:title", content: "Carrera infinita de Ponis" },
      { property: "og:description", content: "Corre, salta y guarda tus puntuaciones en un historial compartido." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const params = new URLSearchParams({
    pinkie: pinkiePie,
    cupcake,
    bgs: JSON.stringify(backgrounds),
  });
  return (
    <iframe
      src={`/game.html?${params.toString()}`}
      allow="web-share"
      title="Carrera infinita de Ponis"
      className="block h-screen w-full border-0"
    />
  );
}
