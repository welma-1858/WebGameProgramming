//----------load image----------
function preload()
{
    //----------background img----------
    this.load.image('background', '/assets/background img.jpg');

    //----------player----------
    this.load.spritesheet('player stand left', '/player img/standing left.png', {frameWidth: 50, frameHeight: 100});
    this.load.spritesheet('player stand right', '/player img/standing right.png', {frameWidth: 50, frameHeight: 100});
    this.load.spritesheet('player stand left (mask)', '/player img/standing left (mask).png', {frameWidth: 50, frameHeight: 100});
    this.load.spritesheet('player stand right (mask)', '/player img/standing right (mask).png', {frameWidth: 50, frameHeight: 100});

    this.load.spritesheet('player run left', '/player img/player run left.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player run right', '/player img/player run right.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player blood left', '/player img/player blood left.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player blood right', '/player img/player blood right.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player climb (mask)', '/player img/player climb (mask).png', {frameWidth: 50, frameHeight: 100});
    this.load.spritesheet('player climb', '/player img/player climb.png', {frameWidth: 50, frameHeight: 100});
    this.load.spritesheet('player down left (mask)', '/player img/player down left (mask).png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player down left', '/player img/player down left.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player down right (mask)', '/player img/player down right (mask).png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player down right', '/player img/player down right.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player down walk left (mask)', '/player img/player down walk left (mask).png', {frameWidth: 100, frameHeight: 50});
    this.load.spritesheet('player down walk left', '/player img/player down walk left.png', {frameWidth: 100, frameHeight: 50});
    this.load.spritesheet('player down walk right (mask)', '/player img/player down walk right (mask).png', {frameWidth: 100, frameHeight: 50});
    this.load.spritesheet('player down walk right', '/player img/player down walk right.png', {frameWidth: 100, frameHeight: 50});
    this.load.spritesheet('player jump left (mask)', '/player img/player jump left (mask).png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player jump left', '/player img/player jump left.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player jump right (mask)', '/player img/player jump right (mask).png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player jump right', '/player img/player jump right.png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player run left (mask)', '/player img/player run left (mask).png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player run right (mask)', '/player img/player run right (mask).png', {frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('player slide left (mask)', '/player img/player slide left (mask).png', {frameWidth: 100, frameHeight: 50});
    this.load.spritesheet('player slide left', '/player img/player slide left.png', {frameWidth: 100, frameHeight: 50});
    this.load.spritesheet('player slide right (mask)', '/player img/player slide right (mask).png', {frameWidth: 100, frameHeight: 50});
    this.load.spritesheet('player slide right', '/player img/player slide right.png', {frameWidth: 100, frameHeight: 50});

    //----------floor----------
    this.load.image('floor1', '/assets/floor1.png');
    this.load.image('floor2-1', '/assets/floor2-1.png');
    this.load.image('floor2-2', '/assets/floor2-2.png');
    this.load.image('floor2-3', '/assets/floor2-3.png');
    this.load.image('floor3', '/assets/floor3.png');
    this.load.image('floor4', '/assets/floor4.png');
    this.load.image('floor5-1', '/assets/floor5-1.png');
    this.load.image('floor5-2', '/assets/floor5-2.png');
    this.load.image('floor5-3', '/assets/floor5-3.png');
    this.load.image('floor6', '/assets/floor6.png');
    this.load.image('floor7', '/assets/floor7.png');
    this.load.image('floor8', '/assets/floor8.png');
    this.load.image('floor9', '/assets/floor9.png');
    this.load.image('floor10-1', '/assets/floor10-1.png');
    this.load.image('floor10-2', '/assets/floor10-2.png');
    this.load.image('floor10-3', '/assets/floor10-3.png');

    //----------wall----------
    this.load.image('wall1', '/assets/wall1.png');
    this.load.image('wall2', '/assets/wall2.png');
    this.load.image('wall3', '/assets/wall3.png');
    this.load.image('wall4', '/assets/wall4.png');

    //----------ladder----------
    this.load.image('ladder1', '/assets/ladder1.png');
    this.load.image('ladder2', '/assets/ladder2.png');
    this.load.image('ladder3', '/assets/ladder3.png');

    //----------spike----------
    this.load.image('spike1', '/assets/spike1.png');
    this.load.image('spike2', '/assets/spike2.png');

    //----------trap----------
    this.load.spritesheet('trap', '/assets/trap.png', {frameWidth: 60, frameHeight: 30});
    this.load.image('trap_static', '/assets/trap_static.png', {frameWidth: 60, frameHeight: 10});

    //----------poison----------
    this.load.image('poison', '/assets/poison.png');

    //----------arrow----------
    this.load.image('arrowRight', '/assets/arrowRight.png');
    this.load.image('arrowLeft', '/assets/arrowLeft.png');

    //----------cage----------
    this.load.image('cage', '/assets/cage.png');

    //----------tool----------
    this.load.image('mask', '/assets/mask.png');

    //----------trigger----------
    this.load.image('triggerCage', '/assets/empty.png');
    this.load.image('triggerArrowRight', '/assets/empty.png');
    this.load.image('triggerArrowLeft', '/assets/empty.png');
    this.load.image('triggerPoison', '/assets/empty.png');
    this.load.image('bodyTrigger', '/assets/empty.png');

    //----------body----------
    this.load.image('body', '/assets/body.png');

    //----------audio----------
    this.load.audio('bgMusic', 'assetsss/audio/backgroundmusic.mp3');
    this.load.audio('walkMusic', 'assetsss/audio/walking.mp3');
    this.load.audio('jumpMusic', 'assetsss/audio/jump.mp3');
    this.load.audio('deadMusic', 'assetsss/audio/dead.mp3');
    this.load.audio('poisonMusic', 'assetsss/audio/poison.mp3');
    this.load.audio('shootMusic', 'assetsss/audio/shoot.mp3');
    this.load.audio('trapMusic', 'assetsss/audio/trap.mp3');





    this.load.video('final', 'assetsss/video/final.mp4', 'loadeddata', false, false);
}