import { Component, OnInit } from '@angular/core';
declare var AMap: any;
declare var AMapUI: any;

@Component({
  selector: 'app-pra-four',
  templateUrl: './pra-four.component.html',
  styleUrls: ['./pra-four.component.css']
})
export class PraFourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getMap();
  }

  getMap() {
    // tslint:disable-next-line:prefer-const
    let map = new AMap.Map('container', {
      resizeEnable: true,
      enableHighAccuracy: true,
      timeout: 10000,
      zoom: 20,
      center: [123.447791, 41.722535],
      isHotspot: true
    });

    AMapUI.loadUI(['overlay/SimpleInfoWindow'], function (SimpleInfoWindow) {
      const userJsonStr = localStorage.getItem('information');
      const userEntity = JSON.parse(userJsonStr);
      const marker = new AMap.Marker({
        map: map,
        zIndex: 9999999,
        position: map.getCenter(123.447791, 41.722535)
      });
      // tslint:disable-next-line:no-shadowed-variable
      const infoWindow = new SimpleInfoWindow({
        infoTitle: '<strong>' + '个人信息' + '</strong>',
        infoBody: '<p class="my-desc">' + '姓名:' + userEntity.name + '</p >' +
          '<p class="my-desc">' + '性别:' + userEntity.sex + '</p >' +
          '<p class="my-desc">' + '年龄:' + userEntity.age + '</p >' +
          '<p class="my-desc">' + '电话:' + userEntity.tel + '</p >' +
          '<p class="my-desc">' + '住址:' + userEntity.address + '</p >',

        offset: new AMap.Pixel(0, -31)
      });

      function openInfoWin() {
        infoWindow.open(map, marker.getPosition());
      }

      AMap.event.addListener(marker, 'click', function () {
        openInfoWin();
      });

      openInfoWin();
    });

    const placeSearch = new AMap.PlaceSearch();
    const infoWindow = new AMap.AdvancedInfoWindow({});
    map.on('hotspotclick', function (result) {
      // tslint:disable-next-line:no-shadowed-variable
      placeSearch.getDetails(result.id, function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          placeSearch_CallBack(result);
        }
      });
    });

    function placeSearch_CallBack(data) {
      const poiArr = data.poiList.pois;
      const location = poiArr[0].location;
      infoWindow.setContent(createContent(poiArr[0]));
      infoWindow.open(map, location);
    }

    function createContent(poi) {
      const s = [];
      s.push('<div class="info-title">' + poi.name + '</div><div class="info-content">' + '地址：' + poi.address);
      s.push('电话：' + poi.tel);
      s.push('类型：' + poi.type);
      s.push('<div>');
      return s.join('<br>');
    }
  }
}
