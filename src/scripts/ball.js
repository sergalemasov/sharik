export class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = {
            ul: 'ul',
            dl: 'dl',
            ur: 'ur',
            dr: 'dr'
        }

        this.radius = 25;
        this.setRandomDirection();
    }

    setRandomDirection() {
        const keys = Object.keys(this.directions);
        this.direction = this.directions[keys[Math.floor(Math.random()*keys.length)]];
    }

    getChangingParams() {
        let params;
        switch(this.direction) {
            case this.directions.ul:
                params = {
                    top: '-',
                    left: '-'
                }
                break;
            case this.directions.dl:
                params = {
                    top: '+',
                    left: '-'
                }
                break;
            case this.directions.ur:
                params = {
                    top: '-',
                    left: '+'
                }
                break;
            case this.directions.dr:
                params = {
                    top: '+',
                    left: '+'
                }
                break;
        }

        return params;
    }

    onLeftBorder() {
        switch(this.direction) {
            case this.directions.ul:
                this.direction = this.directions.ur;
                return;
            case this.directions.dl:
                this.direction = this.directions.dr;
                return;
        }
    }

    onRightBorder() {
        switch(this.direction) {
            case this.directions.ur:
                this.direction = this.directions.ul;
                return;
            case this.directions.dr:
                this.direction = this.directions.dl;
                return;
        }
    }

    onTopBorder() {
        console.log('ontopbor', this.direction)
        switch(this.direction) {
            case this.directions.ul:
                this.direction = this.directions.dl;
                return;
            case this.directions.ur:
                this.direction = this.directions.dr;
                return;
        }
    }

    onBottomBorder() {
        switch(this.direction) {
            case this.directions.dl:
                this.direction = this.directions.ul;
                return;
            case this.directions.dr:
                this.direction = this.directions.ur;
                return;
        }
    }

    onTopLeftCorner() {
        this.direction = this.directions.dr;
    }

    onTopRightCorner() {
        this.direction = this.directions.dl;
    }

    onBottomLeftCorner() {
        this.direction = this.directions.ur;
    }

    onBottomRightCorner() {
        this.direction = this.directions.ul;
    }

    setCoords(x, y) {
        this.x = x;
        this.y = y;
    }

    getDirection() {
        return this.direction;
    }

    getBoundaries() {
        return {
            t: this.y - this.radius,
            l: this.x - this.radius,
            r: this.x + this.radius,
            b: this.y + this.radius
        }
    }
}