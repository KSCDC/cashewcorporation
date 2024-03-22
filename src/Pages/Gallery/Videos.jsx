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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {response.map((video, index) => {
          const videoId = extractVideoId(video.name);
          const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

          return (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
              {embedUrl && (
                <iframe
                  key={index} // Ensure each iframe has a unique key
                  className="w-full h-full lg:h-96"
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
