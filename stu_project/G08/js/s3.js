const s3 = {
key: 's3',
preload: function(){
	this.load.image('story3', 'img/story3.png');//載入說明
	this.load.spritesheet('startBtn', 'img/startBtn.png', {frameWidth: 120, frameHeight: 40});

	this.load.audio('s3_bg','audio/s3.mp3');//載入背景音樂
},
create: function(){
   //把他們都畫上去
	
    story3 = this.physics.add.staticSprite(450, 350, 'story3');
	

	let next = this.add.sprite(800, 645, 'startBtn');
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
		this.scene.start('game1');
	})
	
	
	s3_bg = this.sound.add('s3_bg',{
		volume:0.5,
	});
	s3_bg.play();
	
},
update: function(){}
	
}