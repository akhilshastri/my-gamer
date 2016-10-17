/**
 * Created by Akhil on 18-10-2016.
 */

export  default cc.Scene.extend({
    onEnter:function () {
        this._super();

        let size = cc.winSize;
        let self = this;

        var createSprite = () => {
            var sprite = new cc.Sprite("res/HelloWorld.png");
            sprite.setPosition(Math.random() * size.width, Math.random() * size.height);
            sprite.setScale(0.3);
            this.addChild(sprite, 0);
        };

        for(let i = 0; i < 50; i ++) {
            createSprite();
        }


        var sprite = new cc.Sprite ( "res/HelloWorld.png" ) ;
        sprite.setScale(0.3);
        sprite.attr({
            x: 100,
            y: 200,
            anchorX: 0,
            anchorY: 0
        });
        this.addChild ( sprite ) ;

        sprite.runAction(new cc.MoveBy(1/5, cc.p(100, 10)));


        var label = cc.LabelTTF.create("Hello World2", "Arial", 40);
        label.setPosition(size.width / 2, size.height / 2);
        this.addChild(label, 1);
    }
});



