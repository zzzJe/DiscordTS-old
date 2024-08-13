import { join, dirname } from 'path';

const base = dirname(__dirname);

export default {
    commands_path: join(base, 'command'),
};
