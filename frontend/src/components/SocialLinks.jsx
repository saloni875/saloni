function SocialLinks() {
  const socials = [
    {
      name: "BCD",
      icon: "/bcd.png",
      url: "https://b-cd.app/profile",
    },
     {
      name: "Instagram",
      icon: "/ig.jpeg",
      url: "https://www.instagram.com/saloni_layover_arirang/",
    },
    {
      name: "YouTube",
      icon: "/youtube.jpeg",
      url: "https://youtube.com/@web-dev-even-after-ai-875?si=5nBQsPcyNM1CVMAT",
    },
    {
      name: "X",
      icon: "/twt.jpeg",
      url: "https://x.com/SaloniLayover",
    },
    
  ];

  return (
    <div className="social-links">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={social.name}
        >
          <img src={social.icon} alt={social.name} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;