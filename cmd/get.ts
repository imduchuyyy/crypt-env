import { loadOrCreateProfile } from '../shared';

export async function getVariable(profile: string, key: string) {
  const { env } = await loadOrCreateProfile(profile);
  console.log(`${key}=${env[key] || '(undefined)'}`);
}
