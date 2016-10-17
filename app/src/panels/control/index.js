/**
 * Created by Akhil on 17-10-2016.
 */
import m from 'm';

var links = [
    {title: "item 1", url: "/item1"},
    {title: "item 2", url: "/item2"},
    {title: "item 3", url: "/item3"}
];

export default [
    m("ul.nav",
        links.map(function(link) {
            return m("li",
                m("a", {href: link.url}, link.title)
            );
        })
    )
] ;