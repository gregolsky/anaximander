(function () {

    angular.module('anaximander')
    .factory('Map', [ 'md5', 'guard', defineMap ]);

    function defineMap(md5, guard) {
        Map.prototype.data = data;
        return Map;

        function Map(data) {
            validate(data);

            this.id = data.id || null;
            this.passwordHash = md5.createHash(data.password);
            this.name = data.name;
            this.imageUrl = data.imageUrl;
            this.description = data.description;
            this.ts = new Date().getTime();
        }

        function data() {
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
