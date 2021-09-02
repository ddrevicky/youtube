import { Wrapper } from './WatchVideo.styles';
import { mockVideos } from '../../utils';
import VideoPlayer from '../common/components/VideoPlayer';
import WatchVideoThumbnail from './components/WatchVideoThumbnail';

function WatchVideo() {
  const suggestedVideos = mockVideos.slice(0, 10);

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: false,
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
        src: 'https://vod-progressive.akamaized.net/exp=1629398593~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4327%2F20%2F521635037%2F2436722604.mp4~hmac=be9f402b2753dce86cde3995f2ac3540215b32ec21839327547737ea0cb1e3c3/vimeo-prod-skyfire-std-us/01/4327/20/521635037/2436722604.mp4?filename=Lake+-+67201.mp4',
        type: 'video/mp4',
      },
    ],
  };
  return (
    <Wrapper>
      <div className="row">
        <div className="videoCol">
          <VideoPlayer options={videoJsOptions} />
          <div>Video Description</div>
          <div>Comments</div>
        </div>
        <div className="suggestedCol">
          {suggestedVideos.map((video, idx) => (
            <WatchVideoThumbnail video={video} key={idx} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default WatchVideo;
