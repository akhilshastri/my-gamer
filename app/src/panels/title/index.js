/**
 * Created by Akhil on 17-10-2016.
 */
    //model
import m from 'm';

var Page = {
    list: function() {
        return [{
            "url":'www.google.com', "title":"google"
        }];
    }
};

export default {
    //controller
    controller() {
        var pages = Page.list();
        return {
            pages: pages,
            rotate: function() {
                pages.push(pages.shift());
            }
        }
    },

    //view
    view: function(ctrl) {
        return m("div", [
            ctrl.pages.map(function(page) {
                return m("a", {href: page.url}, page.title);
            }),
            m("button", {onclick: ctrl.rotate}, "Rotate links")
        ]);
    }
};