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
        ,'你成功了!!你率領著小琉球社的族人們抵擋了荷蘭人的\n攻擊，成功改寫歷史，你將會成為小琉球社史上最偉大\n的人物。'
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
