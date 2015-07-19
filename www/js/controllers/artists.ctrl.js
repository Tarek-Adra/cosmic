// Artists
angular.module('cosmic.controllers').controller('ArtistsCtrl', function($scope,$q, cosmicDB) {
    cosmicDB.getArtists().then(function(artists){
        $scope.artists=artists;
    });
    $scope.doRefresh =function(){
        cosmicDB.getArtists().then(function(artists){
            $scope.artists=artists;
        });

    };
});

