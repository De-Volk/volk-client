import type { Props } from '../type';

const MOCK_VOTES = [
  {
    publisher: {
      url: 'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
      name: '익명의 게시자',
    },
    endDate: new Date(1669809899723),
    candidates: {
      count: 99,
      urls: [
        'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
        'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
        'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
      ],
    },
    title: '여사친의 깻잎을 떼어주는 남자친구',
    positiveValue: '싸운다',
    negativeValue: '안싸운다',
  },
  {
    publisher: {
      url: 'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
      name: '익명의 게시자',
    },
    endDate: new Date(1669809899723),
    candidates: {
      count: 99,
      urls: [
        'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
        'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
        'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
      ],
    },
    title: '여사친의 깻잎을 떼어주는 남자친구',
    positiveValue: '싸운다',
    negativeValue: '안싸운다',
  },
  {
    publisher: {
      url: 'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
      name: '익명의 게시자',
    },
    endDate: new Date(1669809899723),
    candidates: {
      count: 99,
      urls: [
        'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
        'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
        'https://avatars.githubusercontent.com/u/38166372?s=96&v=4',
      ],
    },
    title: '여사친의 깻잎을 떼어주는 남자친구',
    positiveValue: '싸운다',
    negativeValue: '안싸운다',
  },
];

export const mockCreateVote: Props = (req, res, ctx) => res(ctx.json(true));
export const mockGetVotes: Props = (req, res, ctx) => res(ctx.json(MOCK_VOTES));
export const mockUpdateVote: Props = (req, res, ctx) => res(ctx.json(true));
export const mockGetVote: Props = (req, res, ctx) => res(ctx.json(true));
