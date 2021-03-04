'use strict';

import path from 'path';
import url from 'url';
import generate from 'markdown-it-testgen';
import markdown from 'markdown-it';
import plugin from '../dist/index.js';
import yaml from 'yaml';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('', function () {
  var md = markdown().use(plugin,{ parseMetadata: yaml.parse });
  generate(path.join(__dirname, 'fixtures/default.txt'), md);
});