declare const p5: any; // これだと動く
// import p5 from "p5"; // こっちは動かない
import "p5/lib/addons/p5.sound";

const sketch = (p: p5) => {

	/** 初期化 */
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
	};

	/** フレームごとの描画処理 */
	p.draw = () => {
		p.background("#292a33");
		p.strokeWeight(10);
		p.fill(240);
		p.circle(p.width / 2, p.height / 2, 200);
	};
};

new p5(sketch)