import { NextFunction, Response } from 'express';
import { ProfileRepository } from '../profile/repositories';

const profileRepository = new ProfileRepository();

const getProfile = async (req: any, res: Response, next: NextFunction) => {
  try {
    const profileId = req.headers.profile_id as string;
    if (!profileId) return res.status(400).send({ error: 'profile_id header not found' });

    const id = parseInt(profileId, 10);
    if (Number.isNaN(id)) return res.status(400).send({ error: 'Invalid profile_id' });

    const profile = await profileRepository.getById(id);
    if (!profile) return res.status(400).send({ error: 'Profile not found' });

    req.user = profile;

    return next();
  } catch (error: any) {
    return res.status(400).send({ error: error.message });
  }
};

export default getProfile;
