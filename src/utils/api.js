import wepy from 'wepy';
import {ImageAPIConfig,YoudaoTranslateConfig} from '../utils/config';
const wxRequest = async (params = {}, url) => {
  wepy.showToast({
    title: '加载中',
    icon: 'loading'
  });

  let res = await wepy.request({
    url: url,
    header:params.header || {},
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
//获取Access Token
const getAccessToken = (params) => wxRequest(params, `https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${ImageAPIConfig.ApiKey}&client_secret=${ImageAPIConfig.SecretKey}`);
//获取图片识别文字
const getImageToText = (params) => wxRequest(params, `https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic`);

//有道翻译API
const getTranslate = (params) => wxRequest(params, `https://openapi.youdao.com/api?q=${params.q}&appKey=${encodeURI(YoudaoTranslateConfig.appKey)}&salt=${params.salt}&sign=${params.sign}&from=${params.from}&to=${params.to}`);
//获取每日一句2018-03-03
const getEveryDayWord = (params) =>wxRequest(params,`https://open.iciba.com/dsapi`);

module.exports = {
  getInterface,
  getWordMean,
  getTranslate,
  getAccessToken,
  getImageToText,
  getEveryDayWord
}
