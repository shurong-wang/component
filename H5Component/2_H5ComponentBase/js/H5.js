/* 内容管理对象 */
/**
 *  添加 Page 到 H5 Object
 *  添加 Component 到 Page
 *  链式调用
 */

var H5 = function () {
    // 新建 h5 页容器，并插入 body
    this.id = ('h5_' + Math.random()).replace('.', '_');
    this.el = $('<div class="h5" id="' + this.id + '">');
    this.el.hide(); // 先隐藏，最后通过 loader 显示
    $('body').append(this.el);

    // 页面列表
    this.page = [];

    /**
     * 新增一个页
     * @param {string} name 组件的名称，会加入到ClassName中
     * @param {string} text 页内的默认文本
     * @return {H5} [description] H5对象，可以重复使用H5对象支持的方法
     */
    this.addPage = function (name, text) {
        // 创建新页面
        var page = $('<div class="h5_page section">');
        if (name != undefined) {
            page.addClass('h5_page_' + name);
        }
        if (text != undefined) {
            page.text(text);
        }
        // 插入到 h5 页容器
        this.el.append(page);
        // 入栈页面列表
        this.page.push(page);

        return this;
    }

    /*新增一个组件*/
    this.addComponent = function (name, cfg) {
        var cfg = cfg || {};
        cfg = $.extend({
            type: 'base'
        }, cfg);
        var component; // 定义一个变量，存储组件元素
        var page = this.page.slice(-1)[0];

        switch (cfg.type) {
            case 'base':
                component = new H5ComponentBase(name, cfg);
                break;

            default:
        }
        page.append(component);

        return this;
    }

    /* H5对象初始化呈现，应用 fullpage */
    this.loader = function () {
        this.el.fullpage({
            onLeave: function (index, nextIndex, direction) {
                // debugger;
                $(this).find('.h5_component').trigger('onLeave');
            },
            afterLoad: function (anchorLink, index) {
                // debugger;
                $(this).find('.h5_component').trigger('onLoad');
            }
        });

        // 页面刷新时，触发载入动画
        this.page[0].find('.h5_component').trigger('onLoad');

        // 显示 h5 页容器
        this.el.show();
    }

    return this;
}