function create() {

    //----music----
    let music = this.sound.add('bgMusic');
    music.play();

    walking = this.sound.add("walk",
        {
            loop: true,
            volume: 2
        });
    jumpmusic = this.sound.add("jump",
        {
            loop: false,
            volume: 0.4
        });

    deadmusic = this.sound.add("dead",
        {
            loop: false,
            volume: 100
        });
    trapmusic = this.sound.add("trap",
        {
            loop: false,
            volume: 100
        });

    //----input----
    cursors = this.input.keyboard.createCursorKeys();
    //----backgound----
    this.add.image(960, 540, 'background');
    //----Particles----
    particles_1 = this.add.particles('smoke');
    emitter_1 = particles_1.createEmitter({
        alpha: { start: 1, end: 0 }, //透明度
        scale: { start: 50, end: 50 },//粒子大小
        speedX: { min: 100, max: 500 },//速度
        speedY: { min: 0, max: 0 },
        accelerationX: { min: -10, max: 10 },//加速度
        accelerationY: { min: 0, max: 0 },
        gravityY: 0,//重力
        angle: { min: 20, max: 20 },
        rotate: { min: 180, max: 180 },
        lifespan: { min: 6000, max: 15000 },
        maxParticles: 0,  //最大數量
        quantity: 1,       //每次發射數量
        frequency: 3500,     //發射間隔
        x: -2000,
        y: 30,
        on: true
    })

    //----platforms----
    platform = this.physics.add.staticGroup();
    platform.create(960, 1080, 'platform_01');
    platform.create(1450, 910, 'platform_02');
    platform.create(500, 597, 'platform_03');
    platform.create(170, 460, 'platform_04');
    platform.create(1200, 700, 'platform_05');
    platform.create(1400, 660, 'platform_06');
    platform.create(1330, 645, 'platform_07');
    platform.create(1260, 480, 'platform_08');
    platform.create(1280, 280, 'platform_09');
    //platform.create(125, 995, 'platform_10');
    platform.create(1300, 1035, 'platform_11');

    //----ladder----
    ladder = this.physics.add.staticGroup();
    ladder.create(1800, 900, 'ladder_1');
    ladder.create(1310, 1020, 'ladder_2');
    ladder.create(703, 580, 'ladder_3');
    ladder.create(600, 370, 'ladder_4');
    ladder.create(1650, 380, 'ladder_5');
    ladder.enableBody = true;
    //----item----
    //mask
    mask = this.physics.add.sprite(50, 410, 'mask');
    mask.setCollideWorldBounds(true);
    this.physics.add.collider(mask, platform);
    //deadBody
    deadBody = this.physics.add.sprite(1850, 230, 'deadBody');
    deadBody.setCollideWorldBounds(true);
    this.physics.add.collider(deadBody, platform);
    //----damage----

    //trap
    trap = this.physics.add.sprite(400, 1035, 'trap_static');
    trap.setCollideWorldBounds(true);
    trap2 = this.physics.add.sprite(900, 250, 'trap_static');
    trap2.setCollideWorldBounds(true);
    this.physics.add.collider(trap, platform);
    this.physics.add.collider(trap2, platform);
    this.anims.create({
        key: 'null',
        frames: [{ key: 'trap_static', frame: 0 }],
        frameRate: 20,
    });
    this.anims.create({
        key: 'get',
        frames: this.anims.generateFrameNumbers('trap', { start: 0, end: 2 }),
        frameRate: 30,
        repeat: 0
    });

    //cage
    cage = this.physics.add.sprite(800, 750, 'cage');
    cage.setCollideWorldBounds(true);
    cage.body.allowGravity = false;
    cageTrigger = this.physics.add.staticSprite(700, 1030, 'Trigger');
    cage2 = this.physics.add.sprite(200, 50, 'cage');
    cage2.setCollideWorldBounds(true);
    cage2.body.allowGravity = false;
    cageTrigger2 = this.physics.add.staticSprite(300, 400, 'Trigger');

    //stab
    stab = this.physics.add.staticSprite(1255, 693, 'stab');
    //arrow
    arrow = this.physics.add.sprite(350, 460, 'arrow');
    arrow.body.allowGravity = false;
    arrowTrigger = this.physics.add.staticSprite(700, 410, 'Trigger');
    //poison
    poisonTrigger = this.physics.add.sprite(1700, 170, 'Trigger');
    poisonTrigger.setScale(1.5, 2);
    poisonTrigger.body.allowGravity = false;
    poisonTrigger = this.physics.add.sprite(1600, 1000, 'Trigger');
    poisonTrigger.setScale(1.5, 2);
    poisonTrigger.body.allowGravity = false;

    //-------------------------------------------
    //-------------------------------------------
    //--------------以下設定為共用設定-------------
    //-------------------------------------------
    //-------------------------------------------

    //----player----
    //create setting
    player = this.physics.add.sprite(200, 980, 'player-stand-right');
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platform);

    //poison
    particles_3 = this.add.particles('poison');
    poison = particles_3.createEmitter({
        alpha: { start: 0.7, end: 0 }, //透明度
        scale: { start: 1, end: 1 },//粒子大小
        speedX: { min: 0, max: 10 },//速度
        speedY: { min: 0, max: 0 },
        accelerationX: { min: 0, max: 0 },//加速度
        accelerationY: { min: -10, max: -300 },
        gravityY: 0,//重力
        angle: { min: -50, max: 50 },
        rotate: { min: -180, max: 180 },
        lifespan: { min: 1000, max: 2000 },
        maxParticles: 0,  //最大數量
        quantity: 3,       //每次發射數量
        frequency: 500,     //發射間隔
        x: 1700,
        y: 180,
        on: true
    })
    poison = particles_3.createEmitter({
        alpha: { start: 0.7, end: 0 }, //透明度
        scale: { start: 1, end: 1 },//粒子大小
        speedX: { min: 0, max: 10 },//速度
        speedY: { min: 0, max: 0 },
        accelerationX: { min: 0, max: 0 },//加速度
        accelerationY: { min: -10, max: -300 },
        gravityY: 0,//重力
        angle: { min: -50, max: 50 },
        rotate: { min: -180, max: 180 },
        lifespan: { min: 1000, max: 2000 },
        maxParticles: 0,  //最大數量
        quantity: 3,       //每次發射數量
        frequency: 500,     //發射間隔
        x: 1600,
        y: 1000,
        on: true
    })

    //anims setting
    //-FOR NORMAL-
    //stand
    this.anims.create({
        key: 'left',
        frames: [{ key: 'player-stand-left', frame: 0 }],
    });
    this.anims.create({
        key: 'right',
        frames: [{ key: 'player-stand-right', frame: 0 }],
    });
    //run
    this.anims.create({
        key: 'runLeft',
        frames: this.anims.generateFrameNumbers('player-run-left', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: 'runRight',
        frames: this.anims.generateFrameNumbers('player-run-right', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    //jump
    this.anims.create({
        key: 'jumpLeft',
        frames: this.anims.generateFrameNumbers('player-jump-left', { start: 0, end: 4 }),
        frameRate: 5,
        repeat: 1,
    });
    this.anims.create({
        key: 'jumpRight',
        frames: this.anims.generateFrameNumbers('player-jump-right', { start: 0, end: 4 }),
        frameRate: 5,
        repeat: 1,
    });
    //squat
    this.anims.create({
        key: 'squatLeft',
        frames: [{ key: 'player-squat-down-left', frame: 1 }],
    });
    this.anims.create({
        key: 'squatRight',
        frames: [{ key: 'player-squat-down-right', frame: 1 }],
    });
    //squat -> slide
    this.anims.create({
        key: 'slideLeft',
        frames: this.anims.generateFrameNumbers('player-slide-left', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: 1,
    });
    this.anims.create({
        key: 'slideRight',
        frames: this.anims.generateFrameNumbers('player-slide-right', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: 1,
    });
    //dead
    this.anims.create({
        key: 'deadLeft',
        frames: this.anims.generateFrameNumbers('player-dead-left', { start: 0, end: 3 }),
        frameRate: 5,
        repeat: 1,
    });
    this.anims.create({
        key: 'deadRight',
        frames: this.anims.generateFrameNumbers('player-dead-right', { start: 0, end: 3 }),
        frameRate: 5,
        repeat: 1,
    });
    this.anims.create({
        key: 'deadLeftEnd',
        frames: this.anims.generateFrameNumbers('player-dead-left', { start: 3, end: 3 }),
        frameRate: 5,
        repeat: 0,
    });
    this.anims.create({
        key: 'deadRightEnd',
        frames: this.anims.generateFrameNumbers('player-dead-right', { start: 3, end: 3 }),
        frameRate: 5,
        repeat: 0,
    });

    //climb
    this.anims.create({
        key: 'climb',
        frames: this.anims.generateFrameNumbers('player-climb', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
    })



    //----MASK-----
    //stand
    this.anims.create({
        key: 'Mleft',
        frames: [{ key: 'M-player-stand-left', frame: 0 }],
    });
    this.anims.create({
        key: 'Mright',
        frames: [{ key: 'M-player-stand-right', frame: 0 }],
    });
    //run
    this.anims.create({
        key: 'MrunLeft',
        frames: this.anims.generateFrameNumbers('M-player-run-left', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: 1,
    });
    this.anims.create({
        key: 'MrunRight',
        frames: this.anims.generateFrameNumbers('M-player-run-right', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: 1,
    });
    //jump
    this.anims.create({
        key: 'MjumpLeft',
        frames: this.anims.generateFrameNumbers('M-player-jump-left', { start: 0, end: 4 }),
        frameRate: 5,
        repeat: 1,
    });
    this.anims.create({
        key: 'MjumpRight',
        frames: this.anims.generateFrameNumbers('M-player-jump-right', { start: 0, end: 4 }),
        frameRate: 5,
        repeat: 1,
    });
    //squat
    this.anims.create({
        key: 'MsquatLeft',
        frames: [{ key: 'M-player-squat-down-left', frame: 1 }],
    });
    this.anims.create({
        key: 'MsquatRight',
        frames: [{ key: 'M-player-squat-down-right', frame: 1 }],
    });
    //squat -> slide
    this.anims.create({
        key: 'MslideLeft',
        frames: this.anims.generateFrameNumbers('M-player-slide-left', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: 'MslideRight',
        frames: this.anims.generateFrameNumbers('M-player-slide-right', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: -1,
    });
    //climb
    this.anims.create({
        key: 'Mclimb',
        frames: this.anims.generateFrameNumbers('M-player-climb', { start: 0, end: 5 }),
        frameRate: 5,
        repeat: -1
    })

    //trigger function
    overtrap = this.physics.add.overlap(player, trap, getTrap.bind(this));
    overtrap2 = this.physics.add.overlap(player, trap2, getTrap2.bind(this));
    overCage = this.physics.add.overlap(player, cageTrigger, getCage.bind(this));
    overCage2 = this.physics.add.overlap(player, cageTrigger2, getCage2.bind(this));
    overPoison = this.physics.add.overlap(player, poisonTrigger, GameOver);
    overDeadBody = this.physics.add.overlap(player, deadBody, getDeadBody.bind(this));
    overArrowRight = this.physics.add.overlap(player, arrowTrigger, getArrowRight.bind(this));
    //Restart the game
    restartText = this.add.text(config.width / 2 - 250, config.height / 2 - 150, 'Restart the game',
        {
            font: '60px Impact',
            color: 'white',
            stroke: 'red',
            padding: 20,
            backgroundColor: 'gray'
        });

    restartText.setInteractive().on('pointerdown', (pointer, localX, localY, event) => {
        restartText.visable = false;
        gameOver = false;
        isCage = false;
        haveMask = false;
        isArrowRight = false;
        this.scene.restart();
    });

    restartText.visible = false;

    //Back to Menu
    menuText = this.add.text(config.width / 2 - 240, config.height / 2 + 50, 'Go back to menu',
        {
            font: '60px Impact',
            color: 'white',
            stroke: 'red',
            padding: 20,
            backgroundColor: 'gray'
        });

    menuText.setInteractive().on('pointerdown', (pointer, localX, localY, event) => {
        menuText.visable = false;
        gameOver = false;
        window.location = "./choose.html";
    });

    menuText.setVisible(false);
    //nextLevelButton
    nextLevelText = this.add.text(config.width / 2 - 250, config.height / 2 - 150, 'Next Level',
        {
            font: '60px Impact',
            color: 'white',
            stroke: 'red',
            padding: 20,
            backgroundColor: 'gray'
        })
    nextLevelText.setInteractive().on('pointerdown', (pointer, localX, localY, event) => {
        nextLevelText.visable = false;
        window.location = "./level_3.html";
    })
    nextLevelText.setVisible(false);

}
function getTrap() {
    if (isTrap) {
        trap.anims.play('get', true);
        trapmusic.play();
        this.physics.world.removeCollider(overtrap);
    }
    gameOver = true;
    isTrap = true;
}
function getTrap2() {
    if (isTrap2) {
        trap2.anims.play('get', true);
        trapmusic.play();
        this.physics.world.removeCollider(overtrap2);
    }
    gameOver = true;
    isTrap2 = true;
}

function getCage() {
    if (isCage) {
        cage.body.allowGravity = true;
        this.physics.world.removeCollider(overCage);
        this.physics.add.collider(cage, platform);
    }
    isCage = true;
}
function getCage2() {
    if (isCage2) {
        cage2.body.allowGravity = true;
        this.physics.world.removeCollider(overCage2);
        this.physics.add.collider(cage2, platform);
    }
    isCage2 = true;
}

function getDeadBody() {
    if (isDeadBody) {
        nextLevelText.setVisible(true);
        deadBody.disableBody(true, true);
        this.physics.world.removeCollider(overDeadBody);
        player.disableBody(true,false);
    }
    isDeadBody = true;
}

function getArrowRight() {
    if (isArrowRight) {
        arrow.setVelocityX(2000);
        this.physics.world.removeCollider(overArrowRight);
    }
    isArrowRight = true;
}