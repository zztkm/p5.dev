declare const p5: any; // これだと動く
// import p5 from "p5"; // こっちは動かない
import "p5/lib/addons/p5.sound";

const sketch = (p: p5) => {

	/** 初期化 */
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.background("#292a33");
		p.noFill();
	};

	/** フレームごとの描画処理 */
	p.draw = () => {
		p.stroke(p.random(180, 255));
		p.ellipse(p.width / 2, p.height / 2, p.random(50, 300), p.random(50, 300));
	};
};

new p5(sketch)