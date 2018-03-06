/**
 * Created by Xposean on 2018-1-31.
 */
module.exports = {
    exchangeFilter: {
        "word_pl": {
            value: '复数形式'
        },
        "word_third": {
            value: '第三人称单数'
        },
        "word_past": {
            value: '过去分词'
        },
        "word_done": {
            value: '现在分词'
        },
        "word_ing": {
            value: '正在进行时'
        },
        "word_er": {
            value: '比较级'
        },
        "word_est": {
            value: '最高级'
        },
        "word_prep": {
            value: '介词形式'
        },
        "word_adv": {
            value: '副词形式'
        },
        "word_verb": {
            value: '动词形式'
        },
        "word_noun": {
            value: '名词形式'
        },
        "word_adj": {
            value: '形容词形式'
        },
        "word_conn": {
            value: '连词形式'
        },
    },
    //翻译语言 '中文', '日文', '英文', '韩文', '法文', '葡萄牙文', '西班牙文'
    LanguageData: [
        {
            name:'自动',
            key:'Auto'
        },
        {
            name: '英文',
            key: 'EN'
        },
        {
            name: '中文',
            key: 'zh-CHS'
        },
        {
            name: '日文',
            key: 'ja'
        },
        {
            name: '韩文',
            key: 'ko'
        },

        {
            name: '法文',
            key: 'fr'
        },
        {
            name: '俄文',
            key: 'ru'
        },
        {
            name: '葡萄牙文',
            key: 'pt'
        },
        {
            name: '西班牙文',
            key: 'es'
        }
    ],
    MultiArray: [[ '自动','英文', '中文', '日文', '韩文', '法文','俄文','葡萄牙文', '西班牙文'], ['自动','英文', '中文', '日文', '韩文', '法文','俄文', '葡萄牙文', '西班牙文']],
    //图像识别API
    ImageAPIConfig: {
        ApiKey: 'gxlKucQNdc9byyrQsx7bEGEk',
        SecretKey: 'bELd59TesCh6spRcQYqpBfuPyUZt5SWy'
    },
    //有道翻译API
    YoudaoTranslateConfig: {
        appKey: "3891f2b7f04c2513",
        SecretKey: 'gC4tO8eGSyGx4ay4slrPnBIkwuZT5uvr'
    }
}
