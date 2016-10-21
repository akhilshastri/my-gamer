/**
 * Created by Akhil on 17-10-2016.
 */
import 'common.less';               // import LESS
import './styles/animate.min.css' ;  // import CSS
import m from './m';
import titlePanel from './panels/title';
import controlPanel from './panels/control';
import gamePanel from './panels/game' ;

debugger;
m.mount(document.getElementById("titlePanel"), titlePanel);
m.render(document.getElementById("controlPanel"), controlPanel);


gamePanel.run();