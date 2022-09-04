System.register("chunks:///_virtual/birdsControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,e,n,i,s,r,a,c,d,l;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator,i=t.Node,s=t.Tween,r=t.v2,a=t.tween,c=t.Vec3,d=t.Animation,l=t.Component}],execute:function(){var h;e._RF.push({},"d2f49KjOFJHpqcQO0i5q81v","birdsControl",void 0);var p=n.ccclass;n.property,t("birdsControl",p("birdsControl")(h=function(t){function e(){for(var o,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return(o=t.call.apply(t,[this].concat(n))||this).hp=1,o.targetPos=null,o.speed=150,o.dieCallBack=void 0,o.addScoreCallBack=void 0,o}o(e,t);var n=e.prototype;return n.start=function(){var t=this;this.fly(),this.node.on(i.EventType.MOUSE_DOWN,(function(){t.hp>0&&(t.hp--,s.stopAllByTarget(t.node),t.die())}))},n.update=function(t){},n.fly=function(){var t=this;this.targetPos=r(220*Math.random()-110,200),this.targetPos.x>this.node.position.x&&this.node.setScale(-1,this.node.scale.y);var o=(this.targetPos.y-this.node.position.y)/this.speed,e=a(this.node).to(o,{position:new c(this.targetPos.x,this.targetPos.y)}),n=a(this.node).call((function(){t.dieCallBack()}));a(this.node).sequence(e,n).start()},n.die=function(){var t=this;this.node.getComponent(d).play("birdDie");var o=a(this.node).to(this.node.position.y/this.speed,{position:new c(this.node.position.x,0)}),e=a(this.node).call((function(){t.node.destroy()}));a(this.node).sequence(o,e).start(),this.addScoreCallBack()},e}(l))||h);e._RF.pop()}}}));

System.register("chunks:///_virtual/birdsManagerControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./birdsControl.ts"],(function(e){"use strict";var r,t,n,i,o,a,l,c,s,u,b,d;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.Prefab,c=e.Label,s=e.Node,u=e.instantiate,b=e.Component},function(e){d=e.birdsControl}],execute:function(){var p,f,g,m,y,h,C,v,P,z,B;o._RF.push({},"3e231KC6jlJr7DXlyPo48nd","birdsManagerControl",void 0);var L=a.ccclass,M=a.property;e("birdsManagerControl",(p=L("birdsManagerControl"),f=M(l),g=M(c),m=M(Number),y=M(s),p((v=r((C=function(e){function r(){for(var r,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return r=e.call.apply(e,[this].concat(o))||this,n(r,"birdPre",v,i(r)),n(r,"scoreLabel",P,i(r)),n(r,"time",z,i(r)),r.score=0,n(r,"gameOverBox",B,i(r)),r}t(r,e);var o=r.prototype;return o.start=function(){var e=this;this.schedule((function(){var r=u(e.birdPre);r.setParent(e.node),r.setPosition(220*Math.random()-110,e.node.position.y),r.getComponent(d).addScoreCallBack=function(){e.score+=1,e.scoreLabel.string=e.score.toString()},r.getComponent(d).dieCallBack=function(){e.node.destroyAllChildren(),e.unscheduleAllCallbacks(),e.gameOverBox.active=!0}}),this.time)},o.update=function(e){},r}(b)).prototype,"birdPre",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=r(C.prototype,"scoreLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=r(C.prototype,"time",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),B=r(C.prototype,"gameOverBox",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=C))||h));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./birdsControl.ts","./birdsManagerControl.ts","./returnControl.ts","./startControl.ts"],(function(){"use strict";return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/returnControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var r,n,o,e,u;return{setters:[function(t){r=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,e=t.director,u=t.Component}],execute:function(){var c;n._RF.push({},"bd1d8Di26xDUrqA1B1HGKMb","returnControl",void 0);var i=o.ccclass;o.property,t("returnControl",i("returnControl")(c=function(t){function n(){return t.apply(this,arguments)||this}r(n,t);var o=n.prototype;return o.start=function(){},o.update=function(t){},o.returnStart=function(){e.loadScene("start")},n}(u))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/startControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var r,o,n,e,s;return{setters:[function(t){r=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,e=t.director,s=t.Component}],execute:function(){var c;o._RF.push({},"95b39PlgyBHOIe3pCzBq7XZ","startControl",void 0);var i=n.ccclass;n.property,t("startControl",i("startControl")(c=function(t){function o(){return t.apply(this,arguments)||this}r(o,t);var n=o.prototype;return n.start=function(){},n.update=function(t){},n.startGame=function(){e.loadScene("hitBirds")},o}(s))||c);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});