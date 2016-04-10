(function() {
  'use strict';

  angular
    .module('digglyFeProto')
    .directive('notifyService', notifyService);

  /** @ngInject */
  function notifyService ($timeout, $rootScope) {
    var directive = {
      restrict: 'EA',
      scope: {},
      link: function (scope, element, attrs) {
        scope.state = false;

        $rootScope.$on('notify:service', function (event, message, exists) {
          scope.message = message;
          scope.state = true;
          scope.exists = (exists) ? true : false;

          $timeout(function() {
            scope.state = false;
          }, 2500);
        });
      },
      template: '<div class="notify__message" ng-class="{show: state, error: exists}">{{ message }}</div>'
    };

    return directive;
  }
})();
