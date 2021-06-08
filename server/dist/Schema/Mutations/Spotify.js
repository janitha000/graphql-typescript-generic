"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPOTIFY_LOGIN_REFRESH = exports.SPOTIFY_LOGIN = void 0;
const SpotifyLogin_1 = require("../TypeDefs/SpotifyLogin");
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
exports.SPOTIFY_LOGIN = {
    type: SpotifyLogin_1.SpotifyLogin,
    args: {
        input: { type: SpotifyLogin_1.SpotifyLoginInput }
    },
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        const { code } = args.input;
        const spotifyAPI = new spotify_web_api_node_1.default({
            redirectUri: 'http://localhost:3000/spotifycallback',
            clientId: '071d2d218882479e965a9c3727fcf74f',
            clientSecret: 'c715e12b8e90462aa14e040761f62a82',
        });
        let data = yield spotifyAPI.authorizationCodeGrant(code);
        console.log(data.body);
        return data.body;
    })
};
exports.SPOTIFY_LOGIN_REFRESH = {
    type: SpotifyLogin_1.SpotifyLogin,
    args: {
        input: { type: SpotifyLogin_1.SpotifyLoginRefreshInput }
    },
    resolve: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
        const { refresh_token } = args.input;
        const spotifyAPI = new spotify_web_api_node_1.default({
            redirectUri: 'http://localhost:3000/spotifycallback',
            clientId: '071d2d218882479e965a9c3727fcf74f',
            clientSecret: 'c715e12b8e90462aa14e040761f62a82',
            refreshToken: refresh_token
        });
        let data = yield spotifyAPI.refreshAccessToken();
        return data.body;
    })
};
