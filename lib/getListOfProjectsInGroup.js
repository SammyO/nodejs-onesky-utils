'use strict'

var queryString = require('querystring');

var _private = rootRequire('lib/privateFunctions.js');
var _globals = rootRequire('lib/globals.js');

/**
 * Get a list of all projects in a projectgroup
 * @param  {Object} options
 * @param  {Number} options.projectGroupId Projectgroup ID
 */
function getListOfProjectsInGroup (options) {
  options.hash = _private.getDevHash(_globals.secret);
  return _private.makeRequest(_getLink(options));
}

/**
 * @param  {Object} options
 * @return {String}
 * @private
 */
function _getLink (options) {
  return _globals.baseUrl + '1/project-groups/' + options.projetGroupId + '/projects?'
    + queryString.stringify({
    api_key: _globals.apiKey,
    timestamp: options.hash.timestamp,
    dev_hash: options.hash.devHash
  });
}

module.exports = getListOfProjectsInGroup;
