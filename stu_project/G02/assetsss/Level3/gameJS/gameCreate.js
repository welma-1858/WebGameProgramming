function create()
{
    //----------add background----------
    this.add.image(960, 540, 'background');
    //----------add platforms----------
    platforms = this.physics.add.staticGroup();
    platforms.create(960, 1060, 'floor1');
    platforms.create(120, 820, 'floor2-1');
    // platforms.create(395, 850, 'floor2-2');
    platforms.create(1024, 820, 'floor2-3');
    platforms.create(1649, 610, 'floor3');
    platforms.create(1130, 540, 'floor4');
    platforms.create(1230, 540, 'floor4');
    platforms.create(225, 470, 'floor5-1');
    platforms.create(465, 470, 'floor5-2');
    platforms.create(873, 470, 'floor5-3');
    platforms.create(270, 300, 'floor6');
    platforms.create(1649, 380, 'floor7');
    platforms.create(1170, 330, 'floor8');
    platforms.create(1210, 160, 'floor9');
    platforms.create(1625, 133, 'floor10-1');
    // platforms.create(1685, 183, 'floor10-2');
    platforms.create(1915, 133, 'floor10-3');
    //----------add ladder----------
    ladder = this.physics.add.staticGroup();
    ladder.create(300, 920, 'ladder1');
    ladder.create(570, 545, 'ladder2');
    ladder.create(1850, 235, 'ladder3');
    //----------add spike----------
    spike = this.physics.add.staticGroup();
    spike.create(1000, 1050, 'spike1');
    spike.create(1100, 560, 'spike2');
    //----------add trap----------
    // trap = this.physics.add.staticGroup();
    // trap.create(1250, 750, 'trap');
    //----------add wall----------
    wall = this.physics.add.staticGroup();
    wall.create(1877, 1001, 'wall2');
    wall.create(1877, 950, 'wall2');
    wall.create(700, 700, 'wall1');
    wall.create(621, 215, 'wall3');
    wall.create(1250, 220, 'wall4');
    //----------add mask----------
    mask = this.physics.add.staticGroup();
    mask.create(1877, 890, 'mask');
    mask.create(480, 100, 'mask');
    //----------add body----------
    body = this.physics.add.sprite(1200, 120, 'body');
    body.setCollideWorldBounds(true);


    //----------add poison----------
    // poison = this.physics.add.staticGroup();
    // poison.create(270, 200, 'poison');
    //----------add arrow----------
    // arrow = this.physics.add.staticGroup();
    // arrow.create(-20, 700, 'arrowRight');
    // arrow.create(1940, 530, 'arrowLeft');
    arrowRight = this.physics.add.sprite(-20, 700, 'arrowRight');
    arrowLeft = this.physics.add.sprite(1920, 530, 'arrowLeft');
    //----------add video----------
    // video = this.physics.add.overlap(player, body);
     
    //----------add cage----------
    cage = this.physics.add.sprite(1400, 850, 'cage');
    //----------add player----------
    player = this.physics.add.sprite(100, 980, 'player stand right');
    player.setCollideWorldBounds(true);

    //----------player stand----------
    this.anims.create({
        key: 'left (new)',
        frames: [{key: 'player stand left', frame: 0}],
        frameRate: 20,
    });
    this.anims.create({
        key: 'right (new)',
        frames: [{key: 'player stand right', frame: 0}],
        frameRate: 20,
    });
    this.anims.create({
        key: 'left (new) (mask)',
        frames: [{key: 'player stand left (mask)', frame: 0}],
        frameRate: 20,
    });
    this.anims.create({
        key: 'right (new) (mask)',
        frames: [{key: 'player stand right (mask)', frame: 0}],
        frameRate: 20,
    });










    this.anims.create({
        key: 'left',
        frames: [{key: 'player run left', frame: 0}],
        frameRate: 20,
    });

    this.anims.create({
        key: 'right',
        frames: [{key: 'player run right', frame: 0}],
        frameRate: 20,
    });

    this.anims.create({
        key: 'left (mask)',
        frames: [{key: 'player run left (mask)', frame: 0}],
        frameRate: 20,
    });

    this.anims.create({
        key: 'right (mask)',
        frames: [{key: 'player run right (mask)', frame: 0}],
        frameRate: 20,
    });

    //----------player run----------
    this.anims.create({
        key: 'run left',
        frames: this.anims.generateFrameNumbers('player run left', {start: 0, end: 4}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'run right',
        frames: this.anims.generateFrameNumbers('player run right', {start: 0, end: 4}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'run left (mask)',
        frames: this.anims.generateFrameNumbers('player run left (mask)', {start: 0, end: 4}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'run right (mask)',
        frames: this.anims.generateFrameNumbers('player run right (mask)', {start: 0, end: 4}),
        frameRate: 10,
        repeat: -1
    });

    //----------player climb----------
    this.anims.create({
        key: 'climb',
        frames: this.anims.generateFrameNumbers('player climb', {start: 0, end: 5}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'climb (mask)',
        frames: this.anims.generateFrameNumbers('player climb (mask)', {start: 0, end: 5}),
        frameRate: 10,
        repeat: -1
    });

    //----------player down----------
    this.anims.create({
        key: 'down left',
        frames: this.anims.generateFrameNumbers('player down left', {start: 1, end: 1}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down right',
        frames: this.anims.generateFrameNumbers('player down right', {start: 1, end: 1}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down left (mask)',
        frames: this.anims.generateFrameNumbers('player down left (mask)', {start: 1, end: 1}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down right (mask)',
        frames: this.anims.generateFrameNumbers('player down right (mask)', {start: 1, end: 1}),
        frameRate: 10,
        repeat: -1
    });

    //----------player down walk----------
    this.anims.create({
        key: 'down walk left',
        frames: this.anims.generateFrameNumbers('player down walk left', {start: 0, end: 1}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down walk right',
        frames: this.anims.generateFrameNumbers('player down walk right', {start: 0, end: 1}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down walk left (mask)',
        frames: this.anims.generateFrameNumbers('player down walk left (mask)', {start: 0, end: 1}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down walk right (mask)',
        frames: this.anims.generateFrameNumbers('player down walk right (mask)', {start: 0, end: 1}),
        frameRate: 10,
        repeat: -1
    });

    //----------player slide----------
    this.anims.create({
        key: 'slide left',
        frames: this.anims.generateFrameNumbers('player slide left', {start: 0, end: 2}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'slide right',
        frames: this.anims.generateFrameNumbers('player slide right', {start: 0, end: 2}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'slide left (mask)',
        frames: this.anims.generateFrameNumbers('player slide left (mask)', {start: 0, end: 2}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'slide right (mask)',
        frames: this.anims.generateFrameNumbers('player slide right (mask)', {start: 0, end: 2}),
        frameRate: 10,
        repeat: -1
    });

    //----------player jump----------
    this.anims.create({
        key: 'jump left',
        frames: this.anims.generateFrameNumbers('player jump left', {start: 0, end: 4}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'jump right',
        frames: this.anims.generateFrameNumbers('player jump right', {start: 0, end: 4}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'jump left (mask)',
        frames: this.anims.generateFrameNumbers('player jump left (mask)', {start: 0, end: 4}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'jump right (mask)',
        frames: this.anims.generateFrameNumbers('player jump right (mask)', {start: 0, end: 4}),
        frameRate: 10,
        repeat: -1
    });

    //----------player dead----------
    this.anims.create({
        key: 'blood left',
        frames: this.anims.generateFrameNumbers('player blood left', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'blood right',
        frames: this.anims.generateFrameNumbers('player blood right', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    //----------add audio----------
    // bgMusic = this.ass.audio('bgMusic');
    // walk = this.ass.audio('walk');
    // jump = this.ass.audio('jump');
    // dead = this.ass.audio('dead');
    // poison = this.ass.audio('poison');
    // shoot = this.ass.audio('shoot');
    // trap= this.ass.audio('trap');

    bgMusic = this.sound.add('bgMusic');
    bgMusic.play();

    walkMusic = this.sound.add("walkMusic",
        {
            loop: true,
            volume: 2
        });
    jumpMusic = this.sound.add("jumpMusic",
        {
            loop: false,
            volume: 0.4
        });

    deadMusic = this.sound.add("deadMusic",
        {
            loop: false,
            volume: 100
        });

    //----------add player on ladder----------
    this.physics.add.overlap(player, ladder, climb);

    //----------collect mask----------
    this.physics.add.overlap(player, mask, maskOn);

    //----------collect body----------
    this.physics.add.collider(body,platforms);
    this.physics.add.collider(body,wall);

    // this.physics.add.overlap(player, body, collectBody, null, this);
    
    // function collectBody(player, body)
    // {
    //     body.disableBody(true, true);
    // }

    //----------arrow settings----------
    this.physics.add.overlap(player, arrowRight, GameOver);
    this.physics.add.overlap(player, arrowLeft, GameOver);
    arrowRight.setCollideWorldBounds(true);
    arrowRight.body.allowGravity = false;
    arrowLeft.setCollideWorldBounds(true);
    arrowLeft.body.allowGravity = false;
    arrowTriggerRight = this.physics.add.staticSprite(300, 710, 'triggerArrowRight');
    arrowTriggerLeft = this.physics.add.staticSprite(1600, 550, 'triggerArrowLeft');
    overArrowRight = this.physics.add.overlap(player, arrowTriggerRight, getArrowRight.bind(this));
    overArrowLeft = this.physics.add.overlap(player, arrowTriggerLeft, getArrowLeft.bind(this));

    //----------step on spike----------
    this.physics.add.collider(player, spike, stepSpike, null, this);
    function stepSpike(player, spike)
    {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('left');
        gameOver = true;
    }

    //----------cage trigger----------
    this.physics.add.overlap(player, cage, GameOver);
    cage.setCollideWorldBounds(true);
    cage.body.allowGravity = false;
    cageTrigger = this.physics.add.staticSprite(1200, 1020, 'triggerCage');
    overCage = this.physics.add.overlap(player, cageTrigger, getCage.bind(this));

    //----------捕獸夾----------
    this.anims.create(
        {
            key: 'null',
            frames: [{ key: 'trap_static', frame: 0 }],
            frameRate: 20,
        });
        this.anims.create(
        {
            key: 'get',
            frames: this.anims.generateFrameNumbers('trap', { start: 0, end: 2 }),
            frameRate: 30,
            repeat: 0
        });
    trap = this.physics.add.sprite(1400, 700, 'trap_static');
    this.physics.add.collider(trap,platforms);
    trap.setCollideWorldBounds(true);
    overtrap = this.physics.add.overlap(player, trap, getTrap.bind(this));
    function getTrap() 
    {
        console.log("fuck");
        if (isTrap) 
        {
            trap.anims.play('get', true);
            // trapmusic.play();
            this.physics.world.removeCollider(overtrap);
            
        }
        gameOver = true;
        isTrap = true;
    }

    //----------poison----------
    particles_3 = this.add.particles('poison');
    poison = particles_3.createEmitter(
    {
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
        x: 280,
        y: 190,
        on: true
    });
    poisonTrigger = this.physics.add.sprite(280, 190, 'triggerPoison');
    poisonTrigger.setScale(1.5, 2);
    poisonTrigger.body.allowGravity = false;

    overPoison = this.physics.add.overlap(player, poisonTrigger, GameOver);

    //----------碰撞效果----------
    this.physics.add.collider(player,platforms);
    this.physics.add.collider(player,platforms, (res) => 
    {
        if(res.body.touching.up)
        {
            console.log("hit ceil");
        }
    });
    this.physics.add.collider(player,wall);

    //------------------------------------------------------
    
    restartText = this.add.text(config.width/2-115, config.height/2-150, 'Restart', 
    {
        font: '60px Impact',
        color: 'white',
        stroke: 'red',
        padding: 20,
        backgroundColor: 'gray'
    });

    menuText = this.add.text(config.width/2-220, config.height/2+50, 'Go back to menu', 
    {
        font: '60px Impact',
        color: 'white',
        stroke: 'red',
        padding: 20,
        backgroundColor: 'gray'
    });

    restartText.setInteractive().on('pointerdown', (pointer, localX, localY, event) => 
    {
        restartText.visable = false;
        gameOver = false;
        isCage = false;
        isArrowRight = false;
        isArrowLeft = false;
        haveMask = false;
        this.scene.restart();
    });

    menuText.setInteractive().on('pointerdown', (pointer, localX, localY, event) => 
    {
        menuText.visable = false;
        gameOver = false;
        window.location = "./choose.html";
    });

    restartText.visible = false;
    menuText.visible = false;

    overDeadBody = this.physics.add.overlap(player, body, getDeadBody.bind(this));

    finishText = this.add.text(config.width / 2 - 250, config.height / 2 - 150, 'Finish ! ',
        {
            font: '60px Impact',
            color: 'white',
            stroke: 'red',
            padding: 20,
            backgroundColor: 'gray'
        })
    finishText.setInteractive().on('pointerdown', (pointer, localX, localY, event) => {
        storyvideo = this.add.video(config.width / 2, config.height / 2, 'final');
        volume = storyvideo.getVolume();
        storyvideo.setVolume(0.5);
        storyvideo.play()
        .on('complete', () => {
            window.location = "./index.html"
            storyvideo.destroy();
        });


        finishText.visable = false;
        // window.location = "./choose.html";
    })
    finishText.setVisible(false);


    function getDeadBody() 
    {
        console.log("fuck");
        if (isDeadBody) 
        {
            finishText.setVisible(true);
            body.disableBody(true, true);
            this.physics.world.removeCollider(overDeadBody);
            player.disableBody(true,false);
        }
        isDeadBody = true;
    }
}