import { useEffect } from "react";
import ReactDOM from "react-dom";

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // trava scroll
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="video-overlay">
      <div className="video-caixa">
        <button className="fechar-modal" onClick={onClose}>✕</button>
        <iframe
          src={`${videoUrl}?autoplay=1`}
          title="Vídeo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
}
