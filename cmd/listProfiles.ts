import { listProfiles } from '../shared';

export function listProfilesCommand() {
  const profiles = listProfiles();

  if (profiles.length === 0) {
    console.log('No profiles found.');
  } else {
    console.log('Available profiles:');
    profiles.forEach((p) => console.log(`- ${p}`));
  }
}
