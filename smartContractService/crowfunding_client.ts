import algosdk from "algosdk";
import * as bkr from "beaker-ts";
export class Crowfunding extends bkr.ApplicationClient {
    desc: string = "";
    override appSchema: bkr.Schema = { declared: { db_id: { type: bkr.AVMType.bytes, key: "db_id", desc: "", static: false }, end_date: { type: bkr.AVMType.uint64, key: "end_date", desc: "", static: false }, is_closed: { type: bkr.AVMType.uint64, key: "is_closed", desc: "", static: false }, receiver: { type: bkr.AVMType.bytes, key: "receiver", desc: "", static: false }, target: { type: bkr.AVMType.uint64, key: "target", desc: "", static: false } }, dynamic: {} };
    override acctSchema: bkr.Schema = { declared: {}, dynamic: {} };
    override approvalProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDcKaW50Y2Jsb2NrIDAgMQpieXRlY2Jsb2NrIDB4MTUxZjdjNzUgMHg2OTczNWY2MzZjNmY3MzY1NjQgMHg3MjY1NjM2NTY5NzY2NTcyIDB4NzQ2MTcyNjc2NTc0IDB4MDAwMzMyMzAzMCAweDY1NmU2NDVmNjQ2MTc0NjUgMHg2NDYyNWY2OTY0CnR4biBOdW1BcHBBcmdzCmludGNfMCAvLyAwCj09CmJueiBtYWluX2wxNAp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweGJmZDgxYjg5IC8vICJjbGFpbSgpc3RyaW5nIgo9PQpibnogbWFpbl9sMTMKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHgwODFjMDIxMyAvLyAiZG9uYXRlKHBheSlzdHJpbmciCj09CmJueiBtYWluX2wxMgp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDliM2Y3OWQ0IC8vICJnZXRfY29sbGVjdGVkKCl1aW50NjQiCj09CmJueiBtYWluX2wxMQp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDk4YjI3YmY1IC8vICJnZXRfZGJfaWQoKXN0cmluZyIKPT0KYm56IG1haW5fbDEwCnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4YmRlNTQzMDYgLy8gInJlZnVuZChhY2NvdW50LHVpbnQ2NClzdHJpbmciCj09CmJueiBtYWluX2w5CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4MmUxNzc4YTcgLy8gInNldEFsbChzdHJpbmcsdWludDY0LHVpbnQ2NCxhZGRyZXNzKXZvaWQiCj09CmJueiBtYWluX2w4CmVycgptYWluX2w4Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydAp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCnN0b3JlIDEyCnR4bmEgQXBwbGljYXRpb25BcmdzIDIKYnRvaQpzdG9yZSAxMwp0eG5hIEFwcGxpY2F0aW9uQXJncyAzCmJ0b2kKc3RvcmUgMTQKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgNApzdG9yZSAxNQpsb2FkIDEyCmxvYWQgMTMKbG9hZCAxNApsb2FkIDE1CmNhbGxzdWIgc2V0QWxsXzEwCmludGNfMSAvLyAxCnJldHVybgptYWluX2w5Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydAp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmludGNfMCAvLyAwCmdldGJ5dGUKc3RvcmUgNwp0eG5hIEFwcGxpY2F0aW9uQXJncyAyCmJ0b2kKc3RvcmUgOApsb2FkIDcKbG9hZCA4CmNhbGxzdWIgcmVmdW5kXzkKc3RvcmUgOQpieXRlY18wIC8vIDB4MTUxZjdjNzUKbG9hZCA5CmNvbmNhdApsb2cKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDEwOgp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIGdldGRiaWRfOApzdG9yZSA1CmJ5dGVjXzAgLy8gMHgxNTFmN2M3NQpsb2FkIDUKY29uY2F0CmxvZwppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sMTE6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgZ2V0Y29sbGVjdGVkXzcKc3RvcmUgNApieXRlY18wIC8vIDB4MTUxZjdjNzUKbG9hZCA0Cml0b2IKY29uY2F0CmxvZwppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sMTI6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CnR4biBHcm91cEluZGV4CmludGNfMSAvLyAxCi0Kc3RvcmUgMQpsb2FkIDEKZ3R4bnMgVHlwZUVudW0KaW50Y18xIC8vIHBheQo9PQphc3NlcnQKbG9hZCAxCmNhbGxzdWIgZG9uYXRlXzYKc3RvcmUgMgpieXRlY18wIC8vIDB4MTUxZjdjNzUKbG9hZCAyCmNvbmNhdApsb2cKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDEzOgp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIGNsYWltXzUKc3RvcmUgMApieXRlY18wIC8vIDB4MTUxZjdjNzUKbG9hZCAwCmNvbmNhdApsb2cKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDE0Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CmJueiBtYWluX2wxNgplcnIKbWFpbl9sMTY6CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCj09CmFzc2VydApjYWxsc3ViIGNyZWF0ZV8xCmludGNfMSAvLyAxCnJldHVybgoKLy8gYXV0aF9vbmx5CmF1dGhvbmx5XzA6Cmdsb2JhbCBDcmVhdG9yQWRkcmVzcwo9PQpyZXRzdWIKCi8vIGNyZWF0ZQpjcmVhdGVfMToKYnl0ZWNfMSAvLyAiaXNfY2xvc2VkIgppbnRjXzAgLy8gMAphcHBfZ2xvYmFsX3B1dApieXRlY18yIC8vICJyZWNlaXZlciIKZ2xvYmFsIENyZWF0b3JBZGRyZXNzCmFwcF9nbG9iYWxfcHV0CnJldHN1YgoKLy8gYXV0aF9vbmx5CmF1dGhvbmx5XzI6Cmdsb2JhbCBDcmVhdG9yQWRkcmVzcwo9PQpyZXRzdWIKCi8vIGF1dGhfb25seQphdXRob25seV8zOgpieXRlY18yIC8vICJyZWNlaXZlciIKYXBwX2dsb2JhbF9nZXQKPT0KcmV0c3ViCgovLyBhdXRoX29ubHkKYXV0aG9ubHlfNDoKZ2xvYmFsIENyZWF0b3JBZGRyZXNzCj09CnJldHN1YgoKLy8gY2xhaW0KY2xhaW1fNToKdHhuIFNlbmRlcgpjYWxsc3ViIGF1dGhvbmx5XzMKLy8gdW5hdXRob3JpemVkCmFzc2VydApnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwpiYWxhbmNlCmJ5dGVjXzMgLy8gInRhcmdldCIKYXBwX2dsb2JhbF9nZXQKPj0KYXNzZXJ0CmJ5dGVjXzEgLy8gImlzX2Nsb3NlZCIKYnl0ZWNfMSAvLyAiaXNfY2xvc2VkIgphcHBfZ2xvYmFsX2dldAppbnRjXzEgLy8gMQorCmFwcF9nbG9iYWxfcHV0Cml0eG5fYmVnaW4KaW50Y18xIC8vIHBheQppdHhuX2ZpZWxkIFR5cGVFbnVtCmludGNfMCAvLyAwCml0eG5fZmllbGQgQW1vdW50CmJ5dGVjXzIgLy8gInJlY2VpdmVyIgphcHBfZ2xvYmFsX2dldAppdHhuX2ZpZWxkIENsb3NlUmVtYWluZGVyVG8KaXR4bl9zdWJtaXQKYnl0ZWMgNCAvLyAweDAwMDMzMjMwMzAKcmV0c3ViCgovLyBkb25hdGUKZG9uYXRlXzY6CnN0b3JlIDMKYnl0ZWNfMSAvLyAiaXNfY2xvc2VkIgphcHBfZ2xvYmFsX2dldAppbnRjXzAgLy8gMAo9PQpnbG9iYWwgTGF0ZXN0VGltZXN0YW1wCmJ5dGVjIDUgLy8gImVuZF9kYXRlIgphcHBfZ2xvYmFsX2dldAo8PQomJgpsb2FkIDMKZ3R4bnMgVHlwZUVudW0KaW50Y18xIC8vIHBheQo9PQomJgpsb2FkIDMKZ3R4bnMgUmVjZWl2ZXIKZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKPT0KJiYKbG9hZCAzCmd0eG5zIENsb3NlUmVtYWluZGVyVG8KZ2xvYmFsIFplcm9BZGRyZXNzCj09CiYmCmxvYWQgMwpndHhucyBGZWUKcHVzaGludCAxMDAwIC8vIDEwMDAKPD0KJiYKbG9hZCAzCmd0eG5zIFJla2V5VG8KZ2xvYmFsIFplcm9BZGRyZXNzCj09CiYmCmFzc2VydApieXRlYyA0IC8vIDB4MDAwMzMyMzAzMApyZXRzdWIKCi8vIGdldF9jb2xsZWN0ZWQKZ2V0Y29sbGVjdGVkXzc6Cmdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCmJhbGFuY2UKcHVzaGludCAxMDAwMDAwIC8vIDEwMDAwMDAKLwpyZXRzdWIKCi8vIGdldF9kYl9pZApnZXRkYmlkXzg6CnR4biBTZW5kZXIKY2FsbHN1YiBhdXRob25seV8yCi8vIHVuYXV0aG9yaXplZAphc3NlcnQKYnl0ZWMgNiAvLyAiZGJfaWQiCmFwcF9nbG9iYWxfZ2V0CnN0b3JlIDYKbG9hZCA2CmxlbgppdG9iCmV4dHJhY3QgNiAwCmxvYWQgNgpjb25jYXQKc3RvcmUgNgpsb2FkIDYKcmV0c3ViCgovLyByZWZ1bmQKcmVmdW5kXzk6CnN0b3JlIDExCnN0b3JlIDEwCnR4biBTZW5kZXIKY2FsbHN1YiBhdXRob25seV80Ci8vIHVuYXV0aG9yaXplZAphc3NlcnQKYnl0ZWNfMSAvLyAiaXNfY2xvc2VkIgphcHBfZ2xvYmFsX2dldAppbnRjXzAgLy8gMAo9PQpnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwpiYWxhbmNlCmJ5dGVjXzMgLy8gInRhcmdldCIKYXBwX2dsb2JhbF9nZXQKPAomJgphc3NlcnQKaXR4bl9iZWdpbgppbnRjXzEgLy8gcGF5Cml0eG5fZmllbGQgVHlwZUVudW0KbG9hZCAxMAp0eG5hcyBBY2NvdW50cwppdHhuX2ZpZWxkIFJlY2VpdmVyCmxvYWQgMTEKZ2xvYmFsIE1pbkJhbGFuY2UKLQp0eG4gRmVlCi0KaXR4bl9maWVsZCBBbW91bnQKaXR4bl9zdWJtaXQKYnl0ZWMgNCAvLyAweDAwMDMzMjMwMzAKcmV0c3ViCgovLyBzZXRBbGwKc2V0QWxsXzEwOgpzdG9yZSAxOQpzdG9yZSAxOApzdG9yZSAxNwpzdG9yZSAxNgp0eG4gU2VuZGVyCmNhbGxzdWIgYXV0aG9ubHlfMAovLyB1bmF1dGhvcml6ZWQKYXNzZXJ0CmludGNfMCAvLyAwCmJ5dGVjIDYgLy8gImRiX2lkIgphcHBfZ2xvYmFsX2dldF9leApzdG9yZSAyMQpzdG9yZSAyMApsb2FkIDIxCiEKYXNzZXJ0CmJ5dGVjIDYgLy8gImRiX2lkIgpsb2FkIDE2CmV4dHJhY3QgMiAwCmFwcF9nbG9iYWxfcHV0CmludGNfMCAvLyAwCmJ5dGVjIDUgLy8gImVuZF9kYXRlIgphcHBfZ2xvYmFsX2dldF9leApzdG9yZSAyMwpzdG9yZSAyMgpsb2FkIDIzCiEKYXNzZXJ0CmJ5dGVjIDUgLy8gImVuZF9kYXRlIgpsb2FkIDE3CmFwcF9nbG9iYWxfcHV0CmludGNfMCAvLyAwCmJ5dGVjXzMgLy8gInRhcmdldCIKYXBwX2dsb2JhbF9nZXRfZXgKc3RvcmUgMjUKc3RvcmUgMjQKbG9hZCAyNQohCmFzc2VydApieXRlY18zIC8vICJ0YXJnZXQiCmxvYWQgMTgKYXBwX2dsb2JhbF9wdXQKYnl0ZWNfMiAvLyAicmVjZWl2ZXIiCmxvYWQgMTkKYXBwX2dsb2JhbF9wdXQKcmV0c3Vi";
    override clearProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDcKcHVzaGludCAwIC8vIDAKcmV0dXJu";
    override methods: algosdk.ABIMethod[] = [
        new algosdk.ABIMethod({ name: "claim", desc: "", args: [], returns: { type: "string", desc: "" } }),
        new algosdk.ABIMethod({ name: "donate", desc: "", args: [{ type: "pay", name: "donation", desc: "" }], returns: { type: "string", desc: "" } }),
        new algosdk.ABIMethod({ name: "get_collected", desc: "", args: [], returns: { type: "uint64", desc: "" } }),
        new algosdk.ABIMethod({ name: "get_db_id", desc: "", args: [], returns: { type: "string", desc: "" } }),
        new algosdk.ABIMethod({ name: "refund", desc: "", args: [{ type: "account", name: "account", desc: "" }, { type: "uint64", name: "amount", desc: "" }], returns: { type: "string", desc: "" } }),
        new algosdk.ABIMethod({ name: "setAll", desc: "", args: [{ type: "string", name: "db_id", desc: "" }, { type: "uint64", name: "end_date", desc: "" }, { type: "uint64", name: "target", desc: "" }, { type: "address", name: "receiver", desc: "" }], returns: { type: "void", desc: "" } })
    ];
    async claim(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<string>> {
        const result = await this.execute(await this.compose.claim(txnParams));
        return new bkr.ABIResult<string>(result, result.returnValue as string);
    }
    async donate(args: {
        donation: algosdk.TransactionWithSigner | algosdk.Transaction;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<string>> {
        const result = await this.execute(await this.compose.donate({ donation: args.donation }, txnParams));
        return new bkr.ABIResult<string>(result, result.returnValue as string);
    }
    async get_collected(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.get_collected(txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    async get_db_id(txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<string>> {
        const result = await this.execute(await this.compose.get_db_id(txnParams));
        return new bkr.ABIResult<string>(result, result.returnValue as string);
    }
    async refund(args: {
        account: string;
        amount: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<string>> {
        const result = await this.execute(await this.compose.refund({ account: args.account, amount: args.amount }, txnParams));
        return new bkr.ABIResult<string>(result, result.returnValue as string);
    }
    async setAll(args: {
        db_id: string;
        end_date: bigint;
        target: bigint;
        receiver: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.setAll({ db_id: args.db_id, end_date: args.end_date, target: args.target, receiver: args.receiver }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    compose = {
        claim: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "claim"), {}, txnParams, atc);
        },
        donate: async (args: {
            donation: algosdk.TransactionWithSigner | algosdk.Transaction;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "donate"), { donation: args.donation }, txnParams, atc);
        },
        get_collected: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "get_collected"), {}, txnParams, atc);
        },
        get_db_id: async (txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "get_db_id"), {}, txnParams, atc);
        },
        refund: async (args: {
            account: string;
            amount: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "refund"), { account: args.account, amount: args.amount }, txnParams, atc);
        },
        setAll: async (args: {
            db_id: string;
            end_date: bigint;
            target: bigint;
            receiver: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "setAll"), { db_id: args.db_id, end_date: args.end_date, target: args.target, receiver: args.receiver }, txnParams, atc);
        }
    };
}
