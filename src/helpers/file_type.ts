export default function extensionFromMimeType(type: string): string {
    switch (type) {
        case "audio/mpeg":
            return "mp3";
        case "audio/ogg":
            return "ogg";
        case "audio/wav":
            return "wav";
        case "audio/x-m4a":
            return "m4a";
        case "audio/x-wav":
            return "wav";
        case "video/mp4":
            return "mp4";
        case "video/ogg":
            return "ogg";
        case "video/webm":
            return "webm";
    }
}