var UserService = function UserService($http) {

    var self = this;
    var API = '../data/tasks.json';
    var getTask = function getTask(){
        return $http
            .get('../data/tasks.json')
            .then(function(response) {
                return response.data;
            }, function(reason) {
                //error
            })
        };

 

    return {
        getTask: getTask
    };

   };
        angular
            .module('app')
            .factory('UserService', UserService);
