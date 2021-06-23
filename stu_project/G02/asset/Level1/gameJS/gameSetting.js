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
let trap;
let isTrap = false;
let overtrap;
let cage;
let isCage = false;
let overCage; 
let stab;
let arrow;
let isArrowRight = false;
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
let arrowTrigger;
//audio
let isWalk = false;
