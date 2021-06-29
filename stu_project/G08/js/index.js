const config = {
    type: Phaser.AUTO,
    width: 900,
    height: 700,
    parent: 'app',
    backgroundColor:'#DDDDDD',
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH	
    },
    physics: {
        default: 'arcade',
        arcade:{
            gravity:false,
            debug:false
        }
    },
    
    scene: [
        first,
        s1,
        s2,
        s3,
        game1,
        game2,
        game3,
        s4,
        s5,
        s6,
        s7,
        
        end
    ]
}
const game = new Phaser.Game(config);