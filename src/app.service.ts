import { Injectable } from '@nestjs/common';
import axios from 'axios';

const baseURL = 'https://api.blockcypher.com/v1/eth/main/txs/',
  transactionId = '0x552865a0dbbc5169a1da606598d3908f2652bd656e021bf74acd5f3b2d93591d'


@Injectable()
export class AppService {
  async getTransactionDetail() {
    try {
      const response = await axios.get(baseURL + transactionId);
      return ('<h1>the transaction detail</h1> <pre>' +
        JSON.stringify(response.data).toString().replace(/,/g, ', <br/>')
          .replace(`"total"`, `<b>"total"</b>`)
          .replace(`"confirmed"`, `<b>"confirmed"</b>`)
          .replace(`"confirmations"`, `<b>"confirmations"</b>`)
        + '</pre>');
    } catch (error) {
      console.error(error);
    }
    return ('something went wrong')
  }

  async getHello() {
    return await this.getTransactionDetail();
  }
}
