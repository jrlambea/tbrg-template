// Copyright (C) 2013 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview
 * Registers a language handler for powershell
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-powershell"></pre>
 *
 *
 * http://www.microsoft.com/en-us/download/confirmation.aspx?id=9706 defines the
 * powershell grammar lexical grammar.
 *
 * @author mgetz@leetsoftwerx.com
 */
 "use strict";
PR['registerLangHandler'](
    PR['createSimpleLexer'](
            [
          // Whitespace.
                  [PR['PR_PLAIN'], /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
                  // A delimited comment
                  [PR['PR_COMMENT'],     /^\x3C#[^\r\n]*#>\b/, null],
                  // A line comment that starts with #
                  [PR['PR_COMMENT'],     /^#[^\r\n]*/, null, '#'],
                  // A double quoted, possibly multi-line, string.
                  [PR['PR_STRING'],      /^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, null, '"'],
                  ['opn',             /^\(+/, null, '('],
         ['clo',             /^\)+/, null, ')'],
        ],
            [
              [PR['PR_KEYWORD'],     /^(?:begin|break|catch|class|continue|data|define|do|dynamicparam|else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in|param|process|return|switch|throw|trap|try|until|using|var|while)\b/, null],
                  [PR['PR_TAG'],  /^(?:\{|\}|\(|\)|\[|\])/, null],
                  [PR['PR_LITERAL'], /^(?:\d+|0x[\da-f]+)l?(?:kb|mb|gb|tb|pb)?\b/, null],
                  [PR['PR_DECLARATION'], /^(?:(?:\$|@)(?:[_\$\^\?]|\w+))\b/, null],
                  [PR['PR_TYPE'], /\-(?:eq|ne|g(?:e|t)|l(?:e|t)|i(?:g(?:e|t)|l(?:e|t)|ne|eq)|c(?:g(?:e|t)|l(?:e|t)|ne|eq))/, null]
             ]),
        ['powershell','posh', 'ps1']);
