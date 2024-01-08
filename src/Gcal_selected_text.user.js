// ==UserScript==
// @name         Google Calendar Event Adder
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds events to Google Calendar from text on web pages.
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your GoogleCalendarAddBookmarklet class definition here:
/**
 * A class representing a bookmarklet to add events to Google Calendar.
 * It parses textual date and time information and creates a URL for a Google Calendar event.
 */
class GoogleCalendarAddBookmarklet {
    /**
     * Initializes the bookmarklet with the current date/time and prepares the RegExp utility.
     * @param {Date} NOW - The current date and time; defaults to new Date() if not provided.
     */
    constructor(NOW) {
        this._NOW = NOW || new Date();
        this.reSweetDate = new GoogleCalendarAddBookmarklet_RegExpSweet();
        this.reSweetDate.addSyntax({'(': '[（\\(]', ')': '[\\)）]'});
        this.reSweetDate.addSyntax({' ': '\\s*'});
        this.reSweetDate.addSyntax({'  ': '\\s+'});
        this.reSweetDate.addSyntax({'<': '(?:', '>': ')?'});
        this.reSweetDate.addSyntax({
            WEEK: '(Sun|Mon|Tue|Wed|Thu|Fri|Sat)',
            TO: '(?:to|~|-)',
            D2: '\\d{1,2}',
            HEISEI: '(?:Heisei?|[Hh]\\.?)',
            SHOWA: '(?:Showa?|[Ss]\\.?)',
            YYYY: '(?:\\d{4}|(?:HEISEI|SHOWA) \\d{1,2})',
            TIME_JA: '(D2) hour <(D2 minute|half) <D2 second>>',
            TIME_EN: '(D2):(D2)<:D2>',
            MONTH: '[A-Z][a-z]{2,8}',
            D2TH: '\\d{1,2}(?:st|nd|rd|th)?'
        });
    }

    /**
     * Normalizes spaces by converting full-width spaces to regular spaces and removing extra whitespace.
     * @param {string} selected - The string to normalize.
     * @returns {string} - The normalized string.
     */
    _normalizeSpaces(selected) {
        return selected.replace(/　/g, ' ').replace(/\s+/g, ' ').trim();
    }

    /**
     * Normalizes wide characters to their standard forms, particularly useful for Japanese text.
     * @param {string} selected - The string to normalize.
     * @returns {string} - The normalized string.
     */
    _normalizeWideChars(selected) {
        return selected.replace(/[０-９／．：－]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0)); // Convert to half-width characters
    }

    /**
     * Picks up date information from the selected text using a variety of regular expressions.
     * @param {string} selected - The string to extract dates from.
     * @returns {Array} - An array of extracted date information.
     */
    _pickupDate(selected) {
        // Regular expressions for various date and time formats
        const RE_DATES = [
            // Various date formats (YYYY-MM-DD, MM/DD/YYYY, etc.)
            // ...
        ];
        const RE_TIMES = [
            // Various time formats (HH:MM:SS, HH hour MM minute, etc.)
            // ...
        ];
        // ...

        let dtReList = [];
        // Combine date and time regular expressions and compile them
        // ...

        let pickups = [];
        // Use the compiled regex to find dates and times in the selected text
        // ...

        return pickups;
    }

    /**
     * Further normalizes and structures the pickup dates for processing.
     * @param {Array} pickups - The raw pickup date information.
     * @returns {Array} - The normalized and structured date information.
     */
    _normalizePickups(pickups) {
        // ...
    }

    /**
     * Normalizes year, month, and day information, including handling of special cases.
     * @param {string} y - Year as a string.
     * @param {string} m - Month as a string.
     * @param {string} d - Day as a string.
     * @returns {Array} - The normalized [year, month, day].
     */
    _normalizeYmd(y, m, d) {
        // ...
    }

    // ... (Continue to refactor other methods with comments in a similar fashion)

    /**
     * The main function to be called with the text to parse. It creates the Google Calendar event URL.
     * @param {string} selected - The text containing date and time information.
     * @param {function} open - Function to open the generated URL.
     * @returns {string} - The dates string for the Google Calendar URL.
     */
    popup(selected, open) {
        // ...
    }
}

/**
 * A helper class for managing regular expressions, especially for date and time parsing.
 */
class GoogleCalendarAddBookmarklet_RegExpSweet {
    /**
     * Initializes the helper class for regular expression management.
     */
    constructor() {
        this.replaces = [];
    }

    /**
     * Adds syntax shortcuts for later use in regular expressions.
     * @param {Object} replacements - The object with shorthand as keys and regex strings as values.
     */
    addSyntax(replacements) {
        // ...
    }

    /**
     * Converts a string with shorthand notations into a full regular expression.
     * @param {string} regExpStr - The string to convert.
     * @param {string} [flags] - Regular expression flags.
     * @returns {RegExp} - The resulting regular expression.
     */
    toRegExp(regExpStr, flags) {
        // ...
    }
}
    // If needed, other helper classes or functions can be defined here

    // Activation code: Adds menu item in Tampermonkey for this script
    function addMenuItem() {
        if (typeof GM_registerMenuCommand !== "undefined") {
            GM_registerMenuCommand("Add Event to Google Calendar", () => {
                let selectedText = window.getSelection().toString();
                if (selectedText) {
                    let bookmarklet = new GoogleCalendarAddBookmarklet();
                    bookmarklet.popup(selectedText, (url) => window.open(url, '_blank'));
                } else {
                    alert("Please select some text that includes date and time information.");
                }
            }, 'g');
        }
    }

    // Call the function to add the menu item
    addMenuItem();

})();
