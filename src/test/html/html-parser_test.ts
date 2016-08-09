/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {assert} from 'chai';
import * as fs from 'fs';
import * as path from 'path';

import {ScannedFeature} from '../../ast/descriptor';
import {EntityFinder} from '../../entity/entity-finder';
import {findEntities} from '../../entity/find-entities';
import {ParsedHtmlDocument, HtmlVisitor} from '../../html/html-document';
import {HtmlImportFinder} from '../../html/html-import-finder';
import {HtmlParser} from '../../html/html-parser';
import {invertPromise} from '../test-utils';

suite('HtmlParser', () => {

  suite('parse()', () => {
    let parser: HtmlParser;

    setup(() => {
      parser = new HtmlParser();
    });

    test('parses a well-formed document', () => {
      let file = fs.readFileSync(
          path.resolve(__dirname, '../static/html-parse-target.html'), 'utf8');
      let document = parser.parse(file, '/static/html-parse-target.html');
      assert.equal(document.url, '/static/html-parse-target.html');
    });

  });

});
