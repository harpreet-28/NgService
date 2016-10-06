var MainController = function MainController(UserService) {

    var self = this;
    self.newName = '';
    self.newDate = '';
    self.newAssigned = '';

    self.addTask = function addTask() {
        self.taskTraker.unshift({
            name: self.newName,
            date: self.newDate,
            assigned: self.newAssigned
        });
        self.newName = "";
        self.newDate = "";
        self.newAssigned = "";
    };

    self.taskTraker = [];

    UserService
        .getTask()
        .then(function(response) {
            self.taskTraker = response;
        });
};


angular
    .module('app')
    .controller('MainController', MainController);
