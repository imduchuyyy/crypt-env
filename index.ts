import { Command } from 'commander';
import { setVariable } from './cmd/set';
import { getVariable } from './cmd/get';
import { deleteVariable } from './cmd/delete';
import { execCommand } from './cmd/exec';
import { addProfile } from './cmd/addProfile';
import { deleteProfile } from './cmd/deleteProfile';
import { printVariables } from './cmd/print';
import { listProfilesCommand } from './cmd/listProfiles';

const program = new Command();

program
  .name('crypt-env')
  .description('Secure environment manager with profile-based encrypted storage')
  .version('0.1.2');

program
  .command('add-profile <profile>')
  .description('Create a new profile with password protection')
  .action(addProfile);

program
  .command('list-profiles')
  .description('List all available profiles')
  .action(listProfilesCommand);

program
  .command('set <key> <value>')
  .description('Set an environment variable in a profile')
  .option('-p, --profile <profile>', 'Profile to use', 'main')
  .action((key, value, options) => setVariable(options.profile, key, value));

program
  .command('get <key>')
  .description('Get an environment variable from a profile')
  .option('-p, --profile <profile>', 'Profile to use', 'main')
  .action((key, options) => getVariable(options.profile, key));

program
  .command('delete <key>')
  .description('Delete an environment variable from a profile')
  .option('-p, --profile <profile>', 'Profile to use', 'main')
  .action((key, options) => deleteVariable(options.profile, key));

program
  .command('exec <cmd...>')
  .description('Execute a command with environment variables from a profile')
  .option('-p, --profile <profile>', 'Profile to use', 'main')
  .action((cmd, options) => execCommand(options.profile, cmd));

program
  .command('print')
  .description('Print all environment variables in a profile')
  .option('-p, --profile <profile>', 'Profile to use', 'main')
  .action((options) => printVariables(options.profile));

program
  .command('delete-profile <profile>')
  .description('Delete a profile (cannot delete "main" profile)')
  .action(deleteProfile);

program.parse(process.argv);
