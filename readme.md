##  wechat-weapp-iciba

>微信小程序基于wepy框架开发-金山词霸

### 项目运行与预览

#### 项目运行

	//克隆本项目
	git clone https://github.com/Anonlyy/wx_iciba.git
	//进入目录并安装依赖包
	cd wx_iciba
	npm install
	//启动项目(生成dist文件夹)
	npm run dev

#### 项目预览

1. 下载微信开发工具
2. 导入项目(只选中dist文件夹,而不是整个项目目录)
3. [配置微信开发工具](https://tencent.github.io/wepy/document.html#/?id=%e5%8f%82%e8%80%83%e5%bb%ba%e8%ae%ae)(**非常重要,不配置会导致报错**)
![](http://p53ff6x0c.bkt.clouddn.com/18-3-7/62394854.jpg)
4. 预览项目
	


### 感谢与支持
- **wepy**:https://tencent.github.io/wepy/
- **金山词典API**:https://github.com/jokermonn/-Api/blob/master/KingsoftDic.md
- **有道智云翻译 API**:http://ai.youdao.com/docs/doc-trans-api.s#p01
- **百度文字识别OCR API**:https://cloud.baidu.com/doc/OCR/OCR-API.html#.E8.AF.B7.E6.B1.82.E8.AF.B4.E6.98.8E
- **每日一句API**:http://open.iciba.com/?c=api



### 开发中的功能
- 每日一句
- 用户上传图片翻译功能
- 界面优化

---

### 更新日志

- Jan 30, 2018
    - 完成主页基本样式布局
    - 实现查词联想功能
    - 完成翻译页面基本样式布局
- Feb 5, 2018
    - 完成释义具体数据的渲染 
    - 完成音频组件播放功能
    - 增加折叠面板展开特效 
	- 增加回到顶部组件,并增加动画
- Feb 12, 2018
	- 完善诸多细节,将主页部分代码进行抽离,形成各自的组件
	- 增加再次修改单词请求释义的情况,并新增释义组件
- Mar 2, 2018
	- 翻译界面的进一步样式编写,以及翻译API更改(有道)
	- 完成文本翻译功能
- Mar 6, 2018
	- 修复MD5加密问题导致的API请求参数错误的bug问题
	- 全局增加请求错误和加载中的toast提示
	- 增加选择源翻译语言和翻译后语言的功能 
- Mar 7, 2018
	- 增加上传图片LeanCloud存储并返回网络图片url功能
	- 增加上传图片文字识别功能,识别成功返回识别结果
	- 显示识别结果并翻译的功能,还可以复制识别结果
- 正在更新中....
