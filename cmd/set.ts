import { loadOrCreateProfile, saveProfile } from '../shared';

export async function setVariable(profile: string, key: string, value: string) {
  const { env, password } = await loadOrCreateProfile(profile);
  env[key] = value;
  saveProfile(profile, env, password);
  console.log(`Set ${key}=${value} in profile "${profile}"`);
}
