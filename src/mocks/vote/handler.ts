import type { Props } from '../type';

export const mockCreateVote: Props = (req, res, ctx) => res(ctx.json(true));
export const mockGetVotes: Props = (req, res, ctx) => res(ctx.json(true));
export const mockUpdateVote: Props = (req, res, ctx) => res(ctx.json(true));
export const mockGetVote: Props = (req, res, ctx) => res(ctx.json(true));
