
'use strict';

global.rootRequire = function (name) {
  return require(__dirname + '/' + name);
};

module.exports = {
  getListOfProjectGroups: rootRequire('lib/getListOfProjectGroups.js'),
  getListOfProjectsInGroup: rootRequire('lib/getListOfProjectsInGroup.js'),
  getFile: rootRequire('lib/getFile.js'),
  getMultilingualFile: rootRequire('lib/getMultilingualFile.js'),
  postFile: rootRequire('lib/postFile.js')
};
