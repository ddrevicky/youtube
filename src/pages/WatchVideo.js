import VideoPlayer from '../components/VideoPlayer';

function WatchVideo() {
  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    width: 853,
    height: 480,
    // videoWidth: 853,
    // videoHeight: 480,
    // currentWidth: 853,
    sources: [
      {
        // https://pixabay.com/videos/lake-houses-hill-mountain-boat-67201/
        src: 'https://vod-progressive.akamaized.net/exp=1629236369~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4341%2F20%2F521707474%2F2437261020.mp4~hmac=0451fbc3726a6a9f38d4e7cd65e068283880f704ddea9df3b5a17e695299a6d9/vimeo-prod-skyfire-std-us/01/4341/20/521707474/2437261020.mp4?filename=Ink+-+67358.mp4',
        type: 'video/mp4',
      },
    ],
  };
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>Test1</div>
        <div>Test2</div>
        <div style={{ width: '50%' }}>
          <VideoPlayer options={videoJsOptions} />
        </div>
        Watch Video
      </div>
    </div>
  );
}

export default WatchVideo;
