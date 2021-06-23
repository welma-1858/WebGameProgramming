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
let bombY = [70, 144, 218, 292, 366];
let rate = Math.floor(Math.random() * 30 + 20);
let barrel = Math.floor(Math.random() * 5);
let house1, house2, house3, house4;
let bomb_Mp3, destruction_Mp3, large_destruction_Mp3, shield_Mp3, obake_Mp3, bgm_Mp3;
let finalText;
let poison;//Leon's part
let local_poison;//Leon's part
let poison_time = 5;//Leon's part
let poisonVal = 0;//Leon's part
let poisonX = 300;//Leon's part
let poisonY = 300;//Leon's part
let GoodResultBtn;
let countdownTime = 5;
let countdownText;
let countdownEvent;
function preload() {
    this.load.image('restartBtn','image/restart.png');
    this.load.image('resultBtn', 'image/result.png');
    this.load.image('bg', 'image/wizard-bg.png');
    this.load.image('bomb', 'image/magic_missile.png');
    this.load.image('local', 'image/local.png', { frameWidth: 100, frameHeight: 200 });
    this.load.image('house', 'image/dark-house-01.png');
    this.load.image('house2', 'image/dark-house-02.png');
    this.load.image('house3', 'image/dark-house-03.png');
    this.load.image('smoke', 'image/smoke.png');//new
    this.load.image('shoot', 'image/magic_shoot.png');//new
    this.load.image('explotion01', 'image/splash01.png');//new
    this.load.image('explotion02', 'image/splash02.png');//new
    this.load.image('explotion03', 'image/splash02.png');//new
    this.load.image('poison','image/poison.png');//Leon's
    this.load.image('local-poison', 'image/local-poisoned.png', { frameWidth: 100, frameHeight: 200 });//Leon's part
    this.load.audio('magicSound', 'mp3/magicSound.mp3');
    this.load.audio('destruction', 'mp3/destruction.mp3');
    this.load.audio('large_destruction', 'mp3/large_destruction.mp3');
    this.load.audio('shield', 'mp3/shield.mp3');
    this.load.audio('obake', 'mp3/obake.mp3');
    this.load.audio('bgm', 'mp3/bgm.mp3');
}
function create() {
    cursors = this.input.keyboard.createCursorKeys();
    this.add.image(475, 210, 'bg');
    explotion01 = this.physics.add.image();//new
    explotion02 = this.physics.add.image();//new
    explotion03 = this.physics.add.image();//new
    smoke = this.physics.add.image();//new
    shoot = this.physics.add.image();//new
    bomb = this.physics.add.sprite();
    poison = this.physics.add.sprite().setScale(0.55);//Leon's
    local = this.physics.add.sprite(180, 70, 'local').setScale(0.55);
    local_poison = this.physics.add.sprite(180, 70, 'local-poison').setScale(0.55);//Leon's part-----創建吃毒後的主角
    local_poison.setVisible(false);//Leon's part
    local.setVisible(false);
    //Control does not exceed the frame
    local.setCollideWorldBounds(true);
    local_poison.setCollideWorldBounds(true);//Leon's part-----設定吃毒後的主角碰撞
    // set the mp3
    bomb_Mp3 = this.sound.add('magicSound');
    destruction_Mp3 = this.sound.add('destruction');
    large_destruction_Mp3 = this.sound.add('large_destruction');
    shield_Mp3 = this.sound.add('shield');
    obake_Mp3 = this.sound.add('obake');
    bgm_Mp3 = this.sound.add('bgm');
    bgm_Mp3.play({volume: 0.4});
    //build house
    house1 = this.physics.add.sprite(20, 10, 'house').setScale(0.85);
    house2 = this.physics.add.sprite(40, 115, 'house');
    house3 = this.physics.add.sprite(45, 230, 'house').setScale(0.8);
    house4 = this.physics.add.sprite(0, 335, 'house');
    countdownText = this.add.text(config.width / 2-125, config.height / 2 - 30, '遊戲倒數: 5', { align: 'center', font: '50px 微軟正黑體', color: 'black'});
    countdownEvent = this.time.addEvent({ delay: 1000, callback: countdown, callbackScope: this, loop: true });
    
    //Resault and Restart button
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
            poisonVal=0;//Leon's part-----按重新開始時，重製主角沒有吃毒
            local.setVisible(true);//Leon's part-----顯示正常的主角
            local_poison.setVisible(false);//Leon's part-----把吃毒後的主角設為隱藏
        })
    RestartBtn.visible = false;
    GoodResultBtn = this.add.sprite(config.width/2,config.height/2+150,
        'resultBtn').setInteractive().setScale(0.4)
        .on('pointerover',()=>{
            GoodResultBtn.setScale(0.45);
        })
        .on('pointerout',()=>{
            GoodResultBtn.setScale(0.4);
        })
        .on('pointerdown',()=>{
            window.location.href="goodResult.html" ;
        })
    GoodResultBtn.visible = false;
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
    this.physics.add.collider(local,poison,newPoison,null,this);//Leon's part
    if (cursors.up.isDown) {
        local.y += -8;
        local_poison.y += -8;//Leon's part
    }
    else if (cursors.down.isDown) {
        local.y += 8;
        local_poison.y += 8;//Leon's part
    }
    else if (cursors.right.isDown) {
        local.x += 8;
        local_poison.x += 8;//Leon's part
    } else if (cursors.left.isDown) {
        local.x -= 8;
        local_poison.x -= 8;//Leon's part
    }
    if (local.x <= 135) {
        local.x = 135;
        local_poison.x = 135;//Leon's part-----吃毒主角的X軸不得超出邊界
    }
    if (local.x >= 390) {
        local.x = 390;
        local_poison.x = 390;//Leon's part-----吃毒主角的X軸不得超出邊界
    }
    if(poisonVal===1)//Leon's part-----如果主角吃毒，把上下左右全部相反
    {
        local.setVisible(false);//Leon's part-----隱藏正常的主角
        local_poison.setVisible(true);//Leon's part-----把吃毒後的主角設為顯示
        if (cursors.up.isDown) {
            local.y += 16;
            local_poison.y += 16;//Leon's part-----吃毒主角和正常的主角Y座標同步
        }
        else if (cursors.down.isDown) {
            local.y += -16;
            local_poison.y += -16;//Leon's part-----吃毒主角和正常的主角Y座標同步

        }
        else if (cursors.right.isDown) {
            local.x += -16;
            local_poison.x += -16;//Leon's part-----吃毒主角和正常的主角X座標同步

        } else if (cursors.left.isDown) {
            local.x -= -16;
            local_poison.x -= -16;//Leon's part-----吃毒主角和正常的主角X座標同步
        }
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
        poisonTimeCounter = this.time.addEvent({ delay: 1000, callback: poisonTime, callbackScope: this, loop: true });//Leon's part
        local.setVisible(true);
        poison.setVisible(true);
    }
}
//timer
function timeStart() {
    time--;
    timeText.setText(formatTime(time));
    if (time == 0) {
        timeEvent.destroy();
        bombTimeEvent.destroy();
        poisonTimeCounter.destroy();
        GoodResultBtn.setVisible(true);
        time = 60;
        local.setVisible(true);//Leon's part-----時間結束後，顯示正常的主角
        local_poison.setVisible(false);//Leon's part
        bgm_Mp3.stop();
    }
}
//poisonTimer
function poisonTime(){//Leon's part-----吃毒的計時器呼叫的func
    if(poisonVal===1)
    {
        obake_Mp3.play({volume: 0.8});
        poison_time--;//Leon's part-----吃毒的時間以秒為單位減少
    }
    if(poison_time==0)//Leon's part-----當中毒時間結束後
    {
        poisonVal=0;//Leon's part-----主角回復為沒中毒
        poison_time=5;//Leon's part-----重製吃毒的時間
        local.setVisible(true);//Leon's part-----顯示正常主角
        local_poison.setVisible(false);//Leon's part
        poisonX = Math.floor(Math.random() * (390 - 160 + 1) + 160);
        poisonY = Math.floor(Math.random() * (400 - 20 + 1) + 20);
        poison = this.physics.add.sprite(poisonX,poisonY,'poison').setScale(0.55);
    }
}
//create new poison
function newPoison(){//Leon's part-----生成毒藥
    poison.destroy();//Leon's part-----消除掉被碰到的毒藥
    poisonVal = 1;//有中毒
    if(poisonVal===0){
    poisonX = Math.floor(Math.random() * (390 - 160 + 1) + 160);
    poisonY = Math.floor(Math.random() * (400 - 20 + 1) + 20);
    poison = this.physics.add.sprite(poisonX,poisonY,'poison').setScale(0.55);
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
    shield_Mp3.play({volume: 0.4});
    rate = Math.floor(Math.random() * 100 + 10)
    bomb.destroy();
    bombX = 690;
    barrel = Math.floor(Math.random() * 5)
    bomb = this.physics.add.image(bombX, bombY[barrel], 'bomb').setScale(0.5);
    shoot = this.physics.add.image(bombX - 15, bombY[barrel] - 5, 'shoot').setScale(0.85);//new
    smoke = this.physics.add.image(bombX + 45, bombY[barrel] - 5, 'smoke').setScale(0.75).setAlpha(0.6);//new
    cleanEffect = this.time.addEvent({ delay: 100, callback: Effect, callbackScope: this, loop: false });//new
    bombVal = 0;
}
//bomb out
function bombOut() {
    if (bombVal === 0) {
        bomb_Mp3.play({volume: 0.6});
        bombVal++;
    }
    bomb.destroy();
    bombX -= rate;
    bomb = this.physics.add.image(bombX, bombY[barrel], 'bomb').setScale(0.5);
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
        poisonTimeCounter.destroy();//Leon's part
        house1.destroy();
        house2.destroy();
        house3.destroy();
        house4.destroy();
        timeEvent.destroy();
        bombTimeEvent.destroy();
        RestartBtn.setVisible(true);
        ResultBtn.setVisible(true);
        poisonVal=0;//Leon's part-----遊戲失敗後，重製吃毒狀態
        local.destroy();//Leon's part-----顯示正常主角
        local_poison.destroy();//Leon's part-----隱藏吃毒的主角
        bgm_Mp3.stop();
    }
    explotion01 = this.physics.add.sprite(20, 55, 'explotion01').setScale(0.85);//new
    explotion02 = this.physics.add.sprite(45, 205, 'explotion02').setScale(0.85);//new
    explotion03 = this.physics.add.sprite(40, 350, 'explotion03').setScale(0.85);//new
    rate = Math.floor(Math.random() * 100 + 10)
    bomb.destroy();
    poison.destroy();//Leon's part----消除毒藥
    bombX = 690;
    barrel = Math.floor(Math.random() * 5);
    bomb = this.physics.add.image(bombX, bombY[barrel], 'bomb').setScale(0.5);
    if(poisonVal===0){
    poisonX = Math.floor(Math.random() * (390 - 160 + 1) + 160);
    poisonY = Math.floor(Math.random() * (400 - 20 + 1) + 20);
    poison=this.physics.add.image(poisonX,poisonY,'poison').setScale(0.55);//Leon's part-----生成毒藥
    }
    shoot = this.physics.add.image(bombX - 15, bombY[barrel] - 5, 'shoot').setScale(0.85);//new
    smoke = this.physics.add.image(bombX + 45, bombY[barrel] - 5, 'smoke').setScale(0.75).setAlpha(0.6);//new
    cleanEffect = this.time.addEvent({ delay: 100, callback: Effect, callbackScope: this, loop: false });//new
}