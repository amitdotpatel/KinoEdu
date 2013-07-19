/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/9/13
 * Time: 7:20 PM
 * To change this template use File | Settings | File Templates.
 */

define(['bower_components/aura/lib/aura'], function(Aura) {
    Aura({
        sources: {
            default: './widgets'
        }
    })
        .use('extensions/aura-backbone')
        .use('extensions/aura-localstorage')
        .use('extensions/aura-handlebars')
        .use('extensions/aura-ajax')
        .use('extensions/aura-storage')
        .use('extensions/aura-app-security')
        .use('extensions/aura-router')
        .start({ widgets: 'body' }).then(function() {
            console.warn('Aura started...');
        });
});