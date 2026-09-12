function LinkCard({ title, description, url, icon, iconImage }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card"
    >
      <div className="link-card-left">
        {iconImage ? (
          <img
            src={iconImage}
            alt=""
            className="link-card-icon"
          />
        ) : (
          <span className="link-card-icon">
            {icon}
          </span>
        )}

        <div className="link-card-text">
          <h3>{title}</h3>

          {description && (
            <p>{description}</p>
          )}
        </div>
      </div>

      <span className="link-card-arrow">↗</span>
    </a>
  );
}

export default LinkCard;