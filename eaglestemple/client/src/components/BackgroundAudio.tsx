import React, { useEffect, useRef } from 'react';

const BackgroundAudio: React.FC = () => {
  const audioUrl = "https://www.christourlife.ca/images/music/instrumental-hymns-cd/09%20I%20Need%20Thee%20Every%20Hour.mp3";
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 1. Create the persistent HTML Audio Element instance
    const audio = new Audio(audioUrl);
    audio.loop = true;          // Loop continuously
    audio.volume = 0.4;         // Set to a soft background level (40%)
    audioRef.current = audio;

    // 2. Auto-play trigger mechanism
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            // Clean up event listeners immediately once playing successfully begins
            removeInteractionListeners();
          })
          .catch((error) => {
            console.log("Audio autoplay was restricted by the browser until further interaction:", error);
          });
      }
    };

    // Helper functions to manage screen listeners
    const addInteractionListeners = () => {
      window.addEventListener('click', handleFirstInteraction);
      window.addEventListener('touchstart', handleFirstInteraction);
      window.addEventListener('scroll', handleFirstInteraction);
    };

    const removeInteractionListeners = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    // Try playing instantly (works if they refresh or have already clicked around)
    audio.play().catch(() => {
      // If blocked by browser security, activate listeners to play on their very first click/scroll
      addInteractionListeners();
    });

    // Cleanup audio footprint when navigating away from the page
    return () => {
      removeInteractionListeners();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // This is a global sound utility component, so it renders invisible behind the scenes
  return null;
};

export default BackgroundAudio;