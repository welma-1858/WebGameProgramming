
const end = {
key: 'end',
preload: function(){
	this.load.image('end_Design', 'img/end_Design.png');//載入說明
	this.load.spritesheet('againBtn', 'img/againBtn.png', {frameWidth: 120, frameHeight: 40});

	this.load.audio('first_bg','audio/first_bg.mp3');//載入背景音樂
},
create: function(){
   //把他們都畫上去
	
    end_Design = this.physics.add.staticSprite(450, 350, 'end_Design');
	
	let next = this.add.sprite(800, 645, 'againBtn');
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
		this.scene.start('first');
		first_bg.stop();
	})
	
	first_bg = this.sound.add('first_bg');
	first_bg.play();
	
	
},
update: function(){}
	
}