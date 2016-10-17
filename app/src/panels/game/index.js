/**
 * Created by edisoni on 07.05.16.
 */
import MainScreen from './mainScene' ;
import gameResources from './res';

cc.game.onStart = function(){
    //load resources
    cc.LoaderScene.preload(gameResources, function () {   /* pre load resources*/
        cc.director.runScene(new MainScreen());
    }, this);
};

export default cc.game;


