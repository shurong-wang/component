/* 基本图文组件对象 */

var H5ComponentBase = function (name, cfg) {
    var cfg = cfg || {};

    // 组件 id - 随机唯一
    var id = ("h5_c_" + Math.random()).replace(".", "_");
    // 组件类型
    var ctype = " h5_component_" + cfg.type;
    // 组件名称
    var cname = " h5_component_name_" + name;
    // 组件容器
    var component = $('<div class="h5_component ' + ctype + cname + '" id="' + id + '">');

    cfg.text && component.text(cfg.text);
    cfg.width && component.width(cfg.width / 2);
    cfg.height && component.height(cfg.height / 2);

    cfg.css && component.css(cfg.css);
    cfg.bg && component.css("backgroundImage", "url(" + cfg.bg + ")");

    if (cfg.center === true) {
        component.css({
            marginLeft: cfg.width / 4 * -1 + "px",
            left: "50%"
        });
    }
    //  其他参数设置
    if (typeof cfg.onclick === "function") {
        component.on("click", cfg.onclick);
    }

    // 组件载入
    component.on("onLoad", function () {
        setTimeout(function () {
            component
                .addClass(ctype + "_load")
                .removeClass(ctype + "_leave");
            // 载入动画
            cfg.animateIn && component.animate(cfg.animateIn);
        }, cfg.delay || 0);
        return false;
    });

    // 组件移出
    component.on("onLeave", function () {
        setTimeout(function () {
            component
                .addClass(ctype + "_leave")
                .removeClass(ctype + "_load");
            // 移出动画
            cfg.animateOut && component.animate(cfg.animateOut);
        }, cfg.delay || 0);
        return false;
    });

    return component;
};