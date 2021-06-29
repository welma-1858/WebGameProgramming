/*
let explan, startBtn, ball, key, monster1, monster2, monster3, monster4, attack, doorC, doorO, a, b, c, d, e, f, g, h, i, j, k, l, m, n, p;
let saveX=45,saveY=45;//紀錄儲存點位置(吃到鑰匙的位置)
let isMove=false,m2=false,m4=false;
let game_bg, game_c, game_m, game_w, game_k, game_s1, game_s2;
*/
const first = {
key: 'first',
preload: function(){
	this.load.image('NameDesign', 'img/NameDesign.png');//載入說明
	this.load.spritesheet('continueBtn', 'img/continueBtn.png', {frameWidth: 120, frameHeight: 40});

	this.load.audio('first_bg','audio/first_bg.mp3');//載入背景音樂
},
create: function(){
   //把他們都畫上去

	NameDesign = this.physics.add.staticSprite(450, 350, 'NameDesign');
	
	let next = this.add.sprite(800, 645, 'continueBtn');
	next.setInteractive();
	next.on('pointerover', () => {
		next.setFrame(1);
	})
	next.on('pointerout', () => {
		next.setFrame(0);
	})
	next.on('pointerdown', () => {
		next.setFrame(2)
	})
	next.on('pointerup', () => {
		next.setFrame(0);
		this.scene.start('s1');
		first_bg.stop();
	})

	first_bg = this.sound.add('first_bg');
	first_bg.play();
},
update: function(){}
	
}