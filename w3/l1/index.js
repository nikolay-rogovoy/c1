/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function SuperDate(date) {

    if (!String.prototype.padStart) {
        String.prototype.padStart = function padStart(targetLength,padString) {
            targetLength = targetLength>>0; //floor if number or convert non-number to 0;
            padString = String(padString || ' ');
            if (this.length > targetLength) {
                return String(this);
            }
            else {
                targetLength = targetLength-this.length;
                if (targetLength > padString.length) {
                    padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
                }
                return padString.slice(0,targetLength) + String(this);
            }
        };
    }

    var result = {
        value: date,
        value_d: new Date(date),
        add: function (qu, measure) {
            if (qu < 0) {
                throw TypeError('qu < 0');
            }
            return this.addMeasure(qu, measure)
        },
        subtract: function (qu, measure) {
            if (qu < 0) {
                throw TypeError('qu < 0');
            }
            return this.addMeasure(-qu, measure);
        },

        addYears: function (qu) {
            this.value_d.setFullYear(this.value_d.getFullYear() + qu);
            this.setValue();
            return this;
        },

        addMonths: function (qu) {
            this.value_d.setMonth(this.value_d.getMonth() + qu);
            this.setValue();
            return this;
        },

        addDay: function (qu) {
            this.value_d = new Date(this.value_d.getTime() + 86400000 * qu);
            this.setValue();
            return this;
        },

        addHours: function (qu) {
            this.value_d = new Date(this.value_d.getTime() + 3600000 * qu);
            this.setValue();
            return this;
        },

        addMinutes: function (qu) {
            this.value_d = new Date(this.value_d.getTime() + 60000 * qu);
            this.setValue();
            return this;
        },

        setValue: function () {
            this.value = this.value_d.getFullYear().toString().padStart(4, '0') + '-' + (this.value_d.getMonth() + 1).toString().padStart(2, '0') + '-' + this.value_d.getDate().toString().padStart(2, '0') + ' ' + this.value_d.getHours().toString().padStart(2, '0') + ':' + this.value_d.getMinutes().toString().padStart(2, '0');
        },

        addMeasure: function (qu, measure) {
            switch (measure) {
                case 'years':
                    return this.addYears(qu);
                case 'months':
                    return this.addMonths(qu);
                case 'days':
                    return this.addDay(qu);
                case 'hours':
                    return this.addHours(qu);
                case 'minutes':
                    return this.addMinutes(qu);
                default:
                    throw TypeError('unknow measure=' + measure);
            }
        }
    };
    return result;
}
/*
module.exports = function SuperDate(date) {
    console.log(this);
    this.value = new Date(date);

    SuperDate.prototype.add = function (qu, measure) {
        if (qu < 0) {
            throw TypeError('qu < 0');
        }
        return this.addMeasure(qu, measure);
    };

    SuperDate.prototype.subtract = function (qu, measure) {
        return this.addMeasure(qu, measure);
    };

    SuperDate.prototype.addYears = function (qu) {
        value.setFullYear(this.value.getFullYear() + qu);
        return this;
    };

    SuperDate.prototype.addMonths = function (qu) {
        this.value.setMonth(this.value.getMonth() + qu);
        return this;
    };

    SuperDate.prototype.addDay = function (qu) {
        this.value = new Date(value.getTime() + 86400000 * qu);
        return this;
    };

    SuperDate.prototype.addHours = function (qu) {
        this.value = new Date(value.getTime() + 3600000 * qu);
        return this;
    };

    SuperDate.prototype.addMinutes = function (qu) {
        this.value = new Date(value.getTime() + 60000 * qu);
        return this;
    };

    SuperDate.prototype.addMeasure = function (qu, measure) {
        switch (measure) {
            case 'years':
                return this.addYears(qu);
            case 'months':
                return this.addMonths(qu);
            case 'days':
                return this.addDay(qu);
            case 'hours':
                return this.addHours(qu);
            case 'minutes':
                return this.addMinutes(qu);
            default:
                throw TypeError('unknow measure=' + measure);
        }
    }
};
*/