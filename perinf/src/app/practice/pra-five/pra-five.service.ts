import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PraFiveService {

  constructor() { }
}
export class UserSearchParams {
  public entrance_time: number;
  public exit_time: number;
  public car_id: string;
  public product_type = '';
  public service_status = '1';
  public page_num = 1;
  public page_size = 10;
}
