import { loadOrCreateProfile } from '../shared';

export async function addProfile(profile: string) {
  await loadOrCreateProfile(profile);
}
