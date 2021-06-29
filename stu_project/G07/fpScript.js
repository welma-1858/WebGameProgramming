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
let startBtn;
let rulesBtn;
function preload() {
    this.load.image('startBtn', 'image/start.png');
    this.load.image('rulesBtn', 'image/rules.png');
    this.load.image('background', 'image/sky.png');
    this.load.image('logo', 'image/logo.png');
}
function create() {
    this.add.image(0, 0, 'background').setScale(2.5);
    this.add.image(config.width/2,config.height/2-90,'logo').setScale(1.8);
    startBtn = this.add.sprite(config.width/2,config.height/2+75,
        'startBtn').setInteractive().setScale(0.4)
        .on('pointerover',()=>{
            startBtn.setScale(0.45);
        })
        .on('pointerout',()=>{
            startBtn.setScale(0.4);
        })
        .on('pointerdown',()=>{
            window.location.href="game1.html" 
        })
    rulesBtn = this.add.sprite(config.width/2,config.height/2+150,
        'rulesBtn').setInteractive().setScale(0.4)
        .on('pointerover',()=>{
            rulesBtn.setScale(0.45);
        })
        .on('pointerout',()=>{
            rulesBtn.setScale(0.4);
        })
        .on('pointerdown',()=>{
            window.location.href="rules.html" 
        })
}
