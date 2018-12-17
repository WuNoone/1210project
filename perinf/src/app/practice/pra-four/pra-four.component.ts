import { Component, OnInit } from '@angular/core';
declare var AMap: any;
declare var AMapUI: any;

@Component({
  selector: 'app-pra-four',
  templateUrl: './pra-four.component.html',
  styleUrls: ['./pra-four.component.css']
})
export class PraFourComponent implements OnInit {
  public userJsonStr = localStorage.getItem('information');
  public userEntity = JSON.parse(this.userJsonStr);
  public placeSearch = new AMap.PlaceSearch();
  public infoWindow = new AMap.AdvancedInfoWindow({});

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let map = new AMap.Map('container', {
      resizeEnable: true,
      enableHighAccuracy: true,
      timeout: 10000,
      zoom: 20,
      center: [123.447791, 41.722535],
      isHotspot: true
    });

    AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow: any) => {
      const marker = new AMap.Marker({
        map: map,
        zIndex: 9999999,
        position: map.getCenter(123.447791, 41.722535)
      });
      // tslint:disable-next-line:no-shadowed-variable
      const infoWindow = new SimpleInfoWindow({
        infoTitle: '<strong>' + '个人信息' + '</strong>',
        infoBody: '<p class="my-desc">' + '姓名:' + this.userEntity.name + '</p >' +
          '<p class="my-desc">' + '性别:' + this.userEntity.sex + '</p >' +
          '<p class="my-desc">' + '年龄:' + this.userEntity.age + '</p >' +
          '<p class="my-desc">' + '电话:' + this.userEntity.tel + '</p >' +
          '<p class="my-desc">' + '住址:' + this.userEntity.address + '</p >',

        offset: new AMap.Pixel(0, -31)
      });

      AMap.event.addListener(marker, 'click', () => {
        infoWindow.open(map, marker.getPosition());
      });
    });

    map.on('hotspotclick', (result: any) => {
      // tslint:disable-next-line:no-shadowed-variable
      this.placeSearch.getDetails(result.id, (status: any, result: any) => {
        if (status === 'complete' && result.info === 'OK') {
          placeSearch_CallBack(result);
        }
      });
    });

    // tslint:disable-next-line:prefer-const
    let placeSearch_CallBack = (data: any) => {
      const poiArr = data.poiList.pois;
      const location = poiArr[0].location;
      this.infoWindow.setContent(createContent(poiArr[0]));
      this.infoWindow.open(map, location);
    };

    // tslint:disable-next-line:prefer-const
    let createContent = (poi: any) => {
      const s = [];
      s.push('<div class="info-title">' + poi.name + '</div><div class="info-content">' + '地址：' + poi.address);
      s.push('电话：' + poi.tel);
      s.push('类型：' + poi.type);
      s.push('<div>');
      return s.join('<br>');
    };
  }
}
