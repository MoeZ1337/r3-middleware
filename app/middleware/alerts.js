import request from 'superagent';
import { changeName } from '../actions/alerts';

const response = () => request.get('http://www.google.com')
  .set('Content-Type', 'application/json')
  .end((err, res) => {
    if (err || !res) {
      console.log('Failed');
    } else {
      console.log(res);
      changeName(1, 'trouble');
    }
  });

export default response;
