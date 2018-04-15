define(['jquery'], function ($) {
	function Widget() {
		this.boudingBox = null; //属性：最外层容器

		// 将 handlers 从 Widget 构造函数中移除，否则会造成内存泄露
		// this.handlers = {};
		// 在 render 函数中，bindUI 之前，显式重置 handlers 对象，进行回收内存
	}

	Widget.prototype = {

		on: function (type, handler) {
			if (typeof this.handlers[type] == 'undefined') {
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
			return this;
		},

		fire: function (type, data) {
			if (this.handlers[type] instanceof Array) {
				var handlers = this.handlers[type];
				for (var i = 0, len = handlers.length; i < len; i++) {
					handlers[i](data);
				}
			};
		},

		// 接口：需要子类继承和实现
		renderUI: function () {}, // 接口：添加 dom节点
		bindUI: function () {}, // 接口：监听事件
		syncUI: function () {}, // 接口：初始化组件属性
		destructor: function () {}, // 接口：销毁前的处理函数

		//方法：渲染组件 - 统一封装调用渲染相关所有方法
		render: function (container) {
			this.renderUI();
			this.handlers = {}; // 重置 handlers 对象，回收内存
			this.bindUI();
			this.syncUI();
			$(container || document.body).append(this.boudingBox);
		},

		//方法：销毁组件 -  统一封装调用销毁相关所有方法
		destroy: function () {
			this.destructor();
			this.boudingBox.off();	// 取消事件绑定
			this.boudingBox.remove();	// 移除 dom 节点
		}

	}

	return Widget;
});