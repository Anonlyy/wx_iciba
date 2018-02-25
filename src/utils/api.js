import wepy from 'wepy';
const wxRequest = async (params = {}, url) => {
  wepy.showToast({
    title: '加载中',
    icon: 'loading'
  });

  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
  });
  // console.log(url);
  wepy.hideToast();
  return res;
};
//联想
const getInterface = (params) => wxRequest(params, `https://dict-mobile.iciba.com/interface/index.php?c=word&m=getsuggest&nums=5&client=6&is_need_mean=1&word=${params.word}`);
//释义（基础释义,英英词典,双语例句,网络释义,同义词,反义词,词组搭配,例句）
const getWordMean = (params) => wxRequest(params, `https://www.iciba.com/index.php?a=getWordMean&c=search&list=1,4,8,9,12,13,14,3005&word=${params.word}`);
//翻译
const getTranslate = (params) => wxRequest(params, `https://fy.iciba.com/ajax.php?a=fy&f=auto&t=auto&w=${params.content}`);


module.exports = {
  getInterface,
  getWordMean,
  getTranslate
}
