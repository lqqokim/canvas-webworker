import Background from './draw/Background.js';
import Text from './draw/Text.js';
import Packet from './draw/Packet.js';

class Draw {
  constructor(app) {
    this.app = app;
    this.app.updateObj = this.updateObj.bind(this);
    this.background = new Background(app);
    this.text = new Text(app);
    this.packet = new Packet(app);
    this.packet.text = this.text;

    this.init();
  }

  init() {
    this.background.init();
    this.text.init();
    this.packet.init();
  }

  updateObj() {
    this.background.update();
    this.text.update();
    this.packet.update();
  }
}

export default Draw;