import type { Props } from '../type';

export const MSW_USER_INFO = {
  userId: 1,
  name: '차재명',
  email: 'maxcha98@ajou.ac.kr',
  profileImage: '프로필 이미지 스토리지 링크',
};

export const mockLogin: Props = (req, res, ctx) => res(ctx.json(true));
export const mockRegister: Props = (req, res, ctx) =>
  res(
    ctx.json({
      status: 200,
    }),
  );
export const mockLogOut: Props = (req, res, ctx) => res(ctx.json(true));
export const mockGetToken: Props = (req, res, ctx) => res(ctx.json(true));
export const mockGetUserInfo: Props = (req, res, ctx) => res(ctx.json(MSW_USER_INFO));
export const mockUpdateUserInfo: Props = (req, res, ctx) => res(ctx.json(true));
export const mockUpdatePw: Props = (req, res, ctx) => res(ctx.json(true));
