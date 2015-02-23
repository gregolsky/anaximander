(function () {

    angular.module('anaximander')
    .factory('Map', [ 'guard', defineMap ]);

    function defineMap(guard) {
        return Map;

        function Map(data) {
            validate(data);

            this.id = data.id || null;
            this.passwordHash = CryptoJS.SHA3(data.password, { outputLength: 256 });
            this.name = data.name;
            this.imageUrl = data.imageUrl;
            this.description = data.description;
        }

        Map.prototype.data = function () { 
            var result = _.extend(this);
            delete result.id;
            return result;
        }

        function validate(data) {
            guard(data.password);
            guard(data.password === data.repeatPassword);
            guard(data.name);
            guard(data.imageUrl);
            guard(data.description);
            guard(data.name.length < 30);
            guard(data.description.length < 500);
        }
    }

})()
