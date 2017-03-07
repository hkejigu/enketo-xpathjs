/**
 * Converts a native Date UTC String to a RFC 3339-compliant date string with local offsets
 * used in JavaRosa, so it replaces the Z in the ISOstring with a local offset
 * @return {string} a datetime string formatted according to RC3339 with local offset
 */

Date.prototype.toISOLocalString = function() {
    //2012-09-05T12:57:00.000-04:00 (ODK)
    var offset = {};
    var pad2 = function(x) {
        return (x < 10) ? '0' + x : x;
    };

    if (this.toString() === 'Invalid Date') {
        return this.toString();
    }

    offset.minstotal = this.getTimezoneOffset();
    offset.direction = (offset.minstotal < 0) ? '+' : '-';
    offset.hrspart = pad2(Math.abs(Math.floor(offset.minstotal / 60)));
    offset.minspart = pad2(Math.abs(Math.floor(offset.minstotal % 60)));

    return new Date(this.getTime() - (offset.minstotal * 60 * 1000)).toISOString()
        .replace('Z', offset.direction + offset.hrspart + ':' + offset.minspart);
};

