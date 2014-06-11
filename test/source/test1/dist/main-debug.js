define("test/test1/0.0.1/main-debug", [ "jquery-debug", "./handleElement-debug" ], function(require, exports, module) {
    // 引入jquery
    var $ = require("jquery-debug");
    console.info($);
    var domElement = {
        div1: $("#div1")
    };
    var divContext = domElement.div1.html();
    alert(divContext);
    // 引入操作dom元素js模块
    var Dom = require("./handleElement-debug");
    Dom.adddDomContext("div1", "这里我使用jquery选择器");
});

/**
 * 操作 DOM元素 模块
 */
define("test/test1/0.0.1/handleElement-debug", [ "jquery-debug" ], function(require, exports, module) {
    // 引入jquery
    var $ = require("jquery-debug");
    var DOMElement = {
        // getDom 获取Dom元素的jquery对象
        getDom: function(id) {
            return $("#" + id);
        },
        // addDomContext 给Dom元素中添加内容
        adddDomContext: function(id, context) {
            this.getDom(id).html(context);
        }
    };
    module.exports = DOMElement;
});
