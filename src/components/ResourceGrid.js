import React from "react";
import "./ResourceGrid.css";
import toast, { Toaster } from "react-hot-toast";

const handleArticleClick = () => {
  window.location.href = "https://printify.com/blog/holiday-guide/";
};

const handleWebinarClick = () => {
  window.location.href =
    "https://printify.com/webinars/from-0-to-250k-in-a-year-learn-from-an-etsy-expert/#Replay";
};

const extractVideoId = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const ResourceCard = ({
  icon,
  title,
  description,
  action,
  image,
  onClickType,
  videoUrl
}) => {
  const videoId = videoUrl ? extractVideoId(videoUrl) : null;
  
  return (
    <div className="resource-card">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="resource-card-header">
        <span className="resource-card-title">{title}</span>
        <div className="reource-card-option">
        <a href="#" className="resource-card-see-more">
          See more
        </a>
        </div>
      </div>
      <div className="resource-card-content">
        {image && <img src={image} alt={title} className="resource-card-image" />}
        {videoId && (
          <div className="resource-card-video">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
        )}
        <p className="resource-card-description">{description}</p>
        {action && (
          <a href="#" className="resource-card-action" onClick={onClickType}>
            {action}
          </a>
        )}
      </div>
    </div>
  );
};

const ResourceGrid = () => (
  <div className="resource-grid grid grid-cols-1 md:grid-cols-3 gap-4">
    <ResourceCard
      title="Printify Blog"
      description="Holiday Guide 2024 - Tackle the Shopping Season Like a Pro"
      action="Read article"
      image="../images/Holiday-Guide-2023.jpg"
      onClickType={handleArticleClick}
    />
    <ResourceCard
      title="How-to POD"
      description="How to Create Products"
      videoUrl="https://youtu.be/jDbvPF20of0?list=PLWx63Do0bEXPQ5Z6RgCvhMqG9EE5ORbw8"
    />
    <ResourceCard
      title="Webinars"
      description="From $0 to $250K in a Year: Learn From an Etsy Expert"
      action="Watch webinar"
      image="../images/webinar.jpg"
      onClickType={handleWebinarClick}
    />
  </div>
);

export default ResourceGrid;
