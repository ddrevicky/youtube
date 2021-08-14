import VideoGrid from '../components/VideoGrid';

const videos = [
  {
    title: 'Rick and Morty',
    channel: 'Swimpedia',
    views: 122,
    url: 'http://unsplash.it/250/150?gravity=center',
  },
  {
    title: 'Rick and Morty',
    channel: 'Swimpedia',
    views: 122,
    url: 'http://unsplash.it/250/150?gravity=center',
  },
  {
    title: 'Rick and Morty',
    channel: 'Swimpedia',
    views: 122,
    url: 'http://unsplash.it/250/150?gravity=center',
  },
  {
    title: 'Rick and Morty',
    channel: 'Swimpedia',
    views: 122,
    url: 'http://unsplash.it/250/150?gravity=center',
  },
  {
    title: 'Rick and Morty',
    channel: 'Swimpedia',
    views: 122,
    url: 'http://unsplash.it/250/150?gravity=center',
  },
  {
    title: 'Rick and Morty',
    channel: 'Swimpedia',
    views: 122,
    url: 'http://unsplash.it/250/150?gravity=center',
  },
  {
    title: 'Rick and Morty',
    channel: 'Swimpedia',
    views: 122,
    url: 'http://unsplash.it/250/150?gravity=center',
  },
  {
    title: 'Rick and Morty',
    channel: 'Swimpedia',
    views: 122,
    url: 'http://unsplash.it/250/150?gravity=center',
  },
  {
    title: 'Rick and Morty',
    channel: 'Swimpedia',
    views: 122,
    url: 'http://unsplash.it/250/150?gravity=center',
  },
  {
    title: 'Rick and Morty',
    channel: 'Swimpedia',
    views: 122,
    url: 'http://unsplash.it/250/150?gravity=center',
  },
];

function Home() {
  return (
    <div>
      <body>
        <VideoGrid videos={videos} />;
      </body>
    </div>
  );
}

export default Home;
