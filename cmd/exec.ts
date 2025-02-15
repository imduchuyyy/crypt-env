import { spawn } from 'child_process';
import { loadOrCreateProfile } from '../shared';

export async function execCommand(profile: string, cmd: string[]) {
  const { env } = await loadOrCreateProfile(profile);

  console.log(`[CryptEnv] Executing "${cmd.join(' ')}" with profile "${profile}"...`);

  const child = spawn(cmd.join(' '), {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, ...env },
  });

  child.on('exit', (code) => {
    process.exit(code || 0);
  });
}
