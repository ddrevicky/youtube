import { mockVideos } from '../../utils';
import VideoPlayer from '../common/components/VideoPlayer';
import VideoComments from './components/VideoComments';
import VideoDescription from './components/VideoDescription';
import VideoInfo from './components/VideoInfo';
import WatchVideoThumbnail from './components/WatchVideoThumbnail';
import { WatchVideoWrapper } from './WatchVideo.styles';

function WatchVideo() {
  const suggestedVideos = mockVideos;
  const currentVideo = mockVideos[0];

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
        src: 'https://vod-progressive.akamaized.net/exp=1632500377~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4327%2F20%2F521635037%2F2436722627.mp4~hmac=1b1644aeda3deb0269ac9892de08564b798a113b1c61b94486f91cf297995cfd/vimeo-prod-skyfire-std-us/01/4327/20/521635037/2436722627.mp4?filename=Lake+-+67201.mp4',
        type: 'video/mp4',
      },
    ],
  };
  return (
    <WatchVideoWrapper>
      <div className="video-column">
        <VideoPlayer options={videoJsOptions} />
        {/* TODO: Rename to WatchVideoInfo to avoid conflict with common comp VideoInfo  */}
        <VideoInfo video={currentVideo} />
        <div className="divider" />
        <VideoDescription video={currentVideo} />
        <div className="divider" />
        <VideoComments />
      </div>
      <div className="suggested-videos">
        {suggestedVideos.map((video, idx) => (
          <WatchVideoThumbnail video={video} key={idx} />
        ))}
      </div>
    </WatchVideoWrapper>
  );
}

export default WatchVideo;
