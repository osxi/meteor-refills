Package.describe({
  name: 'osxi:refills',
  version: '0.1.0',
  summary: 'Components and patterns built with Bourbon and Neat - Packaged for Meteor',
  git: 'https://github.com/osxi/meteor-refills.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'fourseven:scss@0.9.5',
    'wolves:bourbon',
    'wolves:neat',
    'wolves:bitters',
    'jquery@1.0.0'
  ], ['client', 'server']);
  api.addFiles('refills.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('osxi:refills');
  api.addFiles('refills-tests.js');
});
