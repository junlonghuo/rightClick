/*!build time : 2014-05-28 3:12:59 PM*/
KISSY.add("gallery/rightClick/1.0/index",function(a,b,c,d,e){function f(a){var b=this;f.superclass.constructor.call(b,a)}var g=b.all;return b.prototype.rightClick=b.rightClick||function(b,c){var d=a.isFunction(b)?b:b&&b.callback||function(){},b=a.merge({stopContextmenu:!0,preventDefault:!1,stopPropagation:!1,callback:d},b);g(this).each(function(a){var d=g(a);b.stopContextmenu&&d.on("contextmenu",function(){return!1}),d.on("mouseup",function(a){(a.which?3==a.which:2==a.button)&&(b.preventDefault&&event.preventDefault(),b.stopPropagation&&event.stopPropagation(),b.callback.apply(c||this,[event])===!1&&(event.preventDefault(),event.stopPropagation()))})})},a.extend(f,c,{_plugins:[],RIGHTMENU_TPL:'<div class="rightMenu" style="display:none;position: absolute; float: left;">                          <ul>                          {@each items as item}                            <li class="rm_sub rm_${item.key}" data-action="${item.key}">$${item.desc}                            </li>                          {@/each}                          </ul>                        </div>',initializer:function(){var a=this;a._initPlugin(),a._initContextMenu(),g(this.get("node")).rightClick(a.showContextMenu,a),a._initEvent()},_initPlugin:function(){var b=this,c=this.get("plugins");if(c){var d=[];b._plugins=[],a.each(c,function(c,e){c.desc&&e&&-1==a.indexOf(e,d)?(d.push(e),b._plugins.push({key:e,desc:c.desc,fn:c.fn||function(){}})):a.log("\u63d2\u4ef6key\u63cf\u8ff0\u4e0d\u80fd\u4e3a\u7a7a,\u6216\u8005\u5df2\u7ecf\u5b58\u5728")}),d=null}},_initContextMenu:function(){if(this._plugins&&this._plugins.length){var b=e(this.RIGHTMENU_TPL,{items:this._plugins});this._contextMentContainer&&this._contextMentContainer.remove(),this._contextMentContainer=g(b),this._contextMentContainer.detach("click"),this._contextMentContainer.on("click",function(b){var c=g(b.target),d=this.get("plugins"),e=c.attr("data-action")||g(a.DOM.parent(c,"li[data-action]")).attr("data-action");return d[e].fn&&d[e].fn(g(this.get("node")),b)},this),g("body").append(this._contextMentContainer)}},_initEvent:function(){this.on("afterPluginsChange",function(){this._initPlugin(),this._initContextMenu()},this),g("body").on("click",function(){this.hideContextMenu()},this)},_positionRightMenu:function(b){var c,d,e=(g(this.get("node")),a.one(this.get("container"))),f=b.pageX||b.x,h=b.pageY||b.y,i=this.get("offset").x,j=this.get("offset").y;e=e||g("body"),(this._contextMentContainer.width()>e.width()||this._contextMentContainer.height()>e.height())&&(e=g("body"));var k=e.offset().top+e.height()-h,l=e.offset().left+e.width()-f;d=k<this._contextMentContainer.height()+j?h-j-this._contextMentContainer.height():h+j,c=l<this._contextMentContainer.width()+i?f-2*i-this._contextMentContainer.width():f+i,a.DOM.css(this._contextMentContainer,{left:c,top:d})},addPlugin:function(b,c,d){var e=a.clone(this.get("plugins"))||{};e[b]={desc:c,fn:d},this.set("plugins",e)},showContextMenu:function(a){this._positionRightMenu(a),this._contextMentContainer.show()},hideContextMenu:function(){a.DOM.css(this._contextMentContainer,{left:"0px",top:"0px"}),this._contextMentContainer.hide()}},{ATTRS:{node:{value:""},container:{value:""},plugins:{value:{}},offset:{value:{x:10,y:10}}}}),f},{requires:["node","base","event","gallery/juicer/1.3/index"]}),KISSY.add("gallery/rightClick/1.0/mini",function(a,b){return b},{requires:["./index"]});