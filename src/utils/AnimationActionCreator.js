export class AnimationActionCreator {
    constructor(action) {
        this.repetitions = 0;
        this.action = action.bind(this);
    }
    play() {
        this.action();
        this.repetitions += 1;
    }

}