
'use strict';

var queryString = require('querystring');

var _private = rootRequire('lib/privateFunctions.js');
var _globals = rootRequire('lib/globals.js');

var apiAddress = _globals.apiAddress;

/**
 * Get translations file form service
 * @param  {Object} options
 * @param  {Number} options.projectId Project ID
 * @param  {String} options.locale Locale to download
 * @param  {String} options.fileName File name to download
 */
function getFile (options) {
  options.hash = _private.getDevHash(_globals.secret);
    return _private.makeRequest(_getLink(options),
      'Unable to fetch document');
}

/**
 * @param  {Object} options
 * @return {String}
 * @private
 */
function _getLink (options) {
  return _globals.baseUrl + '/1/projects/' + options.projectId + '/translations?' + queryString.stringify({
    locale: options.locale,
    api_key: _globals.apiKey,
    timestamp: options.hash.timestamp,
    dev_hash: options.hash.devHash,
    source_file_name: options.fileName
  });
}

module.exports = getFile;
