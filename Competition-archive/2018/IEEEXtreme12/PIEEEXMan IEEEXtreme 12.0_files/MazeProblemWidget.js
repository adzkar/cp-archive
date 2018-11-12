define(["exports", "UI", "Utils"], function (exports, _UI, _Utils) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.MazeProblemWidget = undefined;
    exports.registerMarkup = registerMarkup;

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    var _templateObject = _taggedTemplateLiteral([""], [""]),
        _templateObject2 = _taggedTemplateLiteral(["\n"], ["\\n"]);

    function _taggedTemplateLiteral(strings, raw) {
        return Object.freeze(Object.defineProperties(strings, {
            raw: {
                value: Object.freeze(raw)
            }
        }));
    }

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _desc, _value, _class, _descriptor, _descriptor2, _dec, _class3;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var ADAM_COLOR = "#008dff";
    var EVE_COLOR = "#ff642c";
    var COINS_COLOR = "#CCA45F";

    var MazeCell = function (_SVG$Group) {
        _inherits(MazeCell, _SVG$Group);

        function MazeCell() {
            _classCallCheck(this, MazeCell);

            return _possibleConstructorReturn(this, (MazeCell.__proto__ || Object.getPrototypeOf(MazeCell)).apply(this, arguments));
        }

        _createClass(MazeCell, [{
            key: "getDefaultOptions",
            value: function getDefaultOptions() {
                return Object.assign({}, _get(MazeCell.prototype.__proto__ || Object.getPrototypeOf(MazeCell.prototype), "getDefaultOptions", this).call(this), {
                    size: 100,
                    font: 50,
                    strokeWidth: 3
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _options = this.options,
                    neighbors = _options.neighbors,
                    size = _options.size,
                    font = _options.font,
                    value = _options.value,
                    strokeWidth = _options.strokeWidth;

                var walls = [];
                if (neighbors[0]) {
                    walls.push(_UI.UI.createElement(_UI.SVG.Path, { d: "M 0 0 l " + size + " 0", stroke: "#8a8a8a", strokeWidth: strokeWidth }));
                }
                if (neighbors[1]) {
                    walls.push(_UI.UI.createElement(_UI.SVG.Path, { d: "M " + size + " 0 l 0 " + size, stroke: "#8a8a8a", strokeWidth: strokeWidth }));
                }
                if (neighbors[2]) {
                    walls.push(_UI.UI.createElement(_UI.SVG.Path, { d: "M " + size + " " + size + " l " + -size + " 0", stroke: "#8a8a8a", strokeWidth: strokeWidth }));
                }
                if (neighbors[3]) {
                    walls.push(_UI.UI.createElement(_UI.SVG.Path, { d: "M 0 " + size + " l 0 " + -size, stroke: "#8a8a8a", strokeWidth: strokeWidth }));
                }
                return [_UI.UI.createElement(_UI.SVG.Rect, { height: size, width: size, fill: "#e6e6e6" }), _UI.UI.createElement(_UI.SVG.Rect, { height: size - strokeWidth, width: size - strokeWidth, fill: "transparent",
                    stroke: "#ddd", strokeWidth: strokeWidth,
                    transform: "translate(" + strokeWidth / 2 + ", " + strokeWidth / 2 + ")" }), _UI.UI.createElement(_UI.SVG.Text, { text: value, fontSize: font, x: size * .86, y: size * .86 }), walls];
            }
        }]);

        return MazeCell;
    }(_UI.SVG.Group);

    var bigGame = false;

    var PlayerCell = function (_SVG$Group2) {
        _inherits(PlayerCell, _SVG$Group2);

        function PlayerCell() {
            _classCallCheck(this, PlayerCell);

            return _possibleConstructorReturn(this, (PlayerCell.__proto__ || Object.getPrototypeOf(PlayerCell)).apply(this, arguments));
        }

        _createClass(PlayerCell, [{
            key: "getDefaultOptions",
            value: function getDefaultOptions() {
                return Object.assign({}, _get(PlayerCell.prototype.__proto__ || Object.getPrototypeOf(PlayerCell.prototype), "getDefaultOptions", this).call(this), {
                    fill: "black",
                    size: 70,
                    cellSize: 100,
                    style: {
                        transition: bigGame ? "" : "transform .3s"
                    },
                    side: "left",
                    font: 20
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _options2 = this.options,
                    cellSize = _options2.cellSize,
                    fill = _options2.fill,
                    size = _options2.size,
                    side = _options2.side,
                    font = _options2.font;


                var yOffset = side === "right" ? size * .55 : -size * .05;

                return [_UI.UI.createElement(_UI.SVG.Rect, { rx: size / 7, height: size / 2, width: size * .9, fill: fill, transform: "translate(" + (cellSize - size) / 2 + ", " + ((cellSize - size) / 2 + yOffset) + ")" }), _UI.UI.createElement(_UI.SVG.Text, { fill: "white", text: side === "right" ? "You" : "Judge", fontSize: font, x: (cellSize - size) / 2 + size / 5.5, y: (cellSize - size) / 2 + yOffset - size / 4.5, transform: "translate(" + size / 4 + ", " + size / 2 + ")" })];
            }
        }]);

        return PlayerCell;
    }(_UI.SVG.Group);

    var CoinCell = function (_SVG$Group3) {
        _inherits(CoinCell, _SVG$Group3);

        function CoinCell() {
            _classCallCheck(this, CoinCell);

            return _possibleConstructorReturn(this, (CoinCell.__proto__ || Object.getPrototypeOf(CoinCell)).apply(this, arguments));
        }

        _createClass(CoinCell, [{
            key: "getDefaultOptions",
            value: function getDefaultOptions() {
                return Object.assign({}, _get(CoinCell.prototype.__proto__ || Object.getPrototypeOf(CoinCell.prototype), "getDefaultOptions", this).call(this), {
                    fill: "#FFED75",
                    stroke: "#CCA45F",
                    size: 70,
                    cellSize: 100
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _options3 = this.options,
                    cellSize = _options3.cellSize,
                    fill = _options3.fill,
                    size = _options3.size,
                    stroke = _options3.stroke;


                return [_UI.UI.createElement(_UI.SVG.Circle, { radius: size / 2, fill: fill, transform: "translate(" + cellSize / 2 + ", " + cellSize / 2 + ")",
                    stroke: stroke, strokeWidth: size * .07 })];
            }
        }]);

        return CoinCell;
    }(_UI.SVG.Group);

    var GameBoard = function (_SVG$SVGRoot) {
        _inherits(GameBoard, _SVG$SVGRoot);

        function GameBoard() {
            _classCallCheck(this, GameBoard);

            return _possibleConstructorReturn(this, (GameBoard.__proto__ || Object.getPrototypeOf(GameBoard)).apply(this, arguments));
        }

        _createClass(GameBoard, [{
            key: "getDefaultOptions",
            value: function getDefaultOptions() {
                return Object.assign({}, _get(GameBoard.prototype.__proto__ || Object.getPrototypeOf(GameBoard.prototype), "getDefaultOptions", this).call(this), {
                    cellSize: 100
                });
            }
        }, {
            key: "extraNodeAttributes",
            value: function extraNodeAttributes(attr) {
                _get(GameBoard.prototype.__proto__ || Object.getPrototypeOf(GameBoard.prototype), "extraNodeAttributes", this).call(this, attr);
                var _options4 = this.options,
                    game = _options4.game,
                    cellSize = _options4.cellSize;

                attr.setAttribute("width", game.width * cellSize);
                attr.setAttribute("height", game.height * cellSize);
            }
        }, {
            key: "render",
            value: function render() {
                var _options5 = this.options,
                    game = _options5.game,
                    cellSize = _options5.cellSize;


                var cells = [];
                var height = game.height,
                    width = game.width,
                    matrix = game.matrix;


                for (var i = 1; i < 2 * height + 1; i += 2) {
                    for (var j = 1; j < 2 * width + 1; j += 2) {
                        cells.push(_UI.UI.createElement(MazeCell, { size: cellSize, font: cellSize * .15, value: "",
                            neighbors: [matrix[i - 1][j] == "#", matrix[i][j + 1] == "#", matrix[i + 1][j] == "#", matrix[i][j - 1] == "#"], strokeWidth: cellSize * .05,
                            transform: "translate(" + (j - 1) / 2 * cellSize + ", " + (i - 1) / 2 * cellSize + ")" }));
                    }
                }

                var playerCells = [];
                playerCells.push(_UI.UI.createElement(PlayerCell, { ref: "eve", fill: EVE_COLOR, cellSize: cellSize, size: cellSize * .65,
                    font: cellSize * .2, side: "right",
                    transform: "translate(" + (game.eveLocation.column - 1) / 2 * cellSize + ",\n                                                 " + (game.eveLocation.row - 1) / 2 * cellSize + ")" }));
                playerCells.push(_UI.UI.createElement(PlayerCell, { ref: "adam", fill: ADAM_COLOR, cellSize: cellSize, size: cellSize * .65,
                    font: cellSize * .2,
                    transform: "translate(" + (game.adamLocation.column - 1) / 2 * cellSize + ",\n                                                 " + (game.adamLocation.row - 1) / 2 * cellSize + ")" }));
                var coins = [];
                for (var _i = 1; _i < 2 * height + 1; _i += 2) {
                    for (var _j = 1; _j < 2 * width + 1; _j += 2) {
                        if (game.coins[_i][_j]) {
                            coins.push(_UI.UI.createElement(CoinCell, { cellSize: cellSize, size: cellSize * .5,
                                transform: "translate(" + (_j - 1) / 2 * cellSize + ", " + (_i - 1) / 2 * cellSize + ")" }));
                        }
                    }
                }

                return [cells, _UI.UI.createElement(
                    _UI.SVG.Group,
                    null,
                    coins
                ), playerCells];
            }
        }]);

        return GameBoard;
    }(_UI.SVG.SVGRoot);

    var GameScoreboardStyle = (_class = function (_StyleSheet) {
        _inherits(GameScoreboardStyle, _StyleSheet);

        function GameScoreboardStyle() {
            var _ref;

            var _temp, _this5, _ret;

            _classCallCheck(this, GameScoreboardStyle);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this5 = _possibleConstructorReturn(this, (_ref = GameScoreboardStyle.__proto__ || Object.getPrototypeOf(GameScoreboardStyle)).call.apply(_ref, [this].concat(args))), _this5), _initDefineProp(_this5, "container", _descriptor, _this5), _initDefineProp(_this5, "coins", _descriptor2, _this5), _temp), _possibleConstructorReturn(_this5, _ret);
        }

        return GameScoreboardStyle;
    }(_UI.StyleSheet), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "container", [_UI.styleRule], {
        enumerable: true,
        initializer: function initializer() {
            return {
                width: "100%",
                display: "flex",
                fontSize: "160%",
                ">*": {
                    textAlign: "center",
                    flex: "1"
                },
                ">:first-child": {
                    color: EVE_COLOR
                },
                ">:last-child": {
                    color: ADAM_COLOR
                }
            };
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "coins", [_UI.styleRule], {
        enumerable: true,
        initializer: function initializer() {
            return {
                fontSize: "140%",
                width: "100%",
                marginTop: "5px",
                marginBottom: "12px",
                color: COINS_COLOR,
                textAlign: "center"
            };
        }
    })), _class);
    var GameScoreboard = (_dec = (0, _UI.registerStyle)(GameScoreboardStyle), _dec(_class3 = function (_UI$Element) {
        _inherits(GameScoreboard, _UI$Element);

        function GameScoreboard() {
            _classCallCheck(this, GameScoreboard);

            return _possibleConstructorReturn(this, (GameScoreboard.__proto__ || Object.getPrototypeOf(GameScoreboard)).apply(this, arguments));
        }

        _createClass(GameScoreboard, [{
            key: "render",
            value: function render() {
                var _options$game = this.options.game,
                    adamScore = _options$game.adamScore,
                    eveScore = _options$game.eveScore;
                var _styleSheet = this.styleSheet,
                    container = _styleSheet.container,
                    coins = _styleSheet.coins;


                var coinsCount = 0;
                for (var i = 0; i < 2 * this.options.game.height + 1; i += 1) {
                    for (var j = 0; j < 2 * this.options.game.width + 1; j += 1) {
                        if (this.options.game.coins[i][j]) {
                            coinsCount += 1;
                        }
                    }
                }

                return [_UI.UI.createElement(
                    "div",
                    { className: container },
                    _UI.UI.createElement(
                        "div",
                        null,
                        "You"
                    ),
                    _UI.UI.createElement(
                        "div",
                        null,
                        "Judge"
                    )
                ), _UI.UI.createElement(
                    "div",
                    { className: container },
                    _UI.UI.createElement(
                        "div",
                        null,
                        eveScore
                    ),
                    _UI.UI.createElement(
                        "div",
                        null,
                        adamScore
                    )
                ), _UI.UI.createElement(
                    "div",
                    { className: coins },
                    "Coins left: ",
                    coinsCount
                )];
            }
        }]);

        return GameScoreboard;
    }(_UI.UI.Element)) || _class3);

    var GameProgressBar = function (_HorizontalSlideBar) {
        _inherits(GameProgressBar, _HorizontalSlideBar);

        function GameProgressBar() {
            _classCallCheck(this, GameProgressBar);

            return _possibleConstructorReturn(this, (GameProgressBar.__proto__ || Object.getPrototypeOf(GameProgressBar)).apply(this, arguments));
        }

        _createClass(GameProgressBar, [{
            key: "setStep",
            value: function setStep(step) {
                this.setValue(step / this.options.length, false);
            }
        }, {
            key: "setValue",
            value: function setValue(value) {
                var dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                value = Math.max(value, 0);
                value = Math.min(value, 1);

                var index = Math.floor(value * (this.options.length + 1));
                if (index > this.options.length) {
                    index = this.options.length;
                }
                var displayValue = index / this.options.length;

                this.options.value = value;
                this.progressBar.set(displayValue);
                this.slider.setStyle(this.getOrientationAttribute(), displayValue * this.options.size - this.options.barSize / 2 + "px");

                if (dispatch) {
                    this.dispatch("change", index);
                }
            }
        }]);

        return GameProgressBar;
    }(_UI.HorizontalSlideBar);

    var INPUT = "3 3\n" + "#######\n" + "#####2#\n" + "#####.#\n" + "#..@..#\n" + "#.#####\n" + "#1#####\n" + "#######";
    var MOVES = "U\nW\nR\nW\nX";

    var MazeProblemWidget = exports.MazeProblemWidget = function (_UI$Element2) {
        _inherits(MazeProblemWidget, _UI$Element2);

        function MazeProblemWidget() {
            _classCallCheck(this, MazeProblemWidget);

            return _possibleConstructorReturn(this, (MazeProblemWidget.__proto__ || Object.getPrototypeOf(MazeProblemWidget)).apply(this, arguments));
        }

        _createClass(MazeProblemWidget, [{
            key: "getDefaultOptions",
            value: function getDefaultOptions() {
                return Object.assign({}, _get(MazeProblemWidget.prototype.__proto__ || Object.getPrototypeOf(MazeProblemWidget.prototype), "getDefaultOptions", this).call(this), {
                    cellSize: 60,
                    stepTimeout: 3000,
                    input: INPUT,
                    moves: MOVES
                });
            }
        }, {
            key: "extraNodeAttributes",
            value: function extraNodeAttributes(attr) {
                _get(MazeProblemWidget.prototype.__proto__ || Object.getPrototypeOf(MazeProblemWidget.prototype), "extraNodeAttributes", this).call(this, attr);
                attr.setStyle("width", "100%");
            }
        }, {
            key: "getJsonFromStateInput",
            value: function getJsonFromStateInput(input) {
                try {
                    var tokens = input.trim().split(_templateObject2).join(_templateObject);
                    var buffer = 0;

                    var nextInt = function nextInt() {
                        if (tokens.length > buffer) {
                            var number = "";
                            while (tokens.length > buffer && tokens[buffer] >= "0" && tokens[buffer] <= "9") {
                                number += tokens[buffer++];
                            }
                            return parseInt(number);
                        }
                        throw "Missing input";
                    };

                    var nextChar = function nextChar() {
                        if (tokens.length > buffer) {
                            return tokens[buffer++];
                        }
                        throw "Missing input";
                    };

                    var ignoreSpace = function ignoreSpace() {
                        while (tokens[buffer] === ' ') {
                            ++buffer;
                        }
                    };

                    var height = nextInt();
                    ignoreSpace();
                    var width = nextInt();

                    var matrix = [],
                        coins = [];
                    var eveLocation = void 0,
                        adamLocation = void 0;

                    for (var i = 0; i < 2 * height + 1; i += 1) {
                        matrix.push([]);
                        coins.push([]);
                        for (var j = 0; j < 2 * width + 1; j += 1) {
                            matrix[i][j] = nextChar();
                            if (matrix[i][j] == '1') {
                                eveLocation = { row: i, column: j };
                            } else if (matrix[i][j] == '2') {
                                adamLocation = { row: i, column: j };
                            } else if (matrix[i][j] == '@') {
                                coins[i][j] = true;
                            }
                        }
                    }

                    return Object.assign({ error: false }, { width: width, height: height, matrix: matrix, coins: coins, eveLocation: eveLocation, adamLocation: adamLocation });
                } catch (e) {
                    return { error: true };
                }
            }
        }, {
            key: "getJsonFromMovesInput",
            value: function getJsonFromMovesInput(input) {
                try {
                    var tokens = input.trim().replace(/\s+/g, '').split(_templateObject);
                    var foundX = false;

                    if (tokens.length === 0) {
                        throw "Empty input";
                    }

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        var _loop = function _loop() {
                            var token = _step.value;

                            if ([].concat(_toConsumableArray("UDLRW")).find(function (move) {
                                return move == token;
                            })) {
                                return "continue";
                            } else if (token === "X" && !foundX) {
                                foundX = true;
                                return "continue";
                            } else {
                                throw "Wrong input";
                            }
                        };

                        for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var _ret2 = _loop();

                            if (_ret2 === "continue") continue;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    if (tokens[tokens.length - 1] !== "X" || !tokens.length % 2) {
                        throw "Wrong input";
                    }

                    tokens.pop();

                    return { error: false, moves: tokens };
                } catch (e) {
                    return { error: true };
                }
            }
        }, {
            key: "initGameState",
            value: function initGameState() {
                this.game = {
                    width: this.cnf.width,
                    height: this.cnf.height,
                    matrix: this.cnf.matrix,
                    eveLocation: Object.assign({}, this.cnf.eveLocation),
                    adamLocation: Object.assign({}, this.cnf.adamLocation),
                    eveScore: 0,
                    adamScore: 0,
                    movesCount: 0,
                    coins: [],
                    moves: this.mvs.moves
                };

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.cnf.coins[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var coinsRow = _step2.value;

                        this.game.coins.push(Array.from(coinsRow));
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }, {
            key: "jumpToStep",
            value: function jumpToStep(stepIndex) {
                this.initGameState();

                for (var i = 0; i < stepIndex; i += 1) {
                    this.advanceStep();
                }
            }
        }, {
            key: "applyMoveIfValid",
            value: function applyMoveIfValid(location, move) {
                var matrix = this.game.matrix;

                if (move == "U" && matrix[location.row - 1][location.column] == "#" || move == "L" && matrix[location.row][location.column - 1] == "#" || move == "R" && matrix[location.row][location.column + 1] == "#" || move == "D" && matrix[location.row + 1][location.column] == "#") {
                    return false;
                }

                var newLocation = Object.assign({}, location);
                if (move == "U") {
                    newLocation.row -= 2;
                } else if (move == "D") {
                    newLocation.row += 2;
                } else if (move == "L") {
                    newLocation.column -= 2;
                } else if (move == "R") {
                    newLocation.column += 2;
                }

                if (matrix[newLocation.row][newLocation.column] == "#") {
                    return false;
                }
                location.row = newLocation.row;
                location.column = newLocation.column;

                return true;
            }
        }, {
            key: "advanceStep",
            value: function advanceStep() {
                var game = this.game;

                var moveIndex = game.movesCount;

                if (moveIndex < game.moves.length) {
                    var playerLocation = moveIndex % 2 ? game.adamLocation : game.eveLocation;
                    if (this.applyMoveIfValid(playerLocation, game.moves[moveIndex])) {
                        if (game.coins[playerLocation.row][playerLocation.column]) {
                            if (moveIndex % 2) {
                                game.adamScore += 1;
                            } else {
                                game.eveScore += 1;
                            }
                            game.coins[playerLocation.row][playerLocation.column] = false;
                        }
                    }
                    game.movesCount += 1;
                }
            }
        }, {
            key: "updateGame",
            value: function updateGame() {
                if (this.game != this.gameBoard.options.game) {
                    this.gameBoard.updateOptions({
                        game: this.game
                    });
                }
                this.gameScoreboard.updateOptions({
                    game: this.game
                });
                this.slideBar.setStep(this.game.movesCount);
                this.moveSelect.setIndex(this.game.movesCount);
            }
        }, {
            key: "redraw",
            value: function redraw() {
                if (this.redrawOccured) {
                    this.initGameState();
                    this.play.options.state = "rewind";
                    this.play.setFaIcon("undo");
                    clearTimeout(this.playing);
                }
                this.redrawOccured = true;

                return _get(MazeProblemWidget.prototype.__proto__ || Object.getPrototypeOf(MazeProblemWidget.prototype), "redraw", this).call(this);
            }
        }, {
            key: "render",
            value: function render() {
                var _this9 = this;

                this.cnf = this.getJsonFromStateInput(this.options.input);
                this.mvs = this.getJsonFromMovesInput(this.options.moves);

                var errorsExist = this.cnf.error || this.mvs.error;

                if (!errorsExist) {
                    this.initGameState();
                }

                this.movesRedraw = this.stateRedraw = true;

                var loadLabel = errorsExist ? "Invalid Inputs" : "Loaded";
                var loadLevel = errorsExist ? _UI.Level.DANGER : _UI.Level.SUCCESS;

                var speeds = [{
                    speed: 1,
                    toString: function toString() {
                        return ".25x";
                    }
                }, {
                    speed: 2,
                    toString: function toString() {
                        return ".5x";
                    }
                }, {
                    speed: 4,
                    toString: function toString() {
                        return "1x";
                    }
                }, {
                    speed: 8,
                    toString: function toString() {
                        return "2x";
                    }
                }, {
                    speed: 16,
                    toString: function toString() {
                        return "4x";
                    }
                }, {
                    speed: 32,
                    toString: function toString() {
                        return "8x";
                    }
                }, {
                    speed: 64,
                    toString: function toString() {
                        return "16x";
                    }
                }];

                this.moves = [];

                var _loop2 = function _loop2(i) {
                    _this9.moves.push({
                        move: i,
                        toString: function toString() {
                            return i;
                        }
                    });
                };

                for (var i = 0; i <= this.game.moves.length; i += 1) {
                    _loop2(i);
                }

                var cellSize = Math.min(Math.max(window.innerHeight / 2.5, 800) / this.game.height, Math.min(600 / this.game.height, this.parent.getWidth() / this.game.width));
                this.desiredWidth = cellSize * this.game.width;

                if (this.game.width > 12) {
                    bigGame = true;
                } else {
                    bigGame = false;
                }

                return [_UI.UI.createElement(GameBoard, { ref: "gameBoard", game: this.game, cellSize: cellSize }), _UI.UI.createElement(GameScoreboard, { ref: "gameScoreboard", game: this.game }), _UI.UI.createElement(
                    "div",
                    { style: { display: "flex" } },
                    _UI.UI.createElement(
                        "div",
                        { style: { flex: "1" } },
                        _UI.UI.createElement(_UI.Button, { faIcon: "chevron-left", ref: "previous" }),
                        _UI.UI.createElement(_UI.Button, { faIcon: "chevron-right", ref: "next" }),
                        _UI.UI.createElement(_UI.Button, { faIcon: "play", ref: "play", state: "paused" })
                    ),
                    _UI.UI.createElement(
                        "span",
                        { style: { flex: "1" } },
                        _UI.UI.createElement(
                            "span",
                            null,
                            "Move:"
                        ),
                        _UI.UI.createElement(_UI.Select, { ref: "moveSelect", options: this.moves, selected: this.moves[0] }),
                        _UI.UI.createElement(
                            "span",
                            null,
                            " of ",
                            this.game.moves.length
                        )
                    ),
                    _UI.UI.createElement(
                        "span",
                        { style: { flex: "1" } },
                        _UI.UI.createElement(
                            "span",
                            null,
                            "Speed:"
                        ),
                        _UI.UI.createElement(_UI.Select, { ref: "speedSelect", options: speeds, selected: speeds[2] })
                    )
                ), _UI.UI.createElement(GameProgressBar, { ref: "slideBar", size: this.desiredWidth, length: this.game.moves.length, value: 0 }), _UI.UI.createElement(_UI.Button, { label: loadLabel, ref: "load", level: loadLevel, disabled: true, style: { display: "block" } }), _UI.UI.createElement(
                    "div",
                    { style: { display: "flex" } },
                    _UI.UI.createElement(
                        "div",
                        { style: { flex: 1 } },
                        _UI.UI.createElement(
                            "div",
                            null,
                            "Moves:"
                        ),
                        _UI.UI.createElement(_UI.CodeEditor, { ref: "movesInput", numLines: 20, maxLines: 20, value: this.options.moves })
                    ),
                    _UI.UI.createElement(
                        "div",
                        { style: { flex: 1 } },
                        _UI.UI.createElement(
                            "div",
                            null,
                            "State:"
                        ),
                        _UI.UI.createElement(_UI.CodeEditor, { ref: "stateInput", numLines: 20, maxLines: 20, value: this.options.input })
                    )
                )];
            }
        }, {
            key: "onMount",
            value: function onMount() {
                var _this10 = this;

                _get(MazeProblemWidget.prototype.__proto__ || Object.getPrototypeOf(MazeProblemWidget.prototype), "onMount", this).call(this);

                this.next.addClickListener(function () {
                    _this10.advanceStep();
                    _this10.updateGame();
                });
                this.previous.addClickListener(function () {
                    _this10.jumpToStep(_this10.game.movesCount - 1);
                    _this10.updateGame();
                });
                this.slideBar.addListener("change", function (value) {
                    _this10.jumpToStep(value);
                    _this10.updateGame();
                    // pause();
                });

                this.playing = null;

                var pause = function pause() {
                    clearTimeout(_this10.playing);
                    if (_this10.game.movesCount == _this10.game.moves.length) {
                        _this10.play.options.state = "rewind";
                        _this10.play.setFaIcon("undo");
                    } else {
                        _this10.play.options.state = "paused";
                        _this10.play.setFaIcon("play");
                    }
                };

                var play = function play() {
                    _this10.play.options.state = "playing";
                    _this10.play.setFaIcon("pause");
                    var proceed = function proceed() {
                        _this10.advanceStep();
                        _this10.updateGame();
                        if (_this10.game.movesCount == _this10.game.moves.length) {
                            pause();
                        } else {
                            _this10.playing = setTimeout(proceed, _this10.options.stepTimeout / _this10.speedSelect.get().speed);
                        }
                    };
                    _this10.playing = setTimeout(proceed, _this10.options.stepTimeout / _this10.speedSelect.get().speed);
                };

                this.play.addClickListener(function () {
                    if (_this10.play.options.state == "paused") {
                        play();
                    } else if (_this10.play.options.state == "playing") {
                        pause();
                    } else if (_this10.play.options.state == "rewind") {
                        _this10.initGameState();
                        _this10.updateGame();
                        play();
                    }
                });

                setTimeout(function () {
                    _this10.movesInput.addAceChangeListener(function () {
                        if (_this10.movesRedraw) {
                            _this10.movesRedraw = false;
                            return;
                        }
                        if (_this10.options.moves == _this10.movesInput.getValue()) {
                            return;
                        }
                        _this10.options.moves = _this10.movesInput.getValue();
                        _this10.load.setLevel(_UI.Level.WARNING);
                        _this10.load.setLabel("Reload");
                        _this10.load.enable();
                    });
                    _this10.stateInput.addAceChangeListener(function () {
                        if (_this10.stateRedraw) {
                            _this10.stateRedraw = false;
                            return;
                        }
                        if (_this10.options.input == _this10.stateInput.getValue()) {
                            return;
                        }
                        _this10.options.input = _this10.stateInput.getValue();
                        _this10.load.setLevel(_UI.Level.WARNING);
                        _this10.load.setLabel("Reload");
                        _this10.load.enable();
                    });
                }, 1000);

                this.load.addClickListener(function () {
                    _this10.redraw();
                });

                this.moveSelect.addNodeListener("change", function () {
                    _this10.jumpToStep(_this10.moveSelect.get().move);
                    _this10.updateGame();
                });

                setTimeout(function () {
                    _this10.redraw();
                    _this10.setWidth(_this10.desiredWidth);
                });

                window.addEventListener("resize", function () {
                    _this10.redraw();
                    _this10.setWidth(_this10.desiredWidth);
                });

                this.parent.parent.parent.addListener("resize", function () {
                    _this10.redraw();
                    _this10.setWidth(_this10.desiredWidth);
                });
            }
        }]);

        return MazeProblemWidget;
    }(_UI.UI.Element);

    function registerMarkup(markupClassMap) {
        markupClassMap.addClass("MazeProblemWidget", MazeProblemWidget);
    }
});
