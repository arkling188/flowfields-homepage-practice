# Flowfields 企业官网首页复刻练习

> 一个使用原生 HTML、CSS 和 JavaScript 完成的工业泵企业官网首页还原练习。

本项目根据视觉参考图完成单页企业官网首页的布局与交互实现，重点练习大屏页面结构、图片与文字的视觉层级、卡片交互状态，以及静态页面的基础 JavaScript 交互。

## 在线预览

- GitHub Pages（部署后）：[https://arkling188.github.io/flowfields-homepage-practice/](https://arkling188.github.io/flowfields-homepage-practice/)
- GitHub 仓库：[arkling188/flowfields-homepage-practice](https://github.com/arkling188/flowfields-homepage-practice)


## 页面展示

![Flowfields 设计图](./src/assets/images/design.png)

## 项目内容

- Hero 首屏：全屏工业场景背景、品牌标识、导航与核心文案。
- About：左右分栏的信息展示、资质标签与视觉图片。
- Products：三张产品卡片；点击后切换卡片的横线、角标与箭头激活状态。
- Why Choose Us：背景图与服务优势标签。
- News：新闻资讯卡片布局。
- Contact：双列表单、上传提示和提交交互。
- Footer：联系信息、快捷链接与产品导航。

## 已实现的交互

- 导航点击后切换当前激活状态，并定位至页面对应区块。
- 语言菜单可展开、收起，并切换当前显示语言。
- 产品卡片与页面中的圆形箭头支持点击激活效果。
- 服务优势标签支持选中状态切换。
- 联系表单阻止默认提交行为并在提交后重置，便于静态页面演示。

## 技术栈

- HTML5：使用语义化标签组织页面区块、导航与表单。
- CSS3：使用 Flexbox、Grid、伪元素、过渡动画和自定义 CSS 变量完成页面布局与视觉细节。
- JavaScript（原生）：处理导航状态、语言下拉、卡片激活和表单交互。

## 本地运行

1. 克隆或下载项目。
2. 使用 VS Code 的 **Live Server** 打开 `src/index.html`；或直接在浏览器中打开该文件。
3. 如需获得更接近线上环境的访问体验，建议通过本地静态服务器启动。

## 目录结构

```text
flowfields-home/
├── src/
│   ├── assets/
│   │   ├── icons/             # 图标资源
│   │   └── images/            # 页面图片与 SVG 资源
│   ├── scripts/
│   │   └── main.js            # 页面交互逻辑
│   ├── styles/
│   │   └── main.css           # 页面样式
│   └── index.html             # 页面入口
├── public/                    # 可公开访问的静态资源目录
└── README.md
```

