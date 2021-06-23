
const s6 = {
key: 's6',
preload: function(){
	this.load.image('story6', 'img/story6.png');//載入說明
	this.load.spritesheet('continueBtn', 'img/continueBtn.png', {frameWidth: 120, frameHeight: 40});

	this.load.audio('s6_bg','audio/s6.mp3');//載入背景音樂
},
create: function(){
   //把他們都畫上去
	
    story6 = this.physics.add.staticSprite(450, 350, 'story6');
	


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
		this.scene.start('s7');
	})
	
	s6_bg = this.sound.add('s6_bg',{
		volume:0.5,
	});
	s6_bg.play();
	
	
},
update: function(){}
	
}