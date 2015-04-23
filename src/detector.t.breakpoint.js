(function() {

    var pos_breakpoints = [',', ':', ';'],
        raw_breakpoints = ['-', '—', '/'];

	// Flag breakpoints at the token level
    compendium.detect.addDetector('t', function(token, index, sentence) {
        var raw = token.raw,
            pos = token.pos;

        // Simple breakpoints
        if (pos_breakpoints.indexOf(pos) > -1 || raw_breakpoints.indexOf(raw) > -1) {
            token.profile.breakpoint = true;
        }
    });
}());