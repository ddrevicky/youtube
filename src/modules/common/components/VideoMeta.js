function VideoMeta({ views, uploadDatetime }) {
  const uploadDatetimeText = uploadDatetime.format('MMM D YYYY');
  return (
    <div className="flex-row">
      <span className="dot-after">{views} views</span>
      <span>{uploadDatetimeText}</span>
    </div>
  );
}

export default VideoMeta;
