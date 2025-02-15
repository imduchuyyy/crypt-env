import { loadOrCreateProfile, saveProfile } from '../shared';

export async function deleteVariable(profile: string, key: string) {
  const { env, password } = await loadOrCreateProfile(profile);
  delete env[key];
  saveProfile(profile, env, password);
  console.log(`Deleted ${key} from profile "${profile}"`);
}
