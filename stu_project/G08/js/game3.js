	const game3 = {
		key: 'game3',
		preload: function(){
			this.load.image('ball', 'img/ball.png');//載入公主
		this.load.image('key', 'img/key.png');//載入鑰匙
		this.load.image('doorC', 'img/doorC.png');//載入終點 關
		this.load.image('doorO', 'img/doorO.png');//載入終點 開
		this.load.spritesheet('hand', 'img/hand.png', {frameWidth: 201, frameHeight: 50});//載入觸手
		this.load.image('a_3', 'img/a_3.png');//載入a
		this.load.image('b_3', 'img/b_3.png');//載入b
		this.load.image('c_3', 'img/c_3.png');//載入c
		this.load.image('d_3', 'img/d_3.png');//載入d
		this.load.image('e_3', 'img/e_3.png');//載入e
		this.load.image('f_3', 'img/f_3.png');//載入f
		this.load.image('g_3', 'img/g_3.png');//載入g
		this.load.image('h_3', 'img/h_3.png');//載入h
		this.load.image('i_3', 'img/i_3.png');//載入i
		this.load.image('j_3', 'img/j_3.png');//載入j
		this.load.image('k_3', 'img/k_3.png');//載入k
		this.load.image('l_3', 'img/l_3.png');//載入L
		this.load.image('m_3', 'img/m_3.png');//載入m
        this.load.image('p', 'img/p.png');//載入p
		this.load.audio('game3_bg','audio/game3_bg.mp3');//載入背景音樂
		this.load.audio('game_c','audio/OpenDoor.mp3');//載入過關音樂
		this.load.audio('game_m','audio/game_monster.mp3');//載入怪物音樂
		this.load.audio('game_w','audio/game_wall.mp3');//載入撞牆音樂
		this.load.audio('game_k','audio/game_getkey.mp3');//載入拿到鑰匙音樂
		this.load.spritesheet('finalBtn', 'img/finalBtn.png', {frameWidth: 120, frameHeight: 40});
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
		keys.create(390, 130, 'key');
		keys.create(30, 585, 'key');
		keys.create(665, 30, 'key');
		keys.create(555, 130, 'key');
		keys.create(850, 30, 'key');
		keys.create(40, 300, 'key');
		keys.create(850, 400, 'key');
	
		hand1 = this.physics.add.sprite(0, 377, 'hand');
		hand2 = this.physics.add.sprite(390, 500, 'hand').setScale(0.4);
		hand3 = this.physics.add.sprite(770, 137, 'hand').setScale(0.33);
		hand4 = this.physics.add.sprite(830, 322, 'hand').setFlipX(true);

		a = this.physics.add.staticSprite(130,470, 'a_3');
		b = this.physics.add.staticSprite(38, 380, 'b_3');
		c = this.physics.add.sprite(520, 585, 'c_3');
		d = this.physics.add.staticSprite(755, 500, 'd_3');
		e = this.physics.add.sprite(630, 410, 'e_3');
		f = this.physics.add.staticSprite(390, 450, 'f_3');
		g = this.physics.add.staticSprite(810, 320, 'g_3');
		h = this.physics.add.sprite(530, 213, 'h_3');
		i = this.physics.add.staticSprite(491.5, 115, 'i_3');
		j = this.physics.add.staticSprite(755, 90, 'j_3');
		k = this.physics.add.staticSprite(395, 45, 'k_3');
		l = this.physics.add.sprite(261, 210, 'l_3');
		m = this.physics.add.staticSprite(38, 165, 'm_3');
		p = this.physics.add.staticSprite(450, 665, 'p');

		//怪物精靈圖
		this.anims.create({
			key: 'hhh',
			frames: this.anims.generateFrameNumbers('hand', {start: 0, end: 2}),
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
			const monsterkill = () => {
				if(isMove){
					game_m.play();
					isMove = false;
					ball.setPosition(saveX, saveY);
				}
			}
		
			const pass = () => {
				if(keys.countActive(true) === 0){
					game_c.play();
					ball.disableBody(true, true);
					this.gameStop = true;
					let next = this.add.sprite(450, 350, 'finalBtn').setScale(2);;
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
						this.scene.start('s4');
						game3_bg.stop();
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
		this.physics.add.collider(ball, hand1, monsterkill);
		this.physics.add.collider(ball, hand2, monsterkill);
		this.physics.add.collider(ball, hand3, monsterkill);
		this.physics.add.collider(ball, hand4, monsterkill);

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
		game3_bg=this.sound.add('game3_bg',{
			volume:1,
			loop:true
		});
		game3_bg.play();//音效太吵可以先關掉*/
		},
		update: function(){
			if(isMove){//跟著滑鼠
				ball.x=this.input.x;
				ball.y=this.input.y;
			}
			//控制牆l
			if(l.y<=130){wl=false;}
			else if(l.y>=300){wl=true;}
			if(wl){l.y-=1.2;}
			else{l.y+=1.2;}
			//控制牆c
			if(c.x<=200){wc=false;}
			else if(c.x>=520){wc=true;}
			if(wc){c.x-=1.7;}
			else{c.x+=1.7;}
			//控制牆h
			if(h.x<=530){wh=false;}	
			else if(h.x>=600){wh=true;}
			if(wh){h.x-=0.7;}
			else{h.x+=0.7;}
			//控制牆e
			if(e.x<=560){we=false;}
			else if(e.x>=660){we=true;}
			if(we){e.x-=0.7;}
			else{e.x+=0.7;}
			//控制1
			if(hand1.x<=0){h1=false;}
			else if(hand1.x>=100){h1=true;}
			if(h1){hand1.x-=0.3;}
			else{hand1.x+=1;}
			//控制2
			if(hand2.x<=390){h2=false;}
			else if(hand2.x>=470){h2=true;}
			if(h2){hand2.x-=0.5;}
			else{hand2.x+=1.2;}
			//控制3
			if(hand3.x<=753){h3=false;}
			else if(hand3.x>=820){h3=true;}
			if(h3){hand3.x-=0.6;}
			else{hand3.x+=1.3;}
			//控制4
			if(hand4.x<=700){h4=false;}
			else if(hand4.x>=830){h4=true;}
			if(h4){hand4.x-=0.9;}
			else{hand4.x+=0.2;}
	
			hand1.anims.play('hhh', true);
			hand2.anims.play('hhh', true);
			hand3.anims.play('hhh', true);
			hand4.anims.play('hhh', true);
		},
	}