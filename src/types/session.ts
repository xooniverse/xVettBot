interface KSession {
    path?: string;
    start?: number;
    end?: number;
    state: KState;
    type?: string;
}

type KState = "ask_start" | "ask_end" | "trim" | "none";

export default KSession;
