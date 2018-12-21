import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalManageService {

  public idInitialization = 0;
  public shareId: number;

  dataSet = [
    {
      id: this.idInitialization++,
      date: '2018/12/15',
      link: 'http://9c.ltd/56w',
      time: '2018-08-19 14:48',
      tel: '17666666666',
      telA: 13252862883,
      telB: 13252862883,
      licensePlate: '辽A12323',
      callTime: '20分钟',
      switchValue: true,
      operation: '查看/编辑',
      serviceState: '正常',
      joinMove: '加入黑名单'
    },
    {
      id: this.idInitialization++,
      date: '2018/12/15',
      link: 'http://9c.ltd/56w',
      time: '2018-08-19 14:48',
      tel: '18888888888',
      telA: 13252862883,
      telB: 13252862883,
      licensePlate: '辽A12323',
      callTime: '20分钟',
      switchValue: true,
      operation: '查看/编辑',
      serviceState: '正常',
      joinMove: '加入黑名单'
    },
    {
      id: this.idInitialization++,
      date: '2018/12/15',
      link: 'http://9c.ltd/56w',
      time: '2018-08-19 14:48',
      tel: '17666666666',
      telA: 13252862883,
      telB: 13252862883,
      licensePlate: '辽A12323',
      callTime: '20分钟',
      switchValue: true,
      operation: '查看/编辑',
      serviceState: '正常',
      joinMove: '加入黑名单'
    },
    {
      id: this.idInitialization++,
      date: '2018/12/15',
      link: 'http://9c.ltd/56w',
      time: '2018-08-19 14:48',
      tel: '17666666666',
      telA: 13252862883,
      telB: 13252862883,
      licensePlate: '辽A12323',
      callTime: '20分钟',
      switchValue: true,
      operation: '查看/编辑',
      serviceState: '正常',
      joinMove: '加入黑名单'
    }
  ];

  constructor() { }
}
