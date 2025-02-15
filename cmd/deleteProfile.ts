import { deleteProfileFile } from '../shared';

export function deleteProfile(profile: string) {
  if (profile === 'main') {
    console.log('Deleting the "main" profile is not allowed.');
    return;
  }

  deleteProfileFile(profile);
}
