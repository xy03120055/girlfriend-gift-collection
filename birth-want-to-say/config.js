// 肖扬 2024年5月9日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我们的",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "美丽迷人聪明的关俐婧",  // 同上...
        "今天是你的19岁生日",
        "祝贺你又长大了一岁",
        "希望你在新的一岁可以",
        "天天开心！",
        "积极向上！",
        "认识更多的好朋友",
        "收获更多的知识",
        "得到更多的喜悦与成长",
        "对了，你今天收到生日祝福了吗？",
        "记得今年要吃好睡好玩好",
        "愿你一生欢喜，不为世俗所及",
        "愿你平安喜乐，得偿所愿",
        "祝你岁岁常欢愉，年年皆胜意",
        "生日快乐，关关~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我们的": "./imgs/songxinxin.jpeg",
        "美丽迷人聪明的关俐婧": "./imgs/nothing.jpg",
        "今天是你的生日": "./imgs/shengri.jpeg",
        "今天是你的19岁生日": "./imgs/zaiyiqi.png",
        "祝贺你又长大了一岁": "./imgs/nothing.jpg",
        "希望你在新的一岁可以": "./imgs/yangzi.jpeg",
        "积极向上": "./imgs/nothing.jpg",
        "认识更多的好朋友": "./imgs/nothing.jpg",
        "收获更多的知识": "./imgs/nothing.jpg",
        "得到更多的喜悦与成长": "./imgs/nothing.jpg",
        "对了，你今天收到生日祝福了吗？": "./imgs/chuo.gif",
        "记得今年要吃好睡好玩好": "./imgs/chihaodian.jpeg",
        "愿你一生欢喜，不为世俗所及": "./imgs/weibao.jpeg",
        "愿你平安喜乐，得偿所愿": "./imgs/nothing.jpg",
        "祝你岁岁常欢愉，年年皆胜意": "./imgs/nothing.jpg",
        "生日快乐，关关~~": "./imgs/nothing.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "女王，快点我开始！",
        play: "上music",
        bannar_coming: "整点颜色",
        balloons_flying: "好像还少点东西！",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "祝你生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '爱你~'
};
