function preload() {
    this.load.image('background', 'asset/basic/backgroundImg.jpg');
    //----player (normal)----run, climb, jump, slide, squat-down, squat-down-walk, dead
    //run
    this.load.spritesheet('player-run-left', 'asset/basic/Sprite-run-left.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('player-run-right', 'asset/basic/Sprite-run-right.png', { frameWidth: 100, frameHeight: 100 });
    //climb
    this.load.spritesheet('player-climb', 'asset/basic/Sprite-climb.png', { frameWidth: 100, frameHeight: 100 });
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

    //run
    this.load.spritesheet('M-player-run-left', 'asset/basic/Sprite-run-mask-left.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('M-player-run-right', 'asset/basic/Sprite-run-mask-right.png', { frameWidth: 100, frameHeight: 100 });
    //climb
    this.load.spritesheet('M-player-climb', 'asset/basic/Sprite-climb-mask.png', { frameWidth: 100, frameHeight: 100 });
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
    //mask
    this.load.image('mask', 'asset/basic/mask.png');
    //trap
    this.load.spritesheet('trap', 'asset/basic/trap.png', { frameWidth: 60, frameHeight: 30 });
    //arrow
    this.load.image('arrow', 'asset/basic/arrow.png');
    //stab
    this.load.image('stab_1', 'asset/Level3/img/09.png');
    this.load.image('stab_2', 'asset/Level3/img/19.png');
    //poison
    this.load.image('poison', 'asset/Level3/img/poison.png');
    //mission
    this.load.image('deadBody', 'asset/basic/dead-3.png');

    //----Level3 Environment----
    //platform
    this.load.image('platform_01', 'asset/Level3/img/04.png');
    this.load.image('platform_02', 'asset/Level3/img/05.png');
    this.load.image('platform_03', 'asset/Level3/img/06.png');
    this.load.image('platform_04', 'asset/Level3/img/07.png');
    this.load.image('platform_05', 'asset/Level3/img/08.png');
    this.load.image('platform_06', 'asset/Level3/img/10.png');
    this.load.image('platform_07', 'asset/Level3/img/11.png');
    this.load.image('platform_08', 'asset/Level3/img/12.png');
    this.load.image('platform_09', 'asset/Level3/img/13.png');
    this.load.image('platform_10', 'asset/Level3/img/14.png');
    this.load.image('platform_11', 'asset/Level3/img/15.png');
    this.load.image('platform_12', 'asset/Level3/img/16.png');
    this.load.image('platform_13', 'asset/Level3/img/17.png');
    this.load.image('platform_14', 'asset/Level3/img/18.png');
    //ladder
    this.load.image('ladder_1', 'asset/Level3/img/01.png');
    this.load.image('ladder_2', 'asset/Level3/img/02.png');
    this.load.image('ladder_3', 'asset/Level3/img/03.png');

}