import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["John smith", "E345", "js@abc.net"]
  info2: string[] = ["nane smith", "E245", "ns@agc.net"]
  info3: string[] = ["Mate smith", "E545", "ms@aec.net"]

  getInfo1():string[]{
    return this.info1;
  }
  getInfo2():string[]{
    return this.info2;
  }
  getInfo3():string[]{
    return this.info3;
  }

  addInfo(info: any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() { }
}
