const config = {
    type: Phaser.AUTO,
    width: 950,
    height: 420,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
let life = 6;
let bomb;
let local;
let house;
let cursors;
let time = 60;
let bombVal = 0;
let timeEvent;//timer
let startText;
let restartText;
let game = new Phaser.Game(config);
let bombX = 690;
let bombY = [85, 159, 233, 307, 381];
let rate = Math.floor(Math.random() * 30 + 20);
let barrel = Math.floor(Math.random() * 5);
let house1, house2, house3, house4;
let bomb_Mp3, destruction_Mp3, large_destruction_Mp3, shield_Mp3, bgm_Mp3;
let finalText;
let NextBtn;
let countdownTime = 5;
let countdownText;
let countdownEvent;
function preload() {
    this.load.image('restartBtn','image/restart.png');
    this.load.image('resultBtn', 'image/result.png');
    this.load.image('nextBtn', 'image/next.png');
    this.load.image('bg', 'image/background.png');
    this.load.image('bomb', 'image/bomb.png');
    this.load.image('local', 'image/local.png', { frameWidth: 100, frameHeight: 200 });
    this.load.image('house', 'image/house.png');
    this.load.image('house2', 'image/house2.png');
    this.load.image('house3', 'image/house3.png');
    this.load.image('smoke', 'image/smoke.png');//new
    this.load.image('shoot', 'image/shoot.png');//new
    this.load.image('explotion01', 'image/explotion01.png');//new
    this.load.image('explotion02', 'image/explotion02.png');//new
    this.load.image('explotion03', 'image/explotion02.png');//new
    this.load.audio('bomb', 'mp3/bomb.mp3');
    this.load.audio('destruction', 'mp3/destruction.mp3');
    this.load.audio('large_destruction', 'mp3/large_destruction.mp3');
    this.load.audio('shield', 'mp3/shield.mp3');
    this.load.audio('bgm', 'mp3/bgm.mp3');
}
function create() {
    
    this.add.image(475, 210, 'bg');
    explotion01 = this.physics.add.image();//new
    explotion02 = this.physics.add.image();//new
    explotion03 = this.physics.add.image();//new
    smoke = this.physics.add.image();//new
    shoot = this.physics.add.image();//new
    bomb = this.physics.add.image();
    local = this.physics.add.sprite(180, 70, 'local').setScale(0.55);
    local.setVisible(false);
    //Control does not exceed the frame
    local.setCollideWorldBounds(true);
    // set the mp3
    bomb_Mp3 = this.sound.add('bomb');
    destruction_Mp3 = this.sound.add('destruction');
    large_destruction_Mp3 = this.sound.add('large_destruction');
    shield_Mp3 = this.sound.add('shield');
    bgm_Mp3 = this.sound.add('bgm');
    bgm_Mp3.play({volume: 0.4});
    //build house
    house1 = this.physics.add.sprite(20, 10, 'house').setScale(0.85);
    house2 = this.physics.add.sprite(40, 115, 'house');
    house3 = this.physics.add.sprite(45, 230, 'house').setScale(0.8);
    house4 = this.physics.add.sprite(0, 335, 'house');
    cursors = this.input.keyboard.createCursorKeys();
    countdownText = this.add.text(config.width / 2-125, config.height / 2 - 30, '遊戲倒數: 5', { align: 'center', font: '50px 微軟正黑體', color: 'black'});
    countdownEvent = this.time.addEvent({ delay: 1000, callback: countdown, callbackScope: this, loop: true });
    //Resault and Restart and Next button
    RestartBtn = this.add.sprite(config.width/2,config.height/2+75,
        'restartBtn').setInteractive().setScale(0.4)
        .on('pointerover',()=>{
            RestartBtn.setScale(0.45);
        })
        .on('pointerout',()=>{
            RestartBtn.setScale(0.4);
        })
        .on('pointerdown',()=>{
            countdownTime = 5;  
            this.scene.restart();
            life = 6;
            time = 60;
            local.setVisible(true);
        })
    RestartBtn.visible = false;
    NextBtn = this.add.sprite(config.width/2,config.height/2+75,
        'nextBtn').setInteractive().setScale(0.4)
        .on('pointerover',()=>{
            NextBtn.setScale(0.45);
        })
        .on('pointerout',()=>{
            NextBtn.setScale(0.4);
        })
        .on('pointerdown',()=>{
            window.location.href="game2.html" ;
        })
    NextBtn.visible = false;
    ResultBtn = this.add.sprite(config.width/2,config.height/2+150,
        'resultBtn').setInteractive().setScale(0.4)
        .on('pointerover',()=>{
            ResultBtn.setScale(0.45);
        })
        .on('pointerout',()=>{
            ResultBtn.setScale(0.4);
        })
        .on('pointerdown',()=>{
            window.location.href="lastPage.html" ;
        })
        ResultBtn.visible = false;
}
function update() {
    this.physics.add.collider(local, bomb, newBomb, null, this);
    this.physics.add.collider(house1, bomb, destroyHouse, null, this);
    this.physics.add.collider(house2, bomb, destroyHouse, null, this);
    this.physics.add.collider(house3, bomb, destroyHouse, null, this);
    this.physics.add.collider(house4, bomb, destroyHouse, null, this);
    if (cursors.up.isDown) {
        local.y += -8;
    }
    else if (cursors.down.isDown) {
        local.y += 8;
    }
    else if (cursors.right.isDown) {
        local.x += 8;
    } else if (cursors.left.isDown) {
        local.x -= 8;
    }
    if (local.x <= 135) {
        local.x = 135;
    }
    if (local.x >= 390) {
        local.x = 390;
    }
    
}
function countdown() {
    countdownTime--;
    countdownText.setText('遊戲倒數:'+' '+countdownTime);
    if(countdownTime==0){
        countdownText.setVisible(false);
        timeText = this.add.text(config.width / 2 - 36, 2, '1:00', { align: 'center', font: '36px 微軟正黑體', color: 'black' });
        timeEvent = this.time.addEvent({ delay: 1000, callback: timeStart, callbackScope: this, loop: true });
        bombTimeEvent = this.time.addEvent({ delay: 100, callback: bombOut, callbackScope: this, loop: true });
        local.setVisible(true);
    }
}
//timer
function timeStart() {
    time--;
    timeText.setText(formatTime(time));
    if (time == 0) {
        timeEvent.destroy();
        bombTimeEvent.destroy();
        NextBtn.setVisible(true);
        time = 60;
        local.setVisible(true);//Leon's part-----時間結束後，顯示正常的主角
        bgm_Mp3.stop();
    }
}
//timer style
function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var partInSeconds = seconds % 60;
    partInSeconds = partInSeconds.toString().padStart(2, '0');
    return `${minutes}:${partInSeconds}`;
}
//setting rate and barrel for bomb
function newBomb() {
    shield_Mp3.play({volume: 0.3});
    rate = Math.floor(Math.random() * 100 + 10)
    bomb.destroy();
    bombX = 690;
    barrel = Math.floor(Math.random() * 5)
    bomb = this.physics.add.image(bombX, bombY[barrel], 'bomb');
    shoot = this.physics.add.image(bombX - 15, bombY[barrel] - 5, 'shoot').setScale(0.85);//new
    smoke = this.physics.add.image(bombX + 45, bombY[barrel] - 5, 'smoke').setScale(0.75).setAlpha(0.6);//new
    cleanEffect = this.time.addEvent({ delay: 100, callback: Effect, callbackScope: this, loop: false });//new
    bombVal = 0;
}
//bomb out
function bombOut() {
    if (bombVal === 0) {
        bomb_Mp3.play({volume: 0.3});
        bombVal++;
    }
    bomb.destroy();
    bombX -= rate;
    bomb = this.physics.add.image(bombX, bombY[barrel], 'bomb');
}
//new
function Effect() {
    shoot.destroy();
    explotion01.destroy();
    explotion02.destroy();
    explotion03.destroy();
    smoke.destroy();
}
//bomb hit the house
function destroyHouse() {
    life--;
    bombVal = 0;
    if (life === 3) {
        destruction_Mp3.play({volume: 0.2});
        house1.destroy();
        house2.destroy();
        house3.destroy();
        house4.destroy();
        house1 = this.physics.add.sprite(20, 55, 'house2').setScale(0.85);
        house2 = this.physics.add.sprite(40, 155, 'house2');
        house3 = this.physics.add.sprite(45, 270, 'house2').setScale(0.8);
        house4 = this.physics.add.sprite(0, 375, 'house2');
    }
    if (life === 1) {
        destruction_Mp3.play({volume: 0.2});
        house1.destroy();
        house2.destroy();
        house3.destroy();
        house4.destroy();
        house1 = this.physics.add.sprite(20, 55, 'house3').setScale(0.85);
        house2 = this.physics.add.sprite(40, 155, 'house3');
        house3 = this.physics.add.sprite(45, 270, 'house3').setScale(0.8);
        house4 = this.physics.add.sprite(0, 375, 'house3');
    }
    if (life === 0) {
        large_destruction_Mp3.play({volume: 0.15});
        house1.destroy();
        house2.destroy();
        house3.destroy();
        house4.destroy();
        timeEvent.destroy();
        bombTimeEvent.destroy();
        RestartBtn.setVisible(true);
        ResultBtn.setVisible(true);
        local.destroy();//Leon's part
        bgm_Mp3.stop();
    }
    explotion01 = this.physics.add.sprite(20, 55, 'explotion01').setScale(0.85);//new
    explotion02 = this.physics.add.sprite(45, 205, 'explotion02').setScale(0.85);//new
    explotion03 = this.physics.add.sprite(40, 350, 'explotion03').setScale(0.85);//new
    rate = Math.floor(Math.random() * 100 + 10)
    bomb.destroy();
    bombX = 690;
    barrel = Math.floor(Math.random() * 5);
    bomb = this.physics.add.image(bombX, bombY[barrel], 'bomb');
    shoot = this.physics.add.image(bombX - 15, bombY[barrel] - 5, 'shoot').setScale(0.85);//new
    smoke = this.physics.add.image(bombX + 45, bombY[barrel] - 5, 'smoke').setScale(0.75).setAlpha(0.6);//new
    cleanEffect = this.time.addEvent({ delay: 100, callback: Effect, callbackScope: this, loop: false });//new
}