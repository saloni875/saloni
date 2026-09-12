import { Share2, Sparkles } from "lucide-react";

function Header() {
  const handleShare = async () => {
    const shareData = {
      title: "LottiesxWorld",
      text: "Sharing what makes me happy ✨🍍",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied!");
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  return (
    <header className="header">

      <div className="header-image">
        <img
          src="/bts-header1.jpeg"
          alt=""
        />

        <div className="header-overlay" />

        <div className="header-content">

          <a
            href="https://saloni875.github.io/portfolio/"
            className="header-community"
          >
            <span className="header-sparkles">
              <Sparkles size={17} />
            </span>

            <span>Portfolio</span>

            <span>💜</span>
          </a>

          <button
            className="share-button"
            onClick={handleShare}
            aria-label="Share this page"
          >
            <Share2 size={18} />
          </button>

        </div>
      </div>

    </header>
  );
}

export default Header;