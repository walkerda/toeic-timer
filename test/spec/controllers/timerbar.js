
describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('toeicTimerApp'));

    var TimerCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TimerCtrl = $controller('TimerCtrl', {
            $scope: scope
        });
    }));

    it('should print message on page', function () {
        expect(scope.message).toBe("Timerbar goes here!");
    });
});