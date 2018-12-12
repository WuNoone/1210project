import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPi'
})
export class StringPiPipe implements PipeTransform {

  transform(money: any): any {
    const cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const cnIntRadice = ['', '拾', '佰'];
    const cnDecUnits = ['角', '分'];
    const cnInteger = '整';
    const cnIntLast = '元';
    let parts;
    let integerNum;
    let decimalNum;
    let chineseStr = '';
    const reg = /^\d{1,3}(?:\.\d{1,2})?$/;
    if (money === '') {
      return '';
    } else if (!reg.test(money)) {
      return '不符合题目要求';
    }

    money = parseFloat(money);
    if (money === 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }

    // 转换为字符串
    money = money.toString();
    if (money.indexOf('.') === -1) {
        integerNum = money;              // 金额整数部分
        decimalNum = '';                // 金额小数部分
    } else {
        parts = money.split('.');
        integerNum = parts[0];                      // 金额整数部分
        decimalNum = parts[1].substr(0, 2);         // 金额小数部分
    }

    // 转换整数部分
    if (integerNum !== '' && parseInt(integerNum, 10) > 0) {
      const intLen = integerNum.length;
      let zero = 0; // 标记零出现次数
      for (let i = 0; i < intLen; i++) {
        const intChar = integerNum.substr(i, 1);
        const intSlen = intLen - i - 1;
        const remain = intSlen % 3;

        if (intChar === '0') {
          zero++;
        } else {
          if (zero > 0) {
            chineseStr += cnNums[0];
          }
          zero = 0;
          chineseStr += cnNums[parseInt(intChar)] + cnIntRadice[remain];
        }
      }
      chineseStr += cnIntLast;
    }

    // 小数
    if (decimalNum !== '') {
        const decLen = decimalNum.length;
        for (let i = 0; i < decLen; i++) {
            const decChar = decimalNum.substr(i, 1);
            if (decChar !== '0') {
                chineseStr += cnNums[parseInt(decChar)] + cnDecUnits[i];
            }
            if (decChar === '0' && parseInt(integerNum, 10) > 0) {
                chineseStr += cnNums[parseInt(decChar)] + cnDecUnits[i];
            }
        }
    } else {
        chineseStr += cnInteger;
    }
    return chineseStr;
  }

}
