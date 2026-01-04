import { useRef, useState } from "react";
import "./styles/Header.css";

const Header = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch {
        // Autoplay may be blocked until user interaction.
      }
    }
  };

  return (
    <>
      <header className="wedding-header">
        <div className="header-box">
          <span className="wedding-name">Minh</span>
          <span className="wedding-name" aria-hidden="true"> & </span>
          <span className="wedding-name">Ai đó</span>
        </div>

        <div className="header-box">
          <ul className="header-list">
            <li className="header-list__item">Giới thiệu</li>
            <li className="header-list__item">Ảnh cưới</li>
            <li className="header-list__item">Địa điểm</li>
            <li className="header-list__item">Mừng cưới</li>
          </ul>
        </div>

        <div
          className="header-box header-box__icon"
          onClick={toggleMusic}
        >
          <img
            className="header-icon"
            src={
              playing
                ? "/icons/audio-on.svg"
                : "/icons/audio-off.svg"
            }
            alt="music"
          />
        </div>
      </header>

      {/* Audio hidden */}
      <audio
        ref={audioRef}
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/iDo.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Header;
