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
        create: create
    }
};
let game = new Phaser.Game(config);
let backBtn;
let ruleText;
function preload() {
    this.load.image('backBtn', 'image/back.png');
    this.load.image('background', 'image/sky.png');
    this.load.image('frame','image/frame.png');
}
function create() {
    
    this.add.image(0, 0, 'background').setScale(2.5);
    this.add.image(config.width/2,180,'frame').setScale(0.75);
    ruleText = this.add.text(190,45
        ,'海盜在限時1分鐘內會不斷發射砲彈，砲彈共有五個\n軌道，玩家要操控方向鍵上和下，來控制撒達勇擋掉砲\n彈。撒達勇同一時間只能阻擋一個飛行軌道上的一顆砲\n彈。村落被砲彈擊中五次就會毀滅，宣告玩家失敗。\n\n第二關開始將在地圖上隨機出現毒藥，記得盡量不要\n碰到毒藥，它會讓你的操作變相反5秒喔!!!'
        , { font:'24px 微軟雅黑體', color:'black', fixedWidth: config.width});
    backBtn = this.add.sprite(config.width/2,config.height/2+145,
        'backBtn').setInteractive().setScale(0.4)
        .on('pointerover',()=>{
            backBtn.setScale(0.45);
        })
        .on('pointerout',()=>{
            backBtn.setScale(0.4);
        })
        .on('pointerdown',()=>{
            window.location.href="index.html" 
        })
}
