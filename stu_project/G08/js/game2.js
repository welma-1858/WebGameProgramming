const game2 = {
		key: 'game2',
		preload: function(){
		this.load.image('ball', 'img/ball.png');//載入公主
		this.load.image('key', 'img/key.png');//載入鑰匙
		this.load.image('doorC', 'img/doorC.png');//載入終點 關
		this.load.image('doorO', 'img/doorO.png');//載入終點 開
		this.load.spritesheet('monster1', 'img/monster1_0.png', {frameWidth: 496, frameHeight: 454});//載入怪物1
		this.load.spritesheet('monster2', 'img/monster2_0.png', {frameWidth: 194.8, frameHeight: 170});//載入怪物2
		this.load.spritesheet('monster3', 'img/monster4_0.png', {frameWidth: 296.75, frameHeight: 152});//載入怪物3
		this.load.image('attack', 'img/attack.png');//載入怪物1的攻擊
		this.load.image('bomb1', 'img/bomb1.png');//載入球球怪物1
		this.load.image('bomb2', 'img/bomb2.png');//載入球球怪物2
		this.load.image('a_2', 'img/a_2.png');//載入a
		this.load.image('b_2', 'img/b_2.png');//載入b
		this.load.image('c_2', 'img/c_2.png');//載入c
		this.load.image('d_2', 'img/d_2.png');//載入d
		this.load.image('e_2', 'img/e_2.png');//載入e
		this.load.image('f_2', 'img/f_2.png');//載入f
		this.load.image('g_2', 'img/g_2.png');//載入g
		this.load.image('h_2', 'img/h_2.png');//載入h
		this.load.image('i_2', 'img/i_2.png');//載入i
		this.load.image('j_2', 'img/j_2.png');//載入j
		this.load.image('k_2', 'img/k_2.png');//載入k
		this.load.image('l_2', 'img/l_2.png');//載入L
        this.load.image('p', 'img/p.png');//載入p
		this.load.image('a2', 'img/a2_2.png');//載入p
		this.load.image('a3', 'img/a3_2.png');//載入p
		this.load.image('a4', 'img/a4_2.png');//載入p
		this.load.image('a5', 'img/a5_2.png');//載入p
		this.load.image('a6', 'img/a6_2.png');//載入p
		this.load.image('a7', 'img/a7_2.png');//載入p
		this.load.image('a8', 'img/a8_2.png');//載入p
		this.load.image('a9', 'img/a9_2.png');//載入p
		this.load.audio('game2_bg','audio/game2_bg.mp3');//載入背景音樂
		this.load.audio('game_c','audio/OpenDoor.mp3');//載入過關音樂
		this.load.audio('game_m','audio/game_monster.mp3');//載入怪物音樂
		this.load.audio('game_w','audio/game_wall.mp3');//載入撞牆音樂
		this.load.audio('game_k','audio/game_getkey.mp3');//載入拿到鑰匙音樂
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
		keys.create(400, 45, 'key');
		keys.create(315, 230, 'key');
		keys.create(315, 600, 'key');
		keys.create(660, 310, 'key');
		keys.create(130, 407, 'key');
	
		a = this.physics.add.staticSprite(348,320, 'a_2');
		b = this.physics.add.staticSprite(850, 400, 'b_2');
		c = this.physics.add.staticSprite(350, 495, 'c_2');
		d = this.physics.add.staticSprite(393, 545, 'd_2');
		e = this.physics.add.staticSprite(125, 220, 'e_2');
		f = this.physics.add.staticSprite(90, 545, 'f_2');
		g = this.physics.add.staticSprite(720, 495, 'g_2');
		h = this.physics.add.staticSprite(718, 45, 'h_2');
		i = this.physics.add.staticSprite(710, 225, 'i_2');
		j = this.physics.add.staticSprite(580, 270, 'j_2');
		k = this.physics.add.staticSprite(400, 230, 'k_2');
		l = this.physics.add.staticSprite(280, 120, 'l_2');
		p = this.physics.add.staticSprite(450, 665, 'p');
		a2 = this.physics.add.staticSprite(400, 230, 'a2');
		a3 = this.physics.add.staticSprite(247, 120, 'a3');
		a4 = this.physics.add.staticSprite(95, 250, 'a4');
		a5 = this.physics.add.staticSprite(330, 315, 'a5');
		a6 = this.physics.add.staticSprite(247, 120, 'a6');
		a7 = this.physics.add.staticSprite(130, 250, 'a7');
		a8 = this.physics.add.staticSprite(547, 435, 'a8');
		a9 = this.physics.add.staticSprite(500, 15, 'a9');



		monster1 = this.physics.add.sprite(30, 430, 'monster1').setScale(0.12);
		attack = this.physics.add.sprite(40, 430, 'attack').setScale(0.7);
		monster2 = this.physics.add.sprite(490, 135, 'monster2').setScale(0.4);
		monster3 = this.physics.add.sprite(570, 160, 'monster3').setScale(0.2);
		bomb1 = this.physics.add.sprite(240, 600, 'bomb1');
		bomb2 = this.physics.add.sprite(660, 140, 'bomb2');
		
		//怪物精靈圖
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
			frames: this.anims.generateFrameNumbers('monster3', {start: 0, end: 1}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('monster3', {start: 2, end: 3}),
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
			attack.x=40;
			monster1.anims.play('att', true);
		}
		const monsterkill = () => {
			if(isMove){
				game_m.play();
				isMove = false;
				ball.setPosition(saveX, saveY);
			}
		}
		const collThing = (bb, mm) => {
			if(bb.body.velocity.x == 0 || bb.body.velocity.y == 0 || bb.body.velocity.x > 250 ||
				bb.body.velocity.x < -250 || bb.body.velocity.y > 250 || bb.body.velocity.y < -250){
				   bb.setVelocity(200,200);
			   }
		}
		const back = (bb, mm) => {
			bb.setVelocityY(Phaser.Math.Between(-300, -150));
		}
		const pass = () => {
			if(keys.countActive(true) === 0){
				game_c.play();
				ball.disableBody(true, true);
				this.gameStop = true;
				let next = this.add.sprite(450, 350, 'nextBtn').setScale(2);;
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
					this.scene.start('game3');
					game2_bg.stop();
				})
			}
		}
		const resetBall = () => {
			game_w.play();
			isMove = false;
			ball.setPosition(saveX, saveY);
		}
		
		this.physics.add.collider(ball, keys, collKey);
		this.physics.add.collider(ball, doorO, pass);

		this.physics.add.collider(attack, b, Attack);
		this.physics.add.collider(ball, attack, monsterkill);
		this.physics.add.collider(ball, monster1, monsterkill);
		this.physics.add.collider(ball, monster2, monsterkill);
		this.physics.add.collider(ball, monster3, monsterkill);
		this.physics.add.collider(ball, bomb1, monsterkill);
		this.physics.add.collider(ball, bomb2, monsterkill);

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
		this.physics.add.collider(ball, p, resetBall);
		this.physics.add.collider(ball, a8, resetBall);
		this.physics.add.collider(ball, a9, resetBall);

		//怪物2
		monster2.setVelocity(0,200);
		monster2.setBounce(1);
		monster2.setCollideWorldBounds(true);
		this.physics.add.collider(monster2, p,back);
		monster1.setImmovable();
		monster2.setImmovable();
		monster3.setImmovable();

		//球球怪物1
		bomb1.setVelocity(200,200);
		bomb1.setBounce(1);
		bomb1.setCollideWorldBounds(true);
		this.physics.add.collider(bomb1, a, collThing);
		this.physics.add.collider(bomb1, b, collThing);
		this.physics.add.collider(bomb1, c, collThing);
		this.physics.add.collider(bomb1, d, collThing);
		this.physics.add.collider(bomb1, e, collThing);
		this.physics.add.collider(bomb1, f, collThing);
		this.physics.add.collider(bomb1, g, collThing);
		this.physics.add.collider(bomb1, h, collThing);
		this.physics.add.collider(bomb1, i, collThing);
		this.physics.add.collider(bomb1, j, collThing);
		this.physics.add.collider(bomb1, k, collThing);
		this.physics.add.collider(bomb1, l, collThing);
		this.physics.add.collider(bomb1, p, collThing);
		this.physics.add.collider(bomb1, monster1, collThing);
		this.physics.add.collider(bomb1, monster2, collThing);
		this.physics.add.collider(bomb1, monster3, collThing);

		//球球怪物2
		bomb2.setVelocity(200,200);
		bomb2.setBounce(1);
		bomb2.setCollideWorldBounds(true);
		this.physics.add.collider(bomb2, a,collThing);
		this.physics.add.collider(bomb2, b,collThing);
		this.physics.add.collider(bomb2, c,collThing);
		this.physics.add.collider(bomb2, d,collThing);
		this.physics.add.collider(bomb2, e,collThing);
		this.physics.add.collider(bomb2, f,collThing);
		this.physics.add.collider(bomb2, g,collThing);
		this.physics.add.collider(bomb2, h,collThing);
		this.physics.add.collider(bomb2, i,collThing);
		this.physics.add.collider(bomb2, j,collThing);
		this.physics.add.collider(bomb2, k,collThing);
		this.physics.add.collider(bomb2, l,collThing);
		this.physics.add.collider(bomb2, p,collThing);
		this.physics.add.collider(bomb2, monster1, collThing);
		this.physics.add.collider(bomb2, monster2, collThing);
		this.physics.add.collider(bomb2, monster3, collThing);

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
		game2_bg=this.sound.add('game2_bg',{
			volume:1,
			loop:true
		});
		game2_bg.play();//音效太吵可以先關掉*/
		},
		update: function(){
			if(isMove){//跟著滑鼠
				ball.x=this.input.x;
				ball.y=this.input.y;
			}
			attack.x+=2;//控制怪物1的攻擊
			if(monster2.body.velocity.y <= 0){//控制怪物2
				monster2.anims.play('up', true);
			}
			else{
				monster2.anims.play('down', true);
			}
			if(monster3.x<=570){//控制怪物3
				m3=false;
				
			}
			else if(monster3.x>=870){
				m3=true;
			}
			if(m3){
				monster3.x-=0.5;
				monster3.anims.play('left', true);
			}
			else{
				monster3.x+=0.5;
				monster3.anims.play('right', true);
			}
			bomb1.rotation += 0.1;
			bomb2.rotation += 0.1;
		},
	}
