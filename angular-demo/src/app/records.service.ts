import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Adam Taylor", "e234", "as@abc.net"]
  info2: string[] = ["Stevan Taylor", "e434", "ws@abc.net"]
  info3: string[] = ["Nik Taylor", "e334", "ms@abc.net"]

  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }
  constructor() { }
}
