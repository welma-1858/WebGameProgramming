let platforms;
let player;
let playergod_bool=false;
let cheat_bool=false;
let monster1;
let monster2;
let monster2_blt;//怪物2的砲彈
let monster3;
let wall;

//粒子
let pitch_particles, pitch_emitter;
let monster_particles, monster_emitter;

//音符
let pitch2;
//鍵盤
let cursors;

//關卡
let level = 1;
let levelText;
//分數
let score = 0;
let scoreText;

let menuMessage;
let pauseMessage;
let restartmessage;
let gameOver = false;
let finishMessage;

let restartText;

let pipes;

let bullets;
//避免連續觸發，玩家按下F射擊變成true，放開F才變回false
let shoot_bool = false;

//音效
let audioEat;
let audioMove;
let audioClick;
let audioHit;
let audioShoot;
let audioShoot2;
let audioNextLv;
let audioCheer;
let audioPlay;
let PlayBGM;
let audioMenu;
let MenuBGM;