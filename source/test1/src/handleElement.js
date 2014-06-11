/**
 * 操作 DOM元素 模块
 */
define(function(require, exports, module) {

	// 引入jquery
	var $ = require("jquery");

	var DOMElement = {
		// getDom 获取Dom元素的jquery对象
		getDom : function(id) {
			return $("#" + id);
		},

		// addDomContext 给Dom元素中添加内容
		adddDomContext : function(id, context) {
			this.getDom(id).html(context);
		}

	}

	module.exports = DOMElement;

});