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
        ,'小琉球社人大約300人遭捕捉、驅逐、奴役與屠殺，小\n琉球社男性被抓到大員強迫勞役，婦女和小孩即配置\n於新港社。至是小琉球社從歷史消失。'
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
