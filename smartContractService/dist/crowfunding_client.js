"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Crowfunding = void 0;
const algosdk_1 = __importDefault(require("algosdk"));
const bkr = __importStar(require("beaker-ts"));
class Crowfunding extends bkr.ApplicationClient {
    constructor() {
        super(...arguments);
        this.desc = "";
        this.appSchema = { declared: { db_id: { type: bkr.AVMType.bytes, key: "db_id", desc: "", static: false }, end_date: { type: bkr.AVMType.uint64, key: "end_date", desc: "", static: false }, is_closed: { type: bkr.AVMType.uint64, key: "is_closed", desc: "", static: false }, receiver: { type: bkr.AVMType.bytes, key: "receiver", desc: "", static: false }, target: { type: bkr.AVMType.uint64, key: "target", desc: "", static: false } }, dynamic: {} };
        this.acctSchema = { declared: {}, dynamic: {} };
        this.approvalProgram = "I3ByYWdtYSB2ZXJzaW9uIDcKaW50Y2Jsb2NrIDAgMQpieXRlY2Jsb2NrIDB4MTUxZjdjNzUgMHg2OTczNWY2MzZjNmY3MzY1NjQgMHg3NDYxNzI2NzY1NzQgMHg3MjY1NjM2NTY5NzY2NTcyIDB4MDAwMzMyMzAzMCAweDY1NmU2NDVmNjQ2MTc0NjUgMHg2NDYyNWY2OTY0CnR4biBOdW1BcHBBcmdzCmludGNfMCAvLyAwCj09CmJueiBtYWluX2wxNAp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweGJmZDgxYjg5IC8vICJjbGFpbSgpc3RyaW5nIgo9PQpibnogbWFpbl9sMTMKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHgwODFjMDIxMyAvLyAiZG9uYXRlKHBheSlzdHJpbmciCj09CmJueiBtYWluX2wxMgp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDliM2Y3OWQ0IC8vICJnZXRfY29sbGVjdGVkKCl1aW50NjQiCj09CmJueiBtYWluX2wxMQp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDk4YjI3YmY1IC8vICJnZXRfZGJfaWQoKXN0cmluZyIKPT0KYm56IG1haW5fbDEwCnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4YmRlNTQzMDYgLy8gInJlZnVuZChhY2NvdW50LHVpbnQ2NClzdHJpbmciCj09CmJueiBtYWluX2w5CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4Njg2OTM3MzMgLy8gInNldEFsbChzdHJpbmcsdWludDY0LHVpbnQ2NCxzdHJpbmcpdm9pZCIKPT0KYm56IG1haW5fbDgKZXJyCm1haW5fbDg6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CnR4bmEgQXBwbGljYXRpb25BcmdzIDEKc3RvcmUgMTIKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgpidG9pCnN0b3JlIDEzCnR4bmEgQXBwbGljYXRpb25BcmdzIDMKYnRvaQpzdG9yZSAxNAp0eG5hIEFwcGxpY2F0aW9uQXJncyA0CnN0b3JlIDE1CmxvYWQgMTIKbG9hZCAxMwpsb2FkIDE0CmxvYWQgMTUKY2FsbHN1YiBzZXRBbGxfMTAKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDk6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CnR4bmEgQXBwbGljYXRpb25BcmdzIDEKaW50Y18wIC8vIDAKZ2V0Ynl0ZQpzdG9yZSA3CnR4bmEgQXBwbGljYXRpb25BcmdzIDIKYnRvaQpzdG9yZSA4CmxvYWQgNwpsb2FkIDgKY2FsbHN1YiByZWZ1bmRfOQpzdG9yZSA5CmJ5dGVjXzAgLy8gMHgxNTFmN2M3NQpsb2FkIDkKY29uY2F0CmxvZwppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sMTA6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgZ2V0ZGJpZF84CnN0b3JlIDUKYnl0ZWNfMCAvLyAweDE1MWY3Yzc1CmxvYWQgNQpjb25jYXQKbG9nCmludGNfMSAvLyAxCnJldHVybgptYWluX2wxMToKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiBnZXRjb2xsZWN0ZWRfNwpzdG9yZSA0CmJ5dGVjXzAgLy8gMHgxNTFmN2M3NQpsb2FkIDQKaXRvYgpjb25jYXQKbG9nCmludGNfMSAvLyAxCnJldHVybgptYWluX2wxMjoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKdHhuIEdyb3VwSW5kZXgKaW50Y18xIC8vIDEKLQpzdG9yZSAxCmxvYWQgMQpndHhucyBUeXBlRW51bQppbnRjXzEgLy8gcGF5Cj09CmFzc2VydApsb2FkIDEKY2FsbHN1YiBkb25hdGVfNgpzdG9yZSAyCmJ5dGVjXzAgLy8gMHgxNTFmN2M3NQpsb2FkIDIKY29uY2F0CmxvZwppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sMTM6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgY2xhaW1fNQpzdG9yZSAwCmJ5dGVjXzAgLy8gMHgxNTFmN2M3NQpsb2FkIDAKY29uY2F0CmxvZwppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sMTQ6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KYm56IG1haW5fbDE2CmVycgptYWluX2wxNjoKdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKPT0KYXNzZXJ0CmNhbGxzdWIgY3JlYXRlXzEKaW50Y18xIC8vIDEKcmV0dXJuCgovLyBhdXRoX29ubHkKYXV0aG9ubHlfMDoKZ2xvYmFsIENyZWF0b3JBZGRyZXNzCj09CnJldHN1YgoKLy8gY3JlYXRlCmNyZWF0ZV8xOgpieXRlY18xIC8vICJpc19jbG9zZWQiCmludGNfMCAvLyAwCmFwcF9nbG9iYWxfcHV0CmJ5dGVjXzMgLy8gInJlY2VpdmVyIgpnbG9iYWwgQ3JlYXRvckFkZHJlc3MKYXBwX2dsb2JhbF9wdXQKcmV0c3ViCgovLyBhdXRoX29ubHkKYXV0aG9ubHlfMjoKZ2xvYmFsIENyZWF0b3JBZGRyZXNzCj09CnJldHN1YgoKLy8gYXV0aF9vbmx5CmF1dGhvbmx5XzM6CmJ5dGVjXzMgLy8gInJlY2VpdmVyIgphcHBfZ2xvYmFsX2dldAo9PQpyZXRzdWIKCi8vIGF1dGhfb25seQphdXRob25seV80OgpnbG9iYWwgQ3JlYXRvckFkZHJlc3MKPT0KcmV0c3ViCgovLyBjbGFpbQpjbGFpbV81Ogp0eG4gU2VuZGVyCmNhbGxzdWIgYXV0aG9ubHlfMwovLyB1bmF1dGhvcml6ZWQKYXNzZXJ0Cmdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCmJhbGFuY2UKYnl0ZWNfMiAvLyAidGFyZ2V0IgphcHBfZ2xvYmFsX2dldAo+PQphc3NlcnQKYnl0ZWNfMSAvLyAiaXNfY2xvc2VkIgpieXRlY18xIC8vICJpc19jbG9zZWQiCmFwcF9nbG9iYWxfZ2V0CmludGNfMSAvLyAxCisKYXBwX2dsb2JhbF9wdXQKaXR4bl9iZWdpbgppbnRjXzEgLy8gcGF5Cml0eG5fZmllbGQgVHlwZUVudW0KZ2xvYmFsIENyZWF0b3JBZGRyZXNzCml0eG5fZmllbGQgUmVjZWl2ZXIKaW50Y18wIC8vIDAKaXR4bl9maWVsZCBBbW91bnQKZ2xvYmFsIENyZWF0b3JBZGRyZXNzCml0eG5fZmllbGQgQ2xvc2VSZW1haW5kZXJUbwppdHhuX3N1Ym1pdApieXRlYyA0IC8vIDB4MDAwMzMyMzAzMApyZXRzdWIKCi8vIGRvbmF0ZQpkb25hdGVfNjoKc3RvcmUgMwpieXRlY18xIC8vICJpc19jbG9zZWQiCmFwcF9nbG9iYWxfZ2V0CmludGNfMCAvLyAwCj09Cmdsb2JhbCBMYXRlc3RUaW1lc3RhbXAKYnl0ZWMgNSAvLyAiZW5kX2RhdGUiCmFwcF9nbG9iYWxfZ2V0Cjw9CiYmCmxvYWQgMwpndHhucyBUeXBlRW51bQppbnRjXzEgLy8gcGF5Cj09CiYmCmxvYWQgMwpndHhucyBSZWNlaXZlcgpnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwo9PQomJgpsb2FkIDMKZ3R4bnMgQ2xvc2VSZW1haW5kZXJUbwpnbG9iYWwgWmVyb0FkZHJlc3MKPT0KJiYKbG9hZCAzCmd0eG5zIEZlZQpwdXNoaW50IDEwMDAgLy8gMTAwMAo8PQomJgpsb2FkIDMKZ3R4bnMgUmVrZXlUbwpnbG9iYWwgWmVyb0FkZHJlc3MKPT0KJiYKYXNzZXJ0CmJ5dGVjIDQgLy8gMHgwMDAzMzIzMDMwCnJldHN1YgoKLy8gZ2V0X2NvbGxlY3RlZApnZXRjb2xsZWN0ZWRfNzoKZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKYmFsYW5jZQpwdXNoaW50IDEwMDAwMDAgLy8gMTAwMDAwMAovCnJldHN1YgoKLy8gZ2V0X2RiX2lkCmdldGRiaWRfODoKdHhuIFNlbmRlcgpjYWxsc3ViIGF1dGhvbmx5XzIKLy8gdW5hdXRob3JpemVkCmFzc2VydApieXRlYyA2IC8vICJkYl9pZCIKYXBwX2dsb2JhbF9nZXQKc3RvcmUgNgpsb2FkIDYKbGVuCml0b2IKZXh0cmFjdCA2IDAKbG9hZCA2CmNvbmNhdApzdG9yZSA2CmxvYWQgNgpyZXRzdWIKCi8vIHJlZnVuZApyZWZ1bmRfOToKc3RvcmUgMTEKc3RvcmUgMTAKdHhuIFNlbmRlcgpjYWxsc3ViIGF1dGhvbmx5XzQKLy8gdW5hdXRob3JpemVkCmFzc2VydApieXRlY18xIC8vICJpc19jbG9zZWQiCmFwcF9nbG9iYWxfZ2V0CmludGNfMCAvLyAwCj09Cmdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCmJhbGFuY2UKYnl0ZWNfMiAvLyAidGFyZ2V0IgphcHBfZ2xvYmFsX2dldAo8CiYmCmFzc2VydAppdHhuX2JlZ2luCmludGNfMSAvLyBwYXkKaXR4bl9maWVsZCBUeXBlRW51bQpsb2FkIDEwCnR4bmFzIEFjY291bnRzCml0eG5fZmllbGQgUmVjZWl2ZXIKbG9hZCAxMQpnbG9iYWwgTWluQmFsYW5jZQotCnR4biBGZWUKLQppdHhuX2ZpZWxkIEFtb3VudAppdHhuX3N1Ym1pdApieXRlYyA0IC8vIDB4MDAwMzMyMzAzMApyZXRzdWIKCi8vIHNldEFsbApzZXRBbGxfMTA6CnN0b3JlIDE5CnN0b3JlIDE4CnN0b3JlIDE3CnN0b3JlIDE2CnR4biBTZW5kZXIKY2FsbHN1YiBhdXRob25seV8wCi8vIHVuYXV0aG9yaXplZAphc3NlcnQKaW50Y18wIC8vIDAKYnl0ZWMgNiAvLyAiZGJfaWQiCmFwcF9nbG9iYWxfZ2V0X2V4CnN0b3JlIDIxCnN0b3JlIDIwCmxvYWQgMjEKIQphc3NlcnQKYnl0ZWMgNiAvLyAiZGJfaWQiCmxvYWQgMTYKZXh0cmFjdCAyIDAKYXBwX2dsb2JhbF9wdXQKaW50Y18wIC8vIDAKYnl0ZWMgNSAvLyAiZW5kX2RhdGUiCmFwcF9nbG9iYWxfZ2V0X2V4CnN0b3JlIDIzCnN0b3JlIDIyCmxvYWQgMjMKIQphc3NlcnQKYnl0ZWMgNSAvLyAiZW5kX2RhdGUiCmxvYWQgMTcKYXBwX2dsb2JhbF9wdXQKaW50Y18wIC8vIDAKYnl0ZWNfMiAvLyAidGFyZ2V0IgphcHBfZ2xvYmFsX2dldF9leApzdG9yZSAyNQpzdG9yZSAyNApsb2FkIDI1CiEKYXNzZXJ0CmJ5dGVjXzIgLy8gInRhcmdldCIKbG9hZCAxOAphcHBfZ2xvYmFsX3B1dApieXRlY18zIC8vICJyZWNlaXZlciIKbG9hZCAxOQpleHRyYWN0IDIgMAphcHBfZ2xvYmFsX3B1dApyZXRzdWI=";
        this.clearProgram = "I3ByYWdtYSB2ZXJzaW9uIDcKcHVzaGludCAwIC8vIDAKcmV0dXJu";
        this.methods = [
            new algosdk_1.default.ABIMethod({ name: "claim", desc: "", args: [], returns: { type: "string", desc: "" } }),
            new algosdk_1.default.ABIMethod({ name: "donate", desc: "", args: [{ type: "pay", name: "donation", desc: "" }], returns: { type: "string", desc: "" } }),
            new algosdk_1.default.ABIMethod({ name: "get_collected", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
            new algosdk_1.default.ABIMethod({ name: "get_db_id", desc: "", args: [], returns: { type: "string", desc: "" } }),
            new algosdk_1.default.ABIMethod({ name: "refund", desc: "", args: [{ type: "account", name: "account", desc: "" }, { type: "uint64", name: "amount", desc: "" }], returns: { type: "string", desc: "" } }),
            new algosdk_1.default.ABIMethod({ name: "setAll", desc: "", args: [{ type: "string", name: "db_id", desc: "" }, { type: "uint64", name: "end_date", desc: "" }, { type: "uint64", name: "target", desc: "" }, { type: "string", name: "receiver", desc: "" }], returns: { type: "void", desc: "" } })
        ];
        this.compose = {
            claim: (txnParams, atc) => __awaiter(this, void 0, void 0, function* () {
                return this.addMethodCall(algosdk_1.default.getMethodByName(this.methods, "claim"), {}, txnParams, atc);
            }),
            donate: (args, txnParams, atc) => __awaiter(this, void 0, void 0, function* () {
                return this.addMethodCall(algosdk_1.default.getMethodByName(this.methods, "donate"), { donation: args.donation }, txnParams, atc);
            }),
            get_collected: (txnParams, atc) => __awaiter(this, void 0, void 0, function* () {
                return this.addMethodCall(algosdk_1.default.getMethodByName(this.methods, "get_collected"), {}, txnParams, atc);
            }),
            get_db_id: (txnParams, atc) => __awaiter(this, void 0, void 0, function* () {
                return this.addMethodCall(algosdk_1.default.getMethodByName(this.methods, "get_db_id"), {}, txnParams, atc);
            }),
            refund: (args, txnParams, atc) => __awaiter(this, void 0, void 0, function* () {
                return this.addMethodCall(algosdk_1.default.getMethodByName(this.methods, "refund"), { account: args.account, amount: args.amount }, txnParams, atc);
            }),
            setAll: (args, txnParams, atc) => __awaiter(this, void 0, void 0, function* () {
                return this.addMethodCall(algosdk_1.default.getMethodByName(this.methods, "setAll"), { db_id: args.db_id, end_date: args.end_date, target: args.target, receiver: args.receiver }, txnParams, atc);
            })
        };
    }
    claim(txnParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.execute(yield this.compose.claim(txnParams));
            return new bkr.ABIResult(result, result.returnValue);
        });
    }
    donate(args, txnParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.execute(yield this.compose.donate({ donation: args.donation }, txnParams));
            return new bkr.ABIResult(result, result.returnValue);
        });
    }
    get_collected(txnParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.execute(yield this.compose.get_collected(txnParams));
            return new bkr.ABIResult(result, result.returnValue);
        });
    }
    get_db_id(txnParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.execute(yield this.compose.get_db_id(txnParams));
            return new bkr.ABIResult(result, result.returnValue);
        });
    }
    refund(args, txnParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.execute(yield this.compose.refund({ account: args.account, amount: args.amount }, txnParams));
            return new bkr.ABIResult(result, result.returnValue);
        });
    }
    setAll(args, txnParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.execute(yield this.compose.setAll({ db_id: args.db_id, end_date: args.end_date, target: args.target, receiver: args.receiver }, txnParams));
            return new bkr.ABIResult(result);
        });
    }
}
exports.Crowfunding = Crowfunding;
