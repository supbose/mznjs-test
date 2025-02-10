import * as mznjs from '@mznjs/helper'

// const fav= new mznjs.utils.fav('htt1111p://www.a.com')

// console.log('fav->',fav);

const faviconFetcher = new mznjs.utils.fav('https://nuxt.com.cn/');

faviconFetcher.fetchFavicon()
    .then(url => {
        if (url) {
            console.log('Favicon URL:', url);
        } else {
            console.log('No favicon URL found');
        }
    })
    .catch(error => {
        console.error(error);
    });

// 获取 favicon Blob
faviconFetcher.fetchFavicon()
    .then(blob => {
        if (blob) {
            console.log('Favicon Blob:', blob);
        } else {
            console.log('No favicon Blob found');
        }
    })
    .catch(error => {
        console.error(error);
    });

// 加载 favicon 作为图像
faviconFetcher.loadFaviconAsImage()
    .then(image => {
        if (image) {
            console.log('Favicon Image:', image);
            document.body.appendChild(image); // 将图像添加到页面中
        } else {
            console.log('No favicon Image found');
        }
    })
    .catch(error => {
        console.error(error);
    });