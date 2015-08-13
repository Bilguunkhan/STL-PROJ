import Ember from 'ember';

export default Ember.Controller.extend({
    isClicked: false,
    actions: {
        search: function() {
            this.set('isClicked', true);
            var theNumberEndings  = this.get('theNumberEndings');
            var theNumberInitials = this.get('theNumberInitials');
            var tempResultsArr = [];
            var tempSimiliarArr= [];
            this.get('model').forEach(function(item) {
                var title = item.get('title');
                if (title.endsWith(theNumberEndings) && title.startsWith(theNumberInitials)) {
                    tempResultsArr.pushObject(item);
                }
                if (title.endsWith(theNumberEndings) || title.startsWith(theNumberInitials)) {
                    tempSimiliarArr.pushObject(item);
                } 
            });
            this.set('results', tempResultsArr);
            this.set('similiar', tempSimiliarArr);
        }
    }
});
