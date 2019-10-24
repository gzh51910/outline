const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');

request(
    'http://shop.jiuxian.com/brand-382/activity-3376.htm?area=6',
    (error, response, body) => {
        // console.log(body)
        let $ = cheerio.load(body);

        let goodslist = []

        $('.modulesBox li').each((idx,ele)=>{
            let $li = $(ele);
            let imgurl = $li.find('.sComPic img').attr('src');

            // 提取图片名字
            // http://img06.jiuxian.com/2019/0416/447d2b5c52c54142aa33f74b6c382064.jpg
            let filename = path.basename(imgurl);//447d2b5c52c54142aa33f74b6c382064.jpg

            // 利用request与stream数据流保存爬取到的图片到本地硬盘
            request(imgurl).pipe(fs.createWriteStream('img/'+filename));

            let goods = {
                name:$li.find('.sCom-name a').text(),
                price:$li.find('.sCom-price em').text(),
                imgurl:'img/'+filename,
            }

            goodslist.push(goods);
        });

        console.log(goodslist);
    }
)