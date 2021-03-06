// 7. Create items.component.js file and create a component called items that shows
// all of the menu items for a particular category.
(function() {
    'use strict';
    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/menu/templates/items.template.html',
            bindings: {
                list: '<'
            }
        });
})();
// 8. The categories and the items components should NOT directly use the MenuDataService
// to fetch their own data. Instead, the proper data should be simply passed into the
// component. (Hint: use the one-way < binding).
