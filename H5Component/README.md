H5 营销页组件
---

### 1. 内容组织类 `H5.js`

- 职责
    - 组织 H5 内容结构 (添加页面, 添加组件; 链式调用)
    - 设置 H5 切换效果 (通过 `fullpage.js` 实现, 页面切换时，通知页面内所有组件)

- 方法
    - 加载页面 `addPage`
    - 加载组件 `addComponenet`
    - 展示所有页面 `loader`

### 2. 图文组件基础类 `H5ComponentBase.js`

- 职责
    - 输出 DOM, 内容可以是图片或文本
    - 设置 DOM 样式

- 需要监听当前页载入和移出事件
    - 当前页载入 `onLoad`
    - 当前页移出 `onLeave`


### 3. 图表组件类 `H5Component[X].js`

- 职责
    - 在 H5ComponentBase 基础上插入 `DOM` 结构或 `Canvas` 图形

- 组件
    - `H5ComponentBaseBar.js`
    - `H5ComponentBasePie.js`
    - `...`

- 事件
    -  `onLoad`, `onLeave`
    -  图表组件自身的生长动画


### 4. 开发笔记

1. > [前期准备](https://blog.csdn.net/lovejulyer/article/details/51866428)

2. > [JS 类开发](https://blog.csdn.net/lovejulyer/article/details/51901455)

3. > [散点图组件开发](https://blog.csdn.net/lovejulyer/article/details/51916020)

4. > [柱状图组件开发](https://blog.csdn.net/lovejulyer/article/details/51919166)

5. > [折线图组件开发](https://blog.csdn.net/lovejulyer/article/details/51924000)

6. > [雷达图组件开发](https://blog.csdn.net/lovejulyer/article/details/51925317)

7. > [饼图和环图组件开发](https://blog.csdn.net/lovejulyer/article/details/51925513)







