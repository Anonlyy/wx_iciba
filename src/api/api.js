import wepy from 'wepy';
import Toast from 'wepy-com-toast';
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
const getInterface = (params) => wxRequest(params, 'https://dict-mobile.iciba.com/interface/index.php?c=word&m=getsuggest&nums=10&client=6&is_need_mean=1&word=h');
const getWordMean = (params) => wxRequest(params, 'https://www.iciba.com/index.php?a=getWordMean&c=search&list=1%2C2%2C3%2C4%2C5%2C8%2C9%2C10%2C12%2C13%2C14%2C18%2C21%2C22%2C3003%2C3005&word=hello');
const getTranslate = (params) => wxRequest(params, 'https://fy.iciba.com/ajax.php?a=fy&f=auto&t=auto&w=hello%20world');


module.exports = {
  getInterface,
  getWordMean,
  getTranslate
}
