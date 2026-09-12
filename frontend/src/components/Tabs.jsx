import { useState } from "react";
import LinkCard from "./LinkCard";

function Tabs() {
  const [activeTab, setActiveTab] = useState("work");

  const workLinks = [
    {
      title: "My Portfolio",
      description: "My web development portfolio",
      url: "https://saloni875.github.io/portfolio/",
      icon: "🌐",
    },
    {
      title: "Lovlit",
      description: "My full-stack e-commerce project",
      url: "https://lovlit.in/",
      icon: "🛍️",
    },
    {
      title: "GitHub",
      description: "My projects and code",
      url: "https://github.com/saloni875",
      iconImage: "/git.jpeg"
    },
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      url: "https://www.linkedin.com/in/saloni-layover/",
      iconImage: "/linkdin.jpeg"
    },
  ];

  const connectLinks = [
    {
      title: "Instagram",
      description: "@saloni_layover_arirang",
      url: "https://www.instagram.com/saloni_layover_arirang/",
      iconImage: "/ig.jpeg",
    },
    {
      title: "YouTube",
      description: "Web development & more",
      url: "https://youtube.com/@web-dev-even-after-ai-875",
      iconImage: "/youtube.jpeg",
    },
    {
      title: "X",
      description: "@SaloniLayover",
      url: "https://x.com/SaloniLayover",
      iconImage: "/twt.jpeg",
    },
    {
      title: "B-CD",
      description: "My B-CD profile",
      url: "https://b-cd.app/profile",
      iconImage: "/bcd.png",
    },
  ];

  const links = activeTab === "work" ? workLinks : connectLinks;

  return (
    <section className="tabs-section">

      <div className="tabs">
        <button
          className={
            activeTab === "work"
              ? "tab-button active"
              : "tab-button"
          }
          onClick={() => setActiveTab("work")}
        >
          Work
        </button>

        <button
          className={
            activeTab === "connect"
              ? "tab-button active"
              : "tab-button"
          }
          onClick={() => setActiveTab("connect")}
        >
          Connect
        </button>
      </div>

      <div className="tab-content">
        {links.map((link) => (
          <LinkCard
            key={link.title}
            title={link.title}
            description={link.description}
            url={link.url}
            icon={link.icon}
            iconImage={link.iconImage}
          />
        ))}
      </div>

    </section>
  );
}

export default Tabs;