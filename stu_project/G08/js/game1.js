const game1 = {
key: 'game1',
preload: function(){
	this.load.image('explan', 'img/explan.png');//載入說明
	this.load.spritesheet('btn', 'img/button.png', {frameWidth: 120, frameHeight: 40});//載入開始鍵
	this.load.image('ball', 'img/ball.png');//載入公主
	this.load.image('key', 'img/key.png');//載入鑰匙
	this.load.image('doorC', 'img/doorC.png');//載入終點 關
	this.load.image('doorO', 'img/doorO.png');//載入終點 開
	this.load.spritesheet('monster1', 'img/monster1_0.png', {frameWidth: 496, frameHeight: 454});//載入怪物1
	this.load.spritesheet('monster2', 'img/monster2_0.png', {frameWidth: 194.8, frameHeight: 170});//載入怪物2
	this.load.spritesheet('monster4', 'img/monster4_0.png', {frameWidth: 296.75, frameHeight: 152});//載入怪物4
	this.load.image('attack', 'img/attack.png');//載入怪物1的攻擊
	this.load.image('a', 'img/a(630,0).png');//載入a
	this.load.image('b', 'img/b(630,180).png');//載入b
	this.load.image('c', 'img/c(630,360).png');//載入c
	this.load.image('d', 'img/d(810,90).png');//載入d
	this.load.image('e', 'img/e(360,540).png');//載入e
	this.load.image('f', 'img/f(180,90).png');//載入f
	this.load.image('g', 'img/g(0,540).png');//載入g
	this.load.image('h', 'img/h(540,0).png');//載入h
	this.load.image('i', 'img/i(450,270).png');//載入i
	this.load.image('j', 'img/j(90,360).png');//載入j
	this.load.image('k', 'img/k(270,270).png');//載入k
	this.load.image('l', 'img/L(90,90).png');//載入L
	this.load.image('m', 'img/M(90,90).png');//載入M
	this.load.image('n', 'img/n(360,90).png');//載入n
	this.load.image('p', 'img/p(0,630).png');//載入p
	this.load.audio('game1_bg','audio/game1_bg.mp3');//載入背景音樂
	this.load.audio('game_c','audio/OpenDoor.mp3');//載入過關音樂
	this.load.audio('game_m','audio/game_monster.mp3');//載入怪物音樂
	this.load.audio('game_w','audio/game_wall.mp3');//載入撞牆音樂
	this.load.audio('game_k','audio/game_getkey.mp3');//載入拿到鑰匙音樂game_start1
	this.load.spritesheet('nextBtn', 'img/nextBtn.png', {frameWidth: 120, frameHeight: 40});
},
create: function(){
	isMove = false;
	saveX=45,saveY=45;
   //把他們都畫上去
	ball = this.physics.add.sprite(45, 45, 'ball').setScale(0.7);
	ball.setImmovable();
	doorO = this.physics.add.staticSprite(880, 600, 'doorO');
	doorC = this.physics.add.staticSprite(880, 600, 'doorC');
	keys = this.physics.add.staticGroup()
	keys.create(500, 45, 'key');
	keys.create(140, 500, 'key');
	keys.create(315, 600, 'key');
	keys.create(660, 140, 'key');

	a = this.physics.add.staticSprite(755, 45, 'a');
	b = this.physics.add.staticSprite(673, 231, 'b');
	c = this.physics.add.staticSprite(675, 450, 'c');
	d = this.physics.add.staticSprite(855, 310, 'd');
	e = this.physics.add.staticSprite(450, 585, 'e');
	f = this.physics.add.staticSprite(230, 540, 'f');
	g = this.physics.add.staticSprite(90, 585, 'g');
	h = this.physics.add.staticSprite(585, 135, 'h');
	i = this.physics.add.staticSprite(495, 360, 'i');
	j = this.physics.add.staticSprite(182, 407, 'j');
	k = this.physics.add.staticSprite(315, 360, 'k');
	l = this.physics.add.staticSprite(135, 180, 'l');
	m = this.physics.add.staticSprite(180, 135, 'm');
	n = this.physics.add.staticSprite(445, 135, 'n');
	p = this.physics.add.staticSprite(450, 665, 'p');

	monster1 = this.physics.add.sprite(135, 48, 'monster1').setScale(0.15);
	attack = this.physics.add.sprite(162, 48, 'attack');
	monster2 = this.physics.add.sprite(768, 180, 'monster2').setScale(0.4);
	monster4 = this.physics.add.sprite(330, 492, 'monster4').setScale(0.2);

	explan = this.physics.add.staticSprite(450, 350, 'explan').setScale(0.75);//說明跟開始遊戲 !!要放最下面!!
	startBtn = this.add.sprite(config.width/2+120, config.height/2+150,'btn').setInteractive()
	.on('pointerover', () => {
	startBtn.setFrame(1);
	})
	.on('pointerout', () => {
	startBtn.setFrame(0);
	})
	.on('pointerdown', () => {
	startBtn.setFrame(2);
	
	})
	.on('pointerup', () => {
		startBtn.destroy();
		explan.destroy();
		startBtn.setFrame(0);
	})

	this.anims.create({
		key: 'att',
		frames: this.anims.generateFrameNumbers('monster1', {start: 1, end: 0}),
		frameRate: 3,
		repeat: 0
	});

	this.anims.create({
		key: 'up',
		frames: this.anims.generateFrameNumbers('monster2', {start: 3, end: 4}),
		frameRate: 8,
		repeat: -1
	});
	this.anims.create({
		key: 'down',
		frames: this.anims.generateFrameNumbers('monster2', {start: 0, end: 2}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key: 'left',
		frames: this.anims.generateFrameNumbers('monster4', {start: 0, end: 1}),
		frameRate: 10,
		repeat: -1
	});
	this.anims.create({
		key: 'right',
		frames: this.anims.generateFrameNumbers('monster4', {start: 2, end: 3}),
		frameRate: 10,
		repeat: -1
	});

	//碰撞偵測
	const collKey = (ball, kk) => {
		game_k.play();
		kk.disableBody(true, true);
		saveX=kk.x,saveY=kk.y;
		if(keys.countActive(true) === 0){
			doorC.disableBody(true, true);
		}
	}
	const Attack = (attack, h) => {
		attack.x=162;
	monster1.anims.play('att', true);
	}
	const monsterkill = () => {
		if(isMove){
			game_m.play();
			isMove = false;
			ball.setPosition(saveX, saveY);
		}
	}
	const toucha = () => {
		m2=false;
	}
	const touchp = () => {
		m2=true;
	}
	const pass = () => {
		if(keys.countActive(true) === 0){
			game_c.play();
			ball.disableBody(true, true);
			this.gameStop = true;
			let next = this.add.sprite(450, 350, 'nextBtn').setScale(2);
			next.setInteractive();
			next.on('pointerover', () => {
				next.setFrame(1);
			})
			next.on('pointerout', () => {
				next.setFrame(0);
			})
			next.on('pointerdown', () => {
				next.setFrame(2);
			})
			next.on('pointerup', () => {
				next.setFrame(0);
				this.scene.start('game2');
				game1_bg.stop();
			})			
		}
	}
	const resetBall = () => {
		game_w.play();
		isMove = false;
		ball.setPosition(saveX, saveY);
	}
	
	this.physics.add.collider(ball, keys, collKey);
	this.physics.add.collider(attack, h, Attack);
	this.physics.add.collider(ball, attack, monsterkill);
	this.physics.add.collider(monster2, a, toucha);
	this.physics.add.collider(monster2, p, touchp);
	this.physics.add.collider(ball, monster1, monsterkill);
	this.physics.add.collider(ball, monster2, monsterkill);
	this.physics.add.collider(ball, monster4, monsterkill);
	this.physics.add.collider(ball, doorO, pass);

	this.physics.add.collider(ball, a, resetBall);
	this.physics.add.collider(ball, b, resetBall);
	this.physics.add.collider(ball, c, resetBall);
	this.physics.add.collider(ball, d, resetBall);
	this.physics.add.collider(ball, e, resetBall);
	this.physics.add.collider(ball, f, resetBall);
	this.physics.add.collider(ball, g, resetBall);
	this.physics.add.collider(ball, h, resetBall);
	this.physics.add.collider(ball, i, resetBall);
	this.physics.add.collider(ball, j, resetBall);
	this.physics.add.collider(ball, k, resetBall);
	this.physics.add.collider(ball, l, resetBall);
	this.physics.add.collider(ball, m, resetBall);
	this.physics.add.collider(ball, n, resetBall);
	this.physics.add.collider(ball, p, resetBall);
	
	ball.setCollideWorldBounds(true);//撞到牆壁
	ball.body.onWorldBounds = true;
	this.physics.world.on('worldbounds', (body, up, down, left, right) => {
	if(up || down || left || right) {
		resetBall();
	}
	});
	
	//操控人物
	ball.setInteractive()//按了才跟著動
		.on('pointerdown',(pointer)=>{
			if(pointer.leftButtonDown()){
				isMove = true;
			}
		})

	//音效
	game_c=this.sound.add('game_c');//過關音效
	game_m=this.sound.add('game_m');
	game_w=this.sound.add('game_w');
	game_k=this.sound.add('game_k');
	game1_bg=this.sound.add('game1_bg',{
		volume:1,
		loop:true
	});
	game1_bg.play();//音效太吵可以先關掉
	
},
update: function(){
	if(isMove){//跟著滑鼠
		ball.x=this.input.x;
		ball.y=this.input.y;
	}
	attack.x+=1;//控制怪物1的攻擊
	if(m2){//控制怪物2
		monster2.y--;
		monster2.anims.play('up', true);
	}
	else{
		monster2.y++;
		monster2.anims.play('down', true);
	}
	if(monster4.x<=320){//控制怪物4
		m4=false;
	}
	else if(monster4.x>=590){
		m4=true;
	}
	if(m4){
		monster4.x-=0.5;
		monster4.anims.play('left', true);
	}
	else{
		monster4.x+=0.5;
		monster4.anims.play('right', true);
	}
}
}