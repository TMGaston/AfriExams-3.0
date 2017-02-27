angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.homeOLevel', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homeOLevel.html',
        controller: 'homeOLevelCtrl'
      }
    }
  })

  .state('homeALevel', {
    url: '/page18',
    templateUrl: 'templates/homeALevel.html',
    controller: 'homeALevelCtrl'
  })

  .state('menu.pastQuestionsAndAnswers', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pastQuestionsAndAnswers.html',
        controller: 'pastQuestionsAndAnswersCtrl'
      }
    }
  })

  .state('menu.textBooksAndPamphelts', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/textBooksAndPamphelts.html',
        controller: 'textBooksAndPampheltsCtrl'
      }
    }
  })

  .state('menu.talkToATeacher', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/talkToATeacher.html',
        controller: 'talkToATeacherCtrl'
      }
    }
  })

  .state('menu.aboutTheGCEBoard', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutTheGCEBoard.html',
        controller: 'aboutTheGCEBoardCtrl'
      }
    }
  })

  .state('menu.schoolsAndColleges', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schoolsAndColleges.html',
        controller: 'schoolsAndCollegesCtrl'
      }
    }
  })

  .state('menu.aboutUs', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('page9', {
    url: '/page10',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('menu.pastQuestionsInAMaths', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pastQuestionsInAMaths.html',
        controller: 'pastQuestionsInAMathsCtrl'
      }
    }
  })

  .state('menu.june1995Paper2', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/june1995Paper2.html',
        controller: 'june1995Paper2Ctrl'
      }
    }
  })

  .state('menu.examTips', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/examTips.html',
        controller: 'examTipsCtrl'
      }
    }
  })

  .state('welcome', {
    url: '/page11',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('afriExams', {
    url: '/page12',
    templateUrl: 'templates/afriExams.html',
    controller: 'afriExamsCtrl'
  })

  .state('afriExams2', {
    url: '/page15',
    templateUrl: 'templates/afriExams2.html',
    controller: 'afriExams2Ctrl'
  })

  .state('menu.personalProfileAndBio', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/personalProfileAndBio.html',
        controller: 'personalProfileAndBioCtrl'
      }
    }
  })

  .state('menu.biologyTextBooksAndPamphlets', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/biologyTextBooksAndPamphlets.html',
        controller: 'biologyTextBooksAndPamphletsCtrl'
      }
    }
  })

  .state('menu.aMathsTextBooksAndPamphlets', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aMathsTextBooksAndPamphlets.html',
        controller: 'aMathsTextBooksAndPamphletsCtrl'
      }
    }
  })

  .state('menu.june1996Paper2', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/june1996Paper2.html',
        controller: 'june1996Paper2Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page10')

  

});