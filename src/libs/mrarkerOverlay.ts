export const markerOverlayContents = (isSelected: boolean, storeId: number, keyword: string, storeName: string, sort: string, lat: string, lng: string, score: number, storeAddress:string, content:string, fileUrl:string) => {
  if(isSelected){
    return `
    <style>
    .wrap {position: absolute;left: 0;bottom: 40px;width: auto;margin-left: -144px;text-align: left;overflow: hidden;font-size: 12px;border-radius: 8px; border: 2px solid #ffb456}
    .wrap * {padding: 0;margin: 0;}
    .wrap .infoSelected {width: 286px;height: 120px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;}
    .wrap .infoSelected:nth-child(1) {border: 0;box-shadow: 0px 1px 2px #888;}
    .infoSelected .title {padding: 5px 0 0 10px;height: 30px;background: #ffb456;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;}
    .infoSelected .body {position: relative;overflow: hidden;}
    .infoSelected .desc {position: relative;margin: 13px 0 0 90px;height: 75px;}
    .desc .ellipsis {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .desc .jibun {font-size: 11px;color: #888; overflow: hidden;text-overflow: ellipsis;white-space: nowrap; margin:8px 0}
    .infoSelected .img {position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd; border-radius: 4px; color: #888;overflow: hidden;}
    .score {display:flex; margin-top:4px; align-items: center}
    .score .value {margin-left: 4px; margin-top:2px}
    </style>
    <div class="wrap">
        <div class="infoSelected">
            <div class="title">
              ${storeName}
            </div>
            <div class="body">
                <div class="img">
                    <img src="${fileUrl}" width="73" height="70">
               </div>
                <div class="desc">
                    <div class="ellipsis">${content}</div>
                    <div class="jibun">${storeAddress}</div>
                    <div class="score">
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ff8d01" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                      <div class="value">${score}</div>
                    </div>
                </div>
            </div>
        </div>   
    </div>;`
  }else{
    return `
    <style>
      .customoverlay {position:relative;bottom:65px;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;float:left;}
      .customoverlay:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}
      .customoverlay a {display:block;text-decoration:none;color:#000;text-align:center;border-radius:6px;font-size:14px;font-weight:bold;overflow:hidden;background: #FF8D01;background: #FF8D01 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;}
      .customoverlay .info {display:block;text-align:center;background:#fff;margin-right:35px;padding:8px 15px;font-size:14px;font-weight:bold;}
      .customoverlay .info .score {display:flex; margin-top:4px; align-items: center}
      .customoverlay .info .score .value {margin-left: 4px; margin-top:2px}
    </style>
    <div class="customoverlay"> 
        <a href="/map?selected=${storeId}&search=${keyword}&sort=${sort}&lat${lat}&lng${lng}"> 
            <span class="info" >
              <div class="overlayTitle">${storeName}</div>
              <div class="score">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ff8d01" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <div class="value">${score}</div>
              </div>
            </span>
        </a> 
    </div>`
  }
}