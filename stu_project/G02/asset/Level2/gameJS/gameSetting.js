const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false,
        }
    },
    audio: {
        disableWebAudio: true,
    }
}

const game = new Phaser.Game(config);
//player setting
let isRight = true;
let haveMask = false;
let jump = false;
let isDead = false;
let player;
let cursors;
//conlider
let platform;
let ladder;
let onLadder = false;
//item
let mask;
let deadBody;
let isDeadBody = false;
let overDeadBody;
//damage
let poison;
let overPoison;
let poisonTrigger;
let trap;
let trap2;
let isTrap = false;
let isTrap2 = false;
let overtrap;
let overtrap2;
let cage;
let cage2;
let isCage = false;
let isCage2 =false;
let overCage; 
let overCage2;
let stab;
let arrow;
let isArrowRight = false;
let stone;
//system setting
let gameOver = false;
let isGameOver = false;
let restartText;
let nextLevelText;
let deadTime = 0;
let cageTime = 0;
let cageTime2 = 0;
let arrowTimeRight = 0;
//trigger
let cageTrigger;
let cageTrigger2;
let arrowTrigger;
//audio
let isWalk = false;