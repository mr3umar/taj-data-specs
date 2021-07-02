export declare namespace IndirectPay {
    type Params = {
        description: string;
        orderId: string;
        currency: string;
        amount: number;
        returnUrl: string;
        framed?: boolean;
        customerName?: string;
        customerEmail?: string;
        customerStreet1?: string;
        customerCity?: string;
        customerCountry?: string;
    };
    type Result = {
        output?: {
            transactionId: string;
            redirectUrl: string;
        };
        error?: {
            code: string;
            reference: string;
        };
    };
}
//# sourceMappingURL=indirect-pay.d.ts.map