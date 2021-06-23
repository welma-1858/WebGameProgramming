function preload() {
    this.load.image('background', 'asset/basic/backgroundImg.jpg');
    this.load.image('rule', 'asset/Level1/img/rule.png');
    this.load.image('smoke','asset/basic/smoke.png');
    // this.load.image('step','asset/basic/step.png');
    //music
    this.load.audio('bgMusic', 'asset/audio/backgroundmusic.mp3');
    this.load.audio('walk', 'asset/audio/walking.mp3');
    this.load.audio('jump', 'asset/audio/jump.mp3');
    this.load.audio('dead', 'asset/audio/dead.mp3');
    this.load.audio('native', 'asset/audio/native.mp3');
    this.load.audio('poison', 'asset/audio/poison.mp3');
    this.load.audio('shoot', 'asset/audio/shoot.mp3');
    // this.load.audio('success', 'asset/audio/success.mp3');
    this.load.audio('trap', 'asset/audio/trap.mp3');
    //----player (normal)----run, climb, jump, slide, squat-down, squat-down-walk, dead
    
    //stand
    this.load.spritesheet('player-stand-left','asset/basic/Left.png', {frameWidth:50, frameHeight:100});
    this.load.spritesheet('player-stand-right', 'asset/basic/Right.png', { frameWidth: 50, frameHeight: 100 });
    //run
    this.load.spritesheet('player-run-left', 'asset/basic/Sprite-run-left.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('player-run-right', 'asset/basic/Sprite-run-right.png', { frameWidth: 100, frameHeight: 100 });
    //climb
    this.load.spritesheet('player-climb', 'asset/basic/Sprite-climb.png', { frameWidth: 50, frameHeight: 100 });
    //jump
    this.load.spritesheet('player-jump-left', 'asset/basic/Sprite-jump-left.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('player-jump-right', 'asset/basic/Sprite-jump-right.png', { frameWidth: 100, frameHeight: 100 });
    //slide
    this.load.spritesheet('player-slide-left', 'asset/basic/Sprite-slide-left.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('player-slide-right', 'asset/basic/Sprite-slide-right.png', { frameWidth: 100, frameHeight: 100 });
    //squat-down
    this.load.spritesheet('player-squat-down-left', 'asset/basic/Sprite-squat-down-left.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('player-squat-down-right', 'asset/basic/Sprite-squat-down-right.png', { frameWidth: 100, frameHeight: 100 });
    //dead
    this.load.spritesheet('player-dead-left', 'asset/basic/Sprite-blood-left.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('player-dead-right', 'asset/basic/Sprite-blood-right.png', { frameWidth: 100, frameHeight: 100 });
    //----player (masked)----

    //stand
    this.load.image('M-player-stand-left', 'asset/basic/Left-mask.png');
    this.load.image('M-player-stand-right', 'asset/basic/Right-mask.png');
    //run
    this.load.spritesheet('M-player-run-left', 'asset/basic/Sprite-run-mask-left.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('M-player-run-right', 'asset/basic/Sprite-run-mask-right.png', { frameWidth: 100, frameHeight: 100 });
    //climb
    this.load.spritesheet('M-player-climb', 'asset/basic/Sprite-climb-mask.png', { frameWidth: 50, frameHeight: 100 });
    //jump
    this.load.spritesheet('M-player-jump-left', 'asset/basic/Sprite-jump-mask-left.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('M-player-jump-right', 'asset/basic/Sprite-jump-mask-right.png', { frameWidth: 100, frameHeight: 100 });
    //slide
    this.load.spritesheet('M-player-slide-left', 'asset/basic/Sprite-slide-mask-left.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('M-player-slide-right', 'asset/basic/Sprite-slide-mask-right.png', { frameWidth: 100, frameHeight: 100 });
    //squat-down
    this.load.spritesheet('M-player-squat-down-left', 'asset/basic/Sprite-squat-down-mask-left.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('M-player-squat-down-right', 'asset/basic/Sprite-squat-down-mask-right.png', { frameWidth: 100, frameHeight: 100 });


    //----item----
    //arrow
    this.load.image('arrow', 'asset/Level1/img/arrow-up.png');
    //stab
    this.load.image('stab_1', 'asset/Level1/img/072.0.png');
    this.load.image('stab_2', 'asset/Level1/img/09.png');
    this.load.image('stab_3', 'asset/Level1/img/11.png');
    //stone
    this.load.image('stone', 'asset/Level1/img/16.png');
    //mission
    this.load.image('deadBody', 'asset/basic/dead-1.png');
    //trigger Item
    this.load.image('Trigger', 'asset/basic/empty.png');
    //----Level2 Environment----
    //platform
    this.load.image('platform_01', 'asset/Level1/img/01.png');
    // this.load.image('platform_02', 'asset/Level1/img/02.png');
    this.load.image('platform_02-1', 'asset/Level1/img/02-1.png');
    this.load.image('platform_02-2', 'asset/Level1/img/02-2.png');
    // this.load.image('platform_03', 'asset/Level1/img/03.png');
    this.load.image('platform_03-1', 'asset/Level1/img/03-1.png');
    this.load.image('platform_03-3', 'asset/Level1/img/03-3.png');
    // this.load.image('platform_04', 'asset/Level1/img/04.png');
    this.load.image('platform_04-1', 'asset/Level1/img/04-1.png');
    this.load.image('platform_04-2', 'asset/Level1/img/04-2.png');
    this.load.image('platform_04-3', 'asset/Level1/img/04-3.png');
    this.load.image('platform_05', 'asset/Level1/img/05.png');
    this.load.image('platform_06', 'asset/Level1/img/06.png');
    this.load.image('platform_07', 'asset/Level1/img/08.png');
    this.load.image('platform_08', 'asset/Level1/img/10.png');
    this.load.image('platform_09', 'asset/Level1/img/07-1.png');
    // this.load.image('platform_09', 'asset/Level1/img/15.png');
    //ladder
    this.load.image('ladder_1', 'asset/Level1/img/12.png');
    this.load.image('ladder_2', 'asset/Level1/img/13.png');
    this.load.image('ladder_3', 'asset/Level1/img/14.png');

}