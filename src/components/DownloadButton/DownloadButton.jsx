import "./downloadbutton.css";

const DownloadButton = ({ label = "Download Resume", className = "" }) => {
  const handleDownload = () => {
    const fileId = "1FBP5Mi6AccU-ag6R1KI7tBsWTMBDI8GT";
    const resumeUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button type="button" className={`download-btn ${className}`.trim()} onClick={handleDownload}>
      <span>{label}</span>
      <span className="download-btn-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4v10" />
          <path d="M8 10l4 4l4-4" />
          <path d="M4 19h16" />
        </svg>
      </span>
    </button>
  );
};

export default DownloadButton;
