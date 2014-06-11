define(function(require, exports, module) {

	// 引入jquery
	var $ = require("jquery");

	console.info($);
	var domElement = {
		div1 : $("#div1")
	};

	var divContext = domElement.div1.html();
	alert(divContext);

	// 引入操作dom元素js模块
	var Dom = require("./handleElement.js");
	Dom.adddDomContext('div1', "这里我使用jquery选择器");

});