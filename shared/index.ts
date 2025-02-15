import * as fs from 'fs';
import * as path from 'path';
import inquirer from 'inquirer';
import { encrypt, decrypt } from '../crypto';

const PROFILE_DIR = path.join(process.env.HOME || '.', '.crypt-env');

if (!fs.existsSync(PROFILE_DIR)) {
  fs.mkdirSync(PROFILE_DIR);
}

function getProfilePath(profile: string) {
  return path.join(PROFILE_DIR, `${profile}.json.enc`);
}

export async function loadOrCreateProfile(profile: string): Promise<{ env: Record<string, string>; password: string }> {
  const profilePath = getProfilePath(profile);

  if (!fs.existsSync(profilePath)) {
    console.log(`Profile "${profile}" does not exist. Creating it now...`);
    const { password } = await inquirer.prompt({
      type: 'password',
      name: 'password',
      message: `Enter password to create profile "${profile}":`,
      mask: '*',
    });

    const initialData = {};
    const encryptedData = encrypt(JSON.stringify(initialData), password);
    fs.writeFileSync(profilePath, encryptedData);
    console.log(`Profile "${profile}" created.`);
    return { env: initialData, password };
  }

  const { password } = await inquirer.prompt({
    type: 'password',
    name: 'password',
    message: `Enter password for profile "${profile}":`,
    mask: '*',
  });

  const encryptedData = fs.readFileSync(profilePath, 'utf-8');
  const decryptedData = decrypt(encryptedData, password);
  return { env: JSON.parse(decryptedData), password };
}

export function saveProfile(profile: string, env: Record<string, string>, password: string) {
  const encryptedData = encrypt(JSON.stringify(env), password);
  fs.writeFileSync(getProfilePath(profile), encryptedData);
  console.log(`Profile "${profile}" saved.`);
}

export function listProfiles(): string[] {
  return fs
    .readdirSync(PROFILE_DIR)
    .filter((file) => file.endsWith('.json.enc'))
    .map((file) => file.replace('.json.enc', ''));
}

export function deleteProfileFile(profile: string) {
  const profilePath = getProfilePath(profile);
  if (fs.existsSync(profilePath)) {
    fs.unlinkSync(profilePath);
    console.log(`Profile "${profile}" deleted.`);
  } else {
    console.log(`Profile "${profile}" does not exist.`);
  }
}
