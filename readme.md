##  wechat-weapp-iciba

>微信小程序基于wepy框架开发-金山词霸

### 项目使用
- 克隆本项目
- 进入目录安装依赖包
- 启动服务
	git clone https://github.com/Anonlyy/wx_iciba.git
	cd wx_iciba
	npm install
	npm start
	
#### 命令说明
	// 开发阶段，监听src目录下文件变动情况，即使编译并复制到dist文件夹
	npm start 
	// 打包编译项目
	npm run build



### 感谢与支持
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

-  Jan 30, 2018
    - 完成主页基本样式布局
    - 实现查词联想功能
    - 完成翻译页面基本样式布局
-  Feb 5, 2018
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
- 正在更新中....
