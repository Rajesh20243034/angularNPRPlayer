<!doctype html>
<html>
  <head>
    
  </head>
  <body>
    <div ng-app="myApp">
      <div ng-controller="PlayerController">
        <!--<button ng-click="play()" class="button" ng-show="!playing">Play</button>
        <button ng-click="stop()" class="button alert" ng-show="playing">Stop</button>
        Playing audio: <b>{{ playing }}</b> -->
        <ul id="programs_list" class="">
          <li ng-repeat="program in programs" ng-click="play(program)">
            <span class="large-12">{{ program.title.$text }}</span>
          </li>
        </ul>
      </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
  </body>
</html>