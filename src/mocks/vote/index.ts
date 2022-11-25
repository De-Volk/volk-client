import { rest } from 'msw';

import { mockCreateVote, mockGetVotes, mockUpdateVote, mockGetVote } from './handler';

export const VoteHandler = [
  rest.post('/api/v1/votes', mockCreateVote),
  rest.patch('/api/v1/votes', mockUpdateVote),
  rest.get('/api/v1/votes', mockGetVotes),
  rest.get('/api/v1/votes/:voteId', mockGetVote),
];
