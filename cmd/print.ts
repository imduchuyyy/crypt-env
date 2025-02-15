import { loadOrCreateProfile } from '../shared';

export async function printVariables(profile: string) {
  const { env } = await loadOrCreateProfile(profile);

  console.log(`Environment variables for profile "${profile}":`);
  if (Object.keys(env).length === 0) {
    console.log('(empty)');
  } else {
    for (const [key, value] of Object.entries(env)) {
      console.log(`${key}=${value}`);
    }
  }
}
