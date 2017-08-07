import * as os from 'os';
import { Greeter } from './greeter';

document.addEventListener('DOMContentLoaded', function () {
  var g = new Greeter('message')
  console.log('sdfdssfd');
  document.getElementById('platform-info').innerHTML = os.platform() + ' ' + g.greet();
});
