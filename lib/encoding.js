/*
 *  MIPS-Simulator : encoding.js [Provide encoding against keyword]
 *  Copyright (C)  2017  Progyan Bhattacharya, Bytes Club
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

/** function: mapToEncoding
 * @desc Realizes The Encoding Type of a Given String
 * @param  {string} keyword  - MIPS Keyword for Encoding
 * @return {string} Standard Name for Encoding
 */
const mapToEncoding = keyword => {
    if (typeof keyword !== "string") {
        throw new TypeError("keyword is expected to be a string.");
    }
    switch (keyword.toLowerCase()) {
        case ".asciiz": {
            return "ASCII";
        }
        default:
            return null;
    }
};

module.exports = mapToEncoding;
