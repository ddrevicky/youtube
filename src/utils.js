import dayjs from 'dayjs';

export const routes = {
  home: '/',
  explore: '/feed/explore',
  subscriptions: '/feed/subscriptions',
  library: '/feed/library',
  playlist: '/playlist',
  channel: '/channel',
  results: '/results',
};

export const mockVideos = [
  {
    title: 'Pride and Prejudice',
    channel: { name: 'Jane Austen', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=1',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Sun Also Rises',
    channel: { name: 'Ernest Hemingway', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=2',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Wuthering Heights',
    channel: { name: 'Emily Bronte', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=3',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'A Clockwork Orange',
    channel: { name: 'Anthony Burgess', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=4',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Middle Ages',
    channel: { name: 'Geoffrey Chaucer', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=1',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: '1984',
    channel: { name: 'George Orwell', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=5',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Animal Farm',
    channel: { name: 'George Orwell', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=6',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Dance With Dragons',
    channel: { name: 'George R.R. Martin', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=7',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Farewell to Arms',
    channel: { name: 'Ernest Hemingway', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=9',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Pulp Fiction',
    channel: { name: 'Quentin Tarantino', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=8',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Kill Bill Vol. 1',
    channel: { name: 'Quentin Tarantino', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=10',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Kill Bill Vol. 2',
    channel: { name: 'Quentin Tarantino', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=11',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Jurassic Park',
    channel: { name: 'Steven Spielberg', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=12',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Hateful Eight',
    channel: { name: 'Quentin Tarantino', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=13',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Django Unchained',
    channel: { name: 'Quentin Tarantino', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=14',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
  {
    title: 'Space Odyssey',
    channel: { name: 'Stanley Kubrick', id: 1234 },
    views: 4290,
    url: 'https://picsum.photos/250/150?random=15',
    id: 'abdefghijk',
    uploadDatetime: dayjs(),
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Aenean fermentum risus id tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium lectus id turpis. Nullam sit amet magna in magna gravida vehicula. Mauris elementum mauris vitae tortor. Etiam bibendum elit eget erat. Integer malesuada. Etiam quis quam. Nulla pulvinar eleifend sem. Sed convallis magna eu sem.',
  },
];
