import "@byte-design/ui/themes/platform/index.css";
declare class AdFix {
    from: string;
    uuid: string;
    constructor(from: string, uuid: string);
    searchSDK(type: string, ad: any, callback?: () => void): void;
}
export default AdFix;
