
const s5 = {
key: 's5',
preload: function(){
	this.load.image('story5', 'img/story5.png');//載入說明
	this.load.spritesheet('continueBtn', 'img/continueBtn.png', {frameWidth: 120, frameHeight: 40});

	this.load.audio('s5_bg','audio/s5.mp3');//載入背景音樂
},
create: function(){
   //把他們都畫上去
	
    story5 = this.physics.add.staticSprite(450, 350, 'story5');
	


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
		this.scene.start('s6');
	})
	
	s5_bg = this.sound.add('s5_bg',{
		volume:0.5,
	});
	s5_bg.play();
	
	
},
update: function(){}
	
}