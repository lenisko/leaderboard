import type { NextApiRequest, NextApiResponse } from 'next';

import { getTrainerProfile } from '@/features/profile/api';
import { Trainer } from '@/types';
import { isUserNotLoggedIn } from '@/features/auth/api/apiGuard';
import { setCacheControlHeader } from '@/utils/apiCacheControl';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  request: NextApiRequest,
  response: NextApiResponse<Trainer | { code: number; message: string }>,
): Promise<void> => {
  if (await isUserNotLoggedIn(request, response)) {
    return;
  }
  setCacheControlHeader(response);

  const { trainerName } = request.query;

  if (typeof trainerName !== 'string') {
    response.status(400).json({ code: 400, message: 'bad request' });
    return;
  }

  const trainer = await getTrainerProfile(trainerName);

  if (!trainer) {
    response.status(404).json({ code: 404, message: 'not found' });
    return;
  }

  response.status(200).json(trainer);
};
