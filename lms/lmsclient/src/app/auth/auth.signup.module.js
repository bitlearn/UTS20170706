(function () {
    'use strict';
  
    angular.module('BlurAdmin.auth.signup', [])
      .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
        .state('reg', {
          url: '/reg',
          title: 'reg',
          templateUrl: 'reg.html',
          controller: 'SignUpPageCtrl',
        //   sidebarMeta: {
        //     icon: 'ion-android-home',
        //     order: 0,
        //   },
        });
    }
  
  })();