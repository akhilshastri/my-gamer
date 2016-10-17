/**
 * Created by Akhil on 18-10-2016.
 */

var res = {
    hello_world_png : "res/HelloWorld.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

export default g_resources;
