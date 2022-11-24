import { setupWorker } from 'msw';

import { UserHandler } from './user';
import { VoteHandler } from './vote';

export const worker = setupWorker(...UserHandler, ...VoteHandler);
