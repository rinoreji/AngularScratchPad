angular.module('company-module', [])
  .controller('CompanyController', function($scope,$http) {
    var todoList = this;
	var profile = this;
	
	profile.CompanyAthority = false;
	profile.FullName = "";
	profile.Streetname = "";
	profile.StreetNumber = "";
	profile.Zipcode = "";
	profile.Town = "";
	profile.Country = "";
	
	profile.submit = function(){
			var data = $.param({
                fName: $scope.profile.FullName,
                sName: $scope.profile.Streetname,
				sNumber:$scope.profile.StreetNumber,
				zCode:$scope.profile.Zipcode,
				town:$scope.profile.Town,
				country:$scope.profile.Country,
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
console.log('data to submit:', data, config);
            $http.post('/remote/server', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
	};
	
	$scope.profile = profile;
	
	
  });