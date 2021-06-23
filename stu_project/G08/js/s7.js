
const s7 = {
key: 's7',
preload: function(){
	this.load.image('story7', 'img/story7.png');//載入說明
	this.load.spritesheet('continueBtn', 'img/continueBtn.png', {frameWidth: 120, frameHeight: 40});

	this.load.audio('s7_bg','audio/s7.mp3');//載入背景音樂
},
create: function(){
   //把他們都畫上去
	
    story7 = this.physics.add.staticSprite(450, 350, 'story7');
	


	let next = this.add.sprite(800, 645, 'continueBtn');
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
		this.scene.start('end');
	})
	
	s7_bg = this.sound.add('s7_bg',{
		volume:0.5,
	});
	s7_bg.play();
	
	
},
update: function(){}
	
}