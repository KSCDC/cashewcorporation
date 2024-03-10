import React from 'react';
import useGetApi from "../../Hook/useGetApi";
import Loading from "../../Components/Loading";

function Videos() {
  const { response } = useGetApi("ytlinks");

  if (!response) {
    return <Loading />;
  }

  // Function to extract video ID from YouTube URL
  const extractVideoId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]*[\u200C\u200B]\/\u200C\u200B[^\/]*\/|[^\/]+\?v=))([^"&?\/\s]{11})/);
    return match && match[1];
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 p-3">
        {response.map((video, index) => {
          const videoId = extractVideoId(video.name);
          const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

          return (
            <div key={index}>
              {embedUrl && (
                <iframe
                  key={index} // Ensure each iframe has a unique key
                  width="560"
                  height="315"
                  src={embedUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Videos;
